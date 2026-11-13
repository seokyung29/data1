Add-Type -AssemblyName System.IO.Compression.FileSystem

$zip = [System.IO.Compression.ZipFile]::OpenRead((Resolve-Path "가상기업 3개 5개년매출데이터.xlsx").Path)

function Get-EntryText($name) {
    $e = $zip.GetEntry($name)
    if (-not $e) { return $null }
    $s = $e.Open()
    $r = New-Object System.IO.StreamReader($s)
    $t = $r.ReadToEnd()
    $r.Close()
    $s.Close()
    return $t
}

$ssText = Get-EntryText("xl/sharedStrings.xml")
$ssXml = [xml]$ssText
$strings = @()
$nsmgr = New-Object System.Xml.XmlNamespaceManager($ssXml.NameTable)
$nsmgr.AddNamespace("d", "http://schemas.openxmlformats.org/spreadsheetml/2006/main")
foreach ($node in $ssXml.SelectNodes("//d:si", $nsmgr)) {
    $strings += $node.InnerText
}

$sheet1Text = Get-EntryText("xl/worksheets/sheet1.xml")
$s1Xml = [xml]$sheet1Text
$rowNodes = $s1Xml.SelectNodes("//d:sheetData/d:row", $nsmgr)

$cleanMonthly = @()

foreach ($row in $rowNodes) {
    $rNum = [int]$row.GetAttribute("r")
    if ($rNum -eq 1) { continue } # header
    $cells = @{}
    foreach ($c in $row.SelectNodes("d:c", $nsmgr)) {
        $ref = $c.GetAttribute("r") -replace '\d+', ''
        $t = $c.GetAttribute("t")
        $vNode = $c.SelectSingleNode("d:v", $nsmgr)
        $val = if ($vNode) { $vNode.InnerText } else { "" }
        if ($t -eq "s") {
            $val = $strings[[int]$val]
        }
        $cells[$ref] = $val
    }
    
    if ($cells["A"]) {
        $serial = [double]$cells["A"]
        # Excel date serial to date: base 1899-12-30
        $date = (Get-Date "1899-12-30").AddDays($serial)
        $dateStr = $date.ToString("yyyy-MM")
        $cleanMonthly += [PSCustomObject]@{
            index = $cleanMonthly.Count + 1
            date = $dateStr
            year = $date.Year
            month = $date.Month
            hanbit = [math]::Round([double]$cells["B"], 2)
            mirae = [math]::Round([double]$cells["C"], 2)
            saebom = [math]::Round([double]$cells["D"], 2)
        }
    }
}

$zip.Dispose()

$cleanMonthly | ConvertTo-Json -Depth 3 | Out-File -FilePath "clean_monthly.json" -Encoding utf8
Write-Host "Exported $($cleanMonthly.Count) clean monthly records."
