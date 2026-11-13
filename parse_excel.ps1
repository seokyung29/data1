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

$data = @()
foreach ($row in $rowNodes) {
    $rNum = $row.GetAttribute("r")
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
    $data += [PSCustomObject]@{
        Row = $rNum
        A = $cells["A"]
        B = $cells["B"]
        C = $cells["C"]
        D = $cells["D"]
    }
}

$sheet2Text = Get-EntryText("xl/worksheets/sheet2.xml")
$s2Xml = [xml]$sheet2Text
$s2Rows = $s2Xml.SelectNodes("//d:sheetData/d:row", $nsmgr)
$s2Data = @()
foreach ($row in $s2Rows) {
    $rNum = $row.GetAttribute("r")
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
    $s2Data += [PSCustomObject]@{
        Row = $rNum
        A = $cells["A"]
        B = $cells["B"]
        C = $cells["C"]
        D = $cells["D"]
    }
}

$zip.Dispose()

$result = @{
    Strings = $strings
    Monthly = $data
    Annual = $s2Data
}

$result | ConvertTo-Json -Depth 5 | Out-File -FilePath "extracted_data.json" -Encoding utf8
Write-Host "Successfully extracted data! Monthly rows: $($data.Count), Annual rows: $($s2Data.Count)"
