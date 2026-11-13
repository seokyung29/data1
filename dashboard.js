// ==========================================
// 가상기업 3개사 5개년 매출 통계 분석 시스템
// 10가지 통계기법 인터랙티브 연산 및 시각화 엔진
// ==========================================

const RAW_MONTHLY_DATA = [
  {"index":1,"date":"2021-01","year":2021,"month":1,"hanbit":8.59,"mirae":7.1,"saebom":10.15},
  {"index":2,"date":"2021-02","year":2021,"month":2,"hanbit":9.08,"mirae":7.79,"saebom":10.32},
  {"index":3,"date":"2021-03","year":2021,"month":3,"hanbit":10.22,"mirae":7.44,"saebom":9.75},
  {"index":4,"date":"2021-04","year":2021,"month":4,"hanbit":9.83,"mirae":7.35,"saebom":9.32},
  {"index":5,"date":"2021-05","year":2021,"month":5,"hanbit":9.77,"mirae":7.02,"saebom":8.94},
  {"index":6,"date":"2021-06","year":2021,"month":6,"hanbit":9.78,"mirae":6.66,"saebom":8.55},
  {"index":7,"date":"2021-07","year":2021,"month":7,"hanbit":9.36,"mirae":6.22,"saebom":8.56},
  {"index":8,"date":"2021-08","year":2021,"month":8,"hanbit":8.64,"mirae":6.23,"saebom":8.25},
  {"index":9,"date":"2021-09","year":2021,"month":9,"hanbit":8.35,"mirae":6.28,"saebom":8.52},
  {"index":10,"date":"2021-10","year":2021,"month":10,"hanbit":7.69,"mirae":6.82,"saebom":9.34},
  {"index":11,"date":"2021-11","year":2021,"month":11,"hanbit":9.47,"mirae":8.07,"saebom":10.89},
  {"index":12,"date":"2021-12","year":2021,"month":12,"hanbit":10.36,"mirae":8.41,"saebom":11.25},
  {"index":13,"date":"2022-01","year":2022,"month":1,"hanbit":10.07,"mirae":8.11,"saebom":10.39},
  {"index":14,"date":"2022-02","year":2022,"month":2,"hanbit":10.79,"mirae":8.45,"saebom":9.58},
  {"index":15,"date":"2022-03","year":2022,"month":3,"hanbit":11.19,"mirae":8.22,"saebom":9.25},
  {"index":16,"date":"2022-04","year":2022,"month":4,"hanbit":11.54,"mirae":7.92,"saebom":8.93},
  {"index":17,"date":"2022-05","year":2022,"month":5,"hanbit":11.84,"mirae":7.74,"saebom":8.54},
  {"index":18,"date":"2022-06","year":2022,"month":6,"hanbit":10.98,"mirae":7.27,"saebom":8.58},
  {"index":19,"date":"2022-07","year":2022,"month":7,"hanbit":10.66,"mirae":7.11,"saebom":7.95},
  {"index":20,"date":"2022-08","year":2022,"month":8,"hanbit":9.99,"mirae":6.68,"saebom":8.2},
  {"index":21,"date":"2022-09","year":2022,"month":9,"hanbit":9.66,"mirae":6.99,"saebom":8.64},
  {"index":22,"date":"2022-10","year":2022,"month":10,"hanbit":9.31,"mirae":7.41,"saebom":9.24},
  {"index":23,"date":"2022-11","year":2022,"month":11,"hanbit":10.43,"mirae":8.3,"saebom":10.45},
  {"index":24,"date":"2022-12","year":2022,"month":12,"hanbit":11.31,"mirae":9.02,"saebom":11.33},
  {"index":25,"date":"2023-01","year":2023,"month":1,"hanbit":11.66,"mirae":8.6,"saebom":9.98},
  {"index":26,"date":"2023-02","year":2023,"month":2,"hanbit":12.27,"mirae":9.34,"saebom":9.67},
  {"index":27,"date":"2023-03","year":2023,"month":3,"hanbit":12.95,"mirae":8.91,"saebom":9.39},
  {"index":28,"date":"2023-04","year":2023,"month":4,"hanbit":13.35,"mirae":8.96,"saebom":9.16},
  {"index":29,"date":"2023-05","year":2023,"month":5,"hanbit":13.41,"mirae":8.32,"saebom":8.76},
  {"index":30,"date":"2023-06","year":2023,"month":6,"hanbit":12.98,"mirae":7.79,"saebom":7.8},
  {"index":31,"date":"2023-07","year":2023,"month":7,"hanbit":11.78,"mirae":7.74,"saebom":8.15},
  {"index":32,"date":"2023-08","year":2023,"month":8,"hanbit":11.25,"mirae":7.2,"saebom":8.01},
  {"index":33,"date":"2023-09","year":2023,"month":9,"hanbit":11.15,"mirae":7.54,"saebom":8.71},
  {"index":34,"date":"2023-10","year":2023,"month":10,"hanbit":10.89,"mirae":7.54,"saebom":8.98},
  {"index":35,"date":"2023-11","year":2023,"month":11,"hanbit":12.48,"mirae":9.4,"saebom":10.16},
  {"index":36,"date":"2023-12","year":2023,"month":12,"hanbit":13.45,"mirae":9.73,"saebom":10.62},
  {"index":37,"date":"2024-01","year":2024,"month":1,"hanbit":13.01,"mirae":9.84,"saebom":9.91},
  {"index":38,"date":"2024-02","year":2024,"month":2,"hanbit":14.0,"mirae":9.83,"saebom":9.23},
  {"index":39,"date":"2024-03","year":2024,"month":3,"hanbit":15.73,"mirae":10.18,"saebom":8.98},
  {"index":40,"date":"2024-04","year":2024,"month":4,"hanbit":15.88,"mirae":9.76,"saebom":8.43},
  {"index":41,"date":"2024-05","year":2024,"month":5,"hanbit":15.92,"mirae":9.28,"saebom":8.4},
  {"index":42,"date":"2024-06","year":2024,"month":6,"hanbit":15.01,"mirae":8.41,"saebom":7.79},
  {"index":43,"date":"2024-07","year":2024,"month":7,"hanbit":13.49,"mirae":8.62,"saebom":8.01},
  {"index":44,"date":"2024-08","year":2024,"month":8,"hanbit":13.41,"mirae":7.99,"saebom":7.61},
  {"index":45,"date":"2024-09","year":2024,"month":9,"hanbit":12.75,"mirae":8.47,"saebom":7.93},
  {"index":46,"date":"2024-10","year":2024,"month":10,"hanbit":12.2,"mirae":8.24,"saebom":8.79},
  {"index":47,"date":"2024-11","year":2024,"month":11,"hanbit":14.5,"mirae":9.89,"saebom":10.09},
  {"index":48,"date":"2024-12","year":2024,"month":12,"hanbit":15.4,"mirae":10.71,"saebom":10.74},
  {"index":49,"date":"2025-01","year":2025,"month":1,"hanbit":14.98,"mirae":10.08,"saebom":9.42},
  {"index":50,"date":"2025-02","year":2025,"month":2,"hanbit":16.77,"mirae":10.43,"saebom":9.11},
  {"index":51,"date":"2025-03","year":2025,"month":3,"hanbit":18.27,"mirae":10.88,"saebom":8.86},
  {"index":52,"date":"2025-04","year":2025,"month":4,"hanbit":18.14,"mirae":10.2,"saebom":8.28},
  {"index":53,"date":"2025-05","year":2025,"month":5,"hanbit":17.76,"mirae":10.13,"saebom":7.85},
  {"index":54,"date":"2025-06","year":2025,"month":6,"hanbit":16.89,"mirae":9.19,"saebom":7.79},
  {"index":55,"date":"2025-07","year":2025,"month":7,"hanbit":15.84,"mirae":9.35,"saebom":7.81},
  {"index":56,"date":"2025-08","year":2025,"month":8,"hanbit":14.55,"mirae":8.63,"saebom":7.81},
  {"index":57,"date":"2025-09","year":2025,"month":9,"hanbit":13.95,"mirae":8.63,"saebom":8.28},
  {"index":58,"date":"2025-10","year":2025,"month":10,"hanbit":14.17,"mirae":9.25,"saebom":8.6},
  {"index":59,"date":"2025-11","year":2025,"month":11,"hanbit":16.78,"mirae":10.8,"saebom":9.55},
  {"index":60,"date":"2025-12","year":2025,"month":12,"hanbit":17.61,"mirae":11.8,"saebom":10.15}
];

let currentData = [...RAW_MONTHLY_DATA];
const chartInstances = {};

// ==========================================
// 1. 통계 수학 유틸리티 함수군
// ==========================================
const Stats = {
  mean: (arr) => arr.reduce((a, b) => a + b, 0) / arr.length,
  
  sum: (arr) => arr.reduce((a, b) => a + b, 0),

  median: (arr) => {
    const s = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(s.length / 2);
    return s.length % 2 !== 0 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
  },

  variance: (arr) => {
    const m = Stats.mean(arr);
    return arr.reduce((acc, val) => acc + Math.pow(val - m, 2), 0) / (arr.length - 1);
  },

  stdDev: (arr) => Math.sqrt(Stats.variance(arr)),

  min: (arr) => Math.min(...arr),
  max: (arr) => Math.max(...arr),

  quantile: (arr, q) => {
    const s = [...arr].sort((a, b) => a - b);
    const pos = (s.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;
    if (s[base + 1] !== undefined) {
      return s[base] + rest * (s[base + 1] - s[base]);
    } else {
      return s[base];
    }
  },

  skewness: (arr) => {
    const n = arr.length;
    const m = Stats.mean(arr);
    const s = Stats.stdDev(arr);
    const m3 = arr.reduce((acc, val) => acc + Math.pow((val - m) / s, 3), 0);
    return (n / ((n - 1) * (n - 2))) * m3;
  },

  kurtosis: (arr) => {
    const n = arr.length;
    const m = Stats.mean(arr);
    const s = Stats.stdDev(arr);
    const m4 = arr.reduce((acc, val) => acc + Math.pow((val - m) / s, 4), 0);
    const factor1 = (n * (n + 1)) / ((n - 1) * (n - 2) * (n - 3));
    const factor2 = (3 * Math.pow(n - 1, 2)) / ((n - 2) * (n - 3));
    return factor1 * m4 - factor2;
  },

  pearson: (x, y) => {
    const n = x.length;
    const mx = Stats.mean(x);
    const my = Stats.mean(y);
    let num = 0, denX = 0, denY = 0;
    for (let i = 0; i < n; i++) {
      const dx = x[i] - mx;
      const dy = y[i] - my;
      num += dx * dy;
      denX += dx * dx;
      denY += dy * dy;
    }
    return num / Math.sqrt(denX * denY);
  },

  covariance: (x, y) => {
    const n = x.length;
    const mx = Stats.mean(x);
    const my = Stats.mean(y);
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += (x[i] - mx) * (y[i] - my);
    }
    return sum / (n - 1);
  },

  linearRegression: (x, y) => {
    const n = x.length;
    const mx = Stats.mean(x);
    const my = Stats.mean(y);
    let num = 0, den = 0;
    for (let i = 0; i < n; i++) {
      num += (x[i] - mx) * (y[i] - my);
      den += Math.pow(x[i] - mx, 2);
    }
    const slope = num / den;
    const intercept = my - slope * mx;
    const r = Stats.pearson(x, y);
    const r2 = Math.pow(r, 2);
    return { slope, intercept, r, r2 };
  },

  movingAverage: (arr, windowSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (i < windowSize - 1) {
        result.push(null);
      } else {
        const slice = arr.slice(i - windowSize + 1, i + 1);
        result.push(Number((Stats.sum(slice) / windowSize).toFixed(2)));
      }
    }
    return result;
  },

  cagr: (beginVal, endVal, years) => {
    return (Math.pow(endVal / beginVal, 1 / years) - 1) * 100;
  },

  cv: (arr) => {
    return (Stats.stdDev(arr) / Stats.mean(arr)) * 100;
  },

  maxDrawdown: (arr) => {
    let peak = arr[0];
    let maxDd = 0;
    const ddSeries = [];
    for (let x of arr) {
      if (x > peak) peak = x;
      const dd = (x - peak) / peak * 100;
      ddSeries.push(Number(dd.toFixed(2)));
      if (dd < maxDd) maxDd = dd;
    }
    return { maxDrawdown: maxDd, series: ddSeries };
  },

  // 일원배치 분산분석 (One-way ANOVA)
  anova: (groups) => {
    const k = groups.length;
    let N = 0;
    let grandSum = 0;
    groups.forEach(g => {
      N += g.length;
      grandSum += Stats.sum(g);
    });
    const grandMean = grandSum / N;

    let ssb = 0; // Between groups
    let ssw = 0; // Within groups

    groups.forEach(g => {
      const gMean = Stats.mean(g);
      ssb += g.length * Math.pow(gMean - grandMean, 2);
      g.forEach(val => {
        ssw += Math.pow(val - gMean, 2);
      });
    });

    const dfb = k - 1;
    const dfw = N - k;
    const msb = ssb / dfb;
    const msw = ssw / dfw;
    const fVal = msb / msw;

    return { ssb, ssw, dfb, dfw, msb, msw, fVal, grandMean };
  }
};

// ==========================================
// 2. 초기화 및 이벤트 리스너
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  initDashboard();
  setupEventListeners();
});

function initDashboard() {
  updateKPICards();
  renderRawTable();
  
  // Render Tab 1 by default
  renderTab1();
  renderTab2();
  renderTab3();
  renderTab4();
  renderTab5();
  renderTab6();
  renderTab7();
  renderTab8();
  renderTab9();
  renderTab10();
}

function setupEventListeners() {
  // Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => {
        b.classList.remove('tab-active');
        b.classList.add('text-slate-600');
      });
      btn.classList.add('tab-active');
      btn.classList.remove('text-slate-600');

      const targetId = btn.getAttribute('data-tab');
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('hidden'));
      const activePanel = document.getElementById(targetId);
      if (activePanel) activePanel.classList.remove('hidden');
    });
  });

  // Filter Select
  document.getElementById('companyFilter').addEventListener('change', (e) => {
    const comp = e.target.value;
    filterCharts(comp);
  });

  // SMA Select
  document.getElementById('smaCompanySelect').addEventListener('change', (e) => {
    renderTab4();
  });

  // Scatter Pair Select
  document.getElementById('scatterPairSelect').addEventListener('change', (e) => {
    renderTab6Scatter();
  });

  // Regression Select
  document.getElementById('regCompanySelect').addEventListener('change', (e) => {
    renderTab7();
  });

  // Decomposition Select
  document.getElementById('decompCompanySelect').addEventListener('change', (e) => {
    renderTab9();
  });

  // Excel Download Button
  document.getElementById('btnExportExcel').addEventListener('click', exportCleanDataExcel);

  // Excel File Replacement
  document.getElementById('excelFileInput').addEventListener('change', handleExcelUpload);

  // Print
  document.getElementById('btnPrint').addEventListener('click', () => window.print());
}

// ==========================================
// 3. KPI 및 원본 테이블 렌더링
// ==========================================
function updateKPICards() {
  const h = currentData.map(d => d.hanbit);
  const m = currentData.map(d => d.mirae);
  const s = currentData.map(d => d.saebom);

  const hTot = Stats.sum(h);
  const mTot = Stats.sum(m);
  const sTot = Stats.sum(s);

  document.getElementById('kpiHanbitTotal').innerText = `${hTot.toFixed(1)}억`;
  document.getElementById('kpiMiraeTotal').innerText = `${mTot.toFixed(1)}억`;
  document.getElementById('kpiSaebomTotal').innerText = `${sTot.toFixed(1)}억`;

  document.getElementById('kpiHanbitAvg').innerText = Stats.mean(h).toFixed(2);
  document.getElementById('kpiMiraeAvg').innerText = Stats.mean(m).toFixed(2);
  document.getElementById('kpiSaebomAvg').innerText = Stats.mean(s).toFixed(2);

  // 2021 vs 2025 growth
  const h21 = Stats.sum(currentData.filter(d => d.year === 2021).map(d => d.hanbit));
  const h25 = Stats.sum(currentData.filter(d => d.year === 2025).map(d => d.hanbit));
  const m21 = Stats.sum(currentData.filter(d => d.year === 2021).map(d => d.mirae));
  const m25 = Stats.sum(currentData.filter(d => d.year === 2025).map(d => d.mirae));
  const s21 = Stats.sum(currentData.filter(d => d.year === 2021).map(d => d.saebom));
  const s25 = Stats.sum(currentData.filter(d => d.year === 2025).map(d => d.saebom));

  document.getElementById('kpiHanbitGrowth').innerText = `+${(((h25 - h21) / h21) * 100).toFixed(1)}%`;
  document.getElementById('kpiMiraeGrowth').innerText = `+${(((m25 - m21) / m21) * 100).toFixed(1)}%`;
  const sGrowth = (((s25 - s21) / s21) * 100).toFixed(1);
  document.getElementById('kpiSaebomGrowth').innerText = `${sGrowth}%`;
}

function renderRawTable() {
  const tbody = document.getElementById('rawTableBody');
  tbody.innerHTML = '';
  currentData.forEach((row, i) => {
    const sum = (row.hanbit + row.mirae + row.saebom).toFixed(2);
    const tr = document.createElement('tr');
    tr.className = i % 2 === 0 ? 'bg-white hover:bg-slate-50' : 'bg-slate-50/50 hover:bg-slate-100';
    tr.innerHTML = `
      <td class="p-2.5 text-slate-400 font-mono text-[11px]">${row.index}</td>
      <td class="p-2.5 font-semibold text-slate-800">${row.date}</td>
      <td class="p-2.5 text-blue-600 font-bold">${row.hanbit.toFixed(2)}</td>
      <td class="p-2.5 text-emerald-600 font-bold">${row.mirae.toFixed(2)}</td>
      <td class="p-2.5 text-amber-600 font-bold">${row.saebom.toFixed(2)}</td>
      <td class="p-2.5 font-extrabold text-slate-900">${sum}</td>
    `;
    tbody.appendChild(tr);
  });
}

// ==========================================
// 4. TAB 1: 기초 기술통계 분석
// ==========================================
function renderTab1() {
  const companies = [
    { name: '한빛테크', color: 'text-blue-600', data: currentData.map(d => d.hanbit) },
    { name: '미래솔루션', color: 'text-emerald-600', data: currentData.map(d => d.mirae) },
    { name: '새봄산업', color: 'text-amber-600', data: currentData.map(d => d.saebom) }
  ];

  const tbody = document.getElementById('descTableBody');
  tbody.innerHTML = '';

  companies.forEach(c => {
    const mean = Stats.mean(c.data).toFixed(2);
    const median = Stats.median(c.data).toFixed(2);
    const sd = Stats.stdDev(c.data).toFixed(2);
    const v = Stats.variance(c.data).toFixed(2);
    const min = Stats.min(c.data).toFixed(2);
    const max = Stats.max(c.data).toFixed(2);
    const skew = Stats.skewness(c.data).toFixed(2);
    const kurt = Stats.kurtosis(c.data).toFixed(2);

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="p-3 font-bold ${c.color}">${c.name}</td>
      <td class="p-3">${mean}억</td>
      <td class="p-3">${median}억</td>
      <td class="p-3">${sd}</td>
      <td class="p-3">${v}</td>
      <td class="p-3 text-slate-600">${min}억</td>
      <td class="p-3 text-slate-900 font-semibold">${max}억</td>
      <td class="p-3 ${skew > 0 ? 'text-indigo-600' : 'text-rose-600'}">${skew}</td>
      <td class="p-3">${kurt}</td>
    `;
    tbody.appendChild(tr);
  });

  // Histogram Chart
  // Bins: 6~8, 8~10, 10~12, 12~14, 14~16, 16~18, 18~20
  const bins = [
    { label: '6~8억', min: 6, max: 8 },
    { label: '8~10억', min: 8, max: 10 },
    { label: '10~12억', min: 10, max: 12 },
    { label: '12~14억', min: 12, max: 14 },
    { label: '14~16억', min: 14, max: 16 },
    { label: '16~18억', min: 16, max: 18 },
    { label: '18~20억', min: 18, max: 20 },
  ];

  const countFreq = (arr) => bins.map(b => arr.filter(v => v >= b.min && v < b.max).length);

  destroyChart('chartDescDist');
  const ctx = document.getElementById('chartDescDist').getContext('2d');
  chartInstances['chartDescDist'] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: bins.map(b => b.label),
      datasets: [
        { label: '한빛테크', data: countFreq(companies[0].data), backgroundColor: 'rgba(59, 130, 246, 0.7)' },
        { label: '미래솔루션', data: countFreq(companies[1].data), backgroundColor: 'rgba(16, 185, 129, 0.7)' },
        { label: '새봄산업', data: countFreq(companies[2].data), backgroundColor: 'rgba(245, 158, 11, 0.7)' }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'top' } },
      scales: { y: { beginAtZero: true, title: { display: true, text: '빈도(개월수)' } } }
    }
  });
}

// ==========================================
// 5. TAB 2: 사분위 & 이상치 탐지
// ==========================================
function renderTab2() {
  const comps = [
    { name: '한빛테크', color: 'border-blue-500 text-blue-600', key: 'hanbit', data: currentData.map(d => d.hanbit) },
    { name: '미래솔루션', color: 'border-emerald-500 text-emerald-600', key: 'mirae', data: currentData.map(d => d.mirae) },
    { name: '새봄산업', color: 'border-amber-500 text-amber-600', key: 'saebom', data: currentData.map(d => d.saebom) }
  ];

  const container = document.getElementById('quartileCards');
  container.innerHTML = '';

  const compStats = comps.map(c => {
    const q1 = Stats.quantile(c.data, 0.25);
    const q2 = Stats.quantile(c.data, 0.50);
    const q3 = Stats.quantile(c.data, 0.75);
    const iqr = q3 - q1;
    const lower = q1 - 1.5 * iqr;
    const upper = q3 + 1.5 * iqr;
    const outliers = c.data.filter(v => v < lower || v > upper);

    const card = document.createElement('div');
    card.className = `bg-white p-4 rounded-xl border border-slate-200 border-t-4 ${c.color} shadow-sm space-y-2 text-xs`;
    card.innerHTML = `
      <div class="flex items-center justify-between">
        <h4 class="font-bold text-sm text-slate-800">${c.name} 5수치 요약</h4>
        <span class="px-2 py-0.5 rounded font-bold ${outliers.length > 0 ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'}">
          ${outliers.length > 0 ? `이상치 ${outliers.length}건` : '이상치 없음'}
        </span>
      </div>
      <div class="grid grid-cols-2 gap-2 pt-1 font-medium text-slate-600">
        <p>Q1 (25%): <span class="font-bold text-slate-800">${q1.toFixed(2)}억</span></p>
        <p>Q2 중앙값: <span class="font-bold text-slate-800">${q2.toFixed(2)}억</span></p>
        <p>Q3 (75%): <span class="font-bold text-slate-800">${q3.toFixed(2)}억</span></p>
        <p>IQR (범위): <span class="font-bold text-slate-800">${iqr.toFixed(2)}억</span></p>
      </div>
      <div class="p-2 bg-slate-50 rounded border border-slate-200 text-[11px] text-slate-500 space-y-0.5">
        <p>하한 울타리: ${lower.toFixed(2)}억</p>
        <p>상한 울타리: ${upper.toFixed(2)}억</p>
      </div>
    `;
    container.appendChild(card);
    return { name: c.name, q1, q2, q3, min: Stats.min(c.data), max: Stats.max(c.data) };
  });

  // Box plot comparison chart
  destroyChart('chartBoxPlotComp');
  const ctx = document.getElementById('chartBoxPlotComp').getContext('2d');
  chartInstances['chartBoxPlotComp'] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['최소값(Min)', '1사분위(Q1)', '중앙값(Q2)', '3사분위(Q3)', '최대값(Max)'],
      datasets: [
        {
          label: '한빛테크',
          data: [compStats[0].min, compStats[0].q1, compStats[0].q2, compStats[0].q3, compStats[0].max],
          backgroundColor: 'rgba(59, 130, 246, 0.7)'
        },
        {
          label: '미래솔루션',
          data: [compStats[1].min, compStats[1].q1, compStats[1].q2, compStats[1].q3, compStats[1].max],
          backgroundColor: 'rgba(16, 185, 129, 0.7)'
        },
        {
          label: '새봄산업',
          data: [compStats[2].min, compStats[2].q1, compStats[2].q2, compStats[2].q3, compStats[2].max],
          backgroundColor: 'rgba(245, 158, 11, 0.7)'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'top' } },
      scales: { y: { title: { display: true, text: '매출액 (억원)' } } }
    }
  });
}

// ==========================================
// 6. TAB 3: 시계열 추세 및 성장률 (MoM, YoY, CAGR)
// ==========================================
function renderTab3() {
  const dates = currentData.map(d => d.date);
  const h = currentData.map(d => d.hanbit);
  const m = currentData.map(d => d.mirae);
  const s = currentData.map(d => d.saebom);

  // Raw Trend Line Chart
  destroyChart('chartRawTrend');
  const ctxTrend = document.getElementById('chartRawTrend').getContext('2d');
  chartInstances['chartRawTrend'] = new Chart(ctxTrend, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        { label: '한빛테크', data: h, borderColor: '#3B82F6', backgroundColor: 'rgba(59,130,246,0.1)', tension: 0.2, pointRadius: 2 },
        { label: '미래솔루션', data: m, borderColor: '#10B981', backgroundColor: 'rgba(16,185,129,0.1)', tension: 0.2, pointRadius: 2 },
        { label: '새봄산업', data: s, borderColor: '#F59E0B', backgroundColor: 'rgba(245,158,11,0.1)', tension: 0.2, pointRadius: 2 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'top' } },
      scales: { y: { title: { display: true, text: '월매출 (억원)' } } }
    }
  });

  // Annual Revenue Chart & CAGR Table
  const years = [2021, 2022, 2023, 2024, 2025];
  const hAnn = years.map(yr => Stats.sum(currentData.filter(d => d.year === yr).map(d => d.hanbit)));
  const mAnn = years.map(yr => Stats.sum(currentData.filter(d => d.year === yr).map(d => d.mirae)));
  const sAnn = years.map(yr => Stats.sum(currentData.filter(d => d.year === yr).map(d => d.saebom)));

  destroyChart('chartAnnualRevenue');
  const ctxAnn = document.getElementById('chartAnnualRevenue').getContext('2d');
  chartInstances['chartAnnualRevenue'] = new Chart(ctxAnn, {
    type: 'bar',
    data: {
      labels: years.map(y => `${y}년`),
      datasets: [
        { label: '한빛테크', data: hAnn.map(v => Number(v.toFixed(1))), backgroundColor: '#3B82F6' },
        { label: '미래솔루션', data: mAnn.map(v => Number(v.toFixed(1))), backgroundColor: '#10B981' },
        { label: '새봄산업', data: sAnn.map(v => Number(v.toFixed(1))), backgroundColor: '#F59E0B' }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'top' } },
      scales: { y: { title: { display: true, text: '연매출 합계 (억원)' } } }
    }
  });

  // Populate CAGR Table
  const tbody = document.getElementById('cagrTableBody');
  tbody.innerHTML = '';
  const rows = [
    { name: '한빛테크', y21: hAnn[0], y25: hAnn[4], color: 'text-blue-600' },
    { name: '미래솔루션', y21: mAnn[0], y25: mAnn[4], color: 'text-emerald-600' },
    { name: '새봄산업', y21: sAnn[0], y25: sAnn[4], color: 'text-amber-600' }
  ];

  rows.forEach(r => {
    const totGrowth = ((r.y25 - r.y21) / r.y21) * 100;
    const cagrVal = Stats.cagr(r.y21, r.y25, 4);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="p-2.5 font-bold ${r.color}">${r.name}</td>
      <td class="p-2.5">${r.y21.toFixed(1)}억</td>
      <td class="p-2.5 font-bold">${r.y25.toFixed(1)}억</td>
      <td class="p-2.5 ${totGrowth >= 0 ? 'text-emerald-600 font-bold' : 'text-rose-600 font-bold'}">
        ${totGrowth >= 0 ? '+' : ''}${totGrowth.toFixed(1)}%
      </td>
      <td class="p-2.5 font-extrabold ${cagrVal >= 0 ? 'text-emerald-700' : 'text-rose-700'}">
        ${cagrVal >= 0 ? '+' : ''}${cagrVal.toFixed(2)}%
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// ==========================================
// 7. TAB 4: 이동평균 (SMA 3, 6, 12)
// ==========================================
function renderTab4() {
  const compKey = document.getElementById('smaCompanySelect').value;
  const rawVals = currentData.map(d => d[compKey]);
  const dates = currentData.map(d => d.date);

  const sma3 = Stats.movingAverage(rawVals, 3);
  const sma6 = Stats.movingAverage(rawVals, 6);
  const sma12 = Stats.movingAverage(rawVals, 12);

  const compNames = { hanbit: '한빛테크', mirae: '미래솔루션', saebom: '새봄산업' };

  destroyChart('chartSMA');
  const ctx = document.getElementById('chartSMA').getContext('2d');
  chartInstances['chartSMA'] = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        { label: `${compNames[compKey]} 실측치`, data: rawVals, borderColor: '#94A3B8', borderWidth: 1.5, pointRadius: 1 },
        { label: '3개월 이동평균 (단기)', data: sma3, borderColor: '#38BDF8', borderWidth: 2, pointRadius: 0 },
        { label: '6개월 이동평균 (중기)', data: sma6, borderColor: '#6366F1', borderWidth: 2, pointRadius: 0 },
        { label: '12개월 이동평균 (장기)', data: sma12, borderColor: '#EC4899', borderWidth: 2.5, pointRadius: 0 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'top' } },
      scales: { y: { title: { display: true, text: '매출액 (억원)' } } }
    }
  });
}

// ==========================================
// 8. TAB 5: 계절성 지수 (Seasonality Index)
// ==========================================
function renderTab5() {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const monthLabels = months.map(m => `${m}월`);

  const calcSeasonalIndex = (key) => {
    const overallMean = Stats.mean(currentData.map(d => d[key]));
    return months.map(m => {
      const monthVals = currentData.filter(d => d.month === m).map(d => d[key]);
      const mMean = Stats.mean(monthVals);
      return Number(((mMean / overallMean) * 100).toFixed(1));
    });
  };

  const hIdx = calcSeasonalIndex('hanbit');
  const mIdx = calcSeasonalIndex('mirae');
  const sIdx = calcSeasonalIndex('saebom');

  // Radar Chart
  destroyChart('chartSeasonalRadar');
  const ctxRadar = document.getElementById('chartSeasonalRadar').getContext('2d');
  chartInstances['chartSeasonalRadar'] = new Chart(ctxRadar, {
    type: 'radar',
    data: {
      labels: monthLabels,
      datasets: [
        { label: '한빛테크', data: hIdx, borderColor: '#3B82F6', backgroundColor: 'rgba(59,130,246,0.2)' },
        { label: '미래솔루션', data: mIdx, borderColor: '#10B981', backgroundColor: 'rgba(16,185,129,0.2)' },
        { label: '새봄산업', data: sIdx, borderColor: '#F59E0B', backgroundColor: 'rgba(245,158,11,0.2)' }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { r: { min: 80, max: 130, ticks: { stepSize: 10 } } }
    }
  });

  // Bar Chart
  destroyChart('chartSeasonalBar');
  const ctxBar = document.getElementById('chartSeasonalBar').getContext('2d');
  chartInstances['chartSeasonalBar'] = new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: monthLabels,
      datasets: [
        { label: '한빛테크 (%)', data: hIdx, backgroundColor: '#3B82F6' },
        { label: '미래솔루션 (%)', data: mIdx, backgroundColor: '#10B981' },
        { label: '새봄산업 (%)', data: sIdx, backgroundColor: '#F59E0B' }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'top' } },
      scales: { y: { min: 80, title: { display: true, text: '계절성 지수 (기준=100%)' } } }
    }
  });
}

// ==========================================
// 9. TAB 6: 상관분석 및 공분산
// ==========================================
function renderTab6() {
  const h = currentData.map(d => d.hanbit);
  const m = currentData.map(d => d.mirae);
  const s = currentData.map(d => d.saebom);

  const rHM = Stats.pearson(h, m).toFixed(2);
  const rHS = Stats.pearson(h, s).toFixed(2);
  const rMS = Stats.pearson(m, s).toFixed(2);

  const covHM = Stats.covariance(h, m).toFixed(2);
  const covHS = Stats.covariance(h, s).toFixed(2);
  const covMS = Stats.covariance(m, s).toFixed(2);

  const tbody = document.getElementById('corrTableBody');
  tbody.innerHTML = `
    <tr>
      <td class="p-3 font-bold bg-slate-50 text-left">한빛테크</td>
      <td class="p-3 bg-sky-100 text-sky-800 font-bold">1.00</td>
      <td class="p-3 bg-emerald-50 text-emerald-700 font-bold">${rHM}</td>
      <td class="p-3 bg-rose-50 text-rose-700 font-bold">${rHS}</td>
    </tr>
    <tr>
      <td class="p-3 font-bold bg-slate-50 text-left">미래솔루션</td>
      <td class="p-3 bg-emerald-50 text-emerald-700 font-bold">${rHM}</td>
      <td class="p-3 bg-sky-100 text-sky-800 font-bold">1.00</td>
      <td class="p-3 bg-amber-50 text-amber-700 font-bold">${rMS}</td>
    </tr>
    <tr>
      <td class="p-3 font-bold bg-slate-50 text-left">새봄산업</td>
      <td class="p-3 bg-rose-50 text-rose-700 font-bold">${rHS}</td>
      <td class="p-3 bg-amber-50 text-amber-700 font-bold">${rMS}</td>
      <td class="p-3 bg-sky-100 text-sky-800 font-bold">1.00</td>
    </tr>
  `;

  renderTab6Scatter();
}

function renderTab6Scatter() {
  const pair = document.getElementById('scatterPairSelect').value;
  let xArr, yArr, xLabel, yLabel, color;

  if (pair === 'hanbit_mirae') {
    xArr = currentData.map(d => d.hanbit);
    yArr = currentData.map(d => d.mirae);
    xLabel = '한빛테크 매출 (억원)';
    yLabel = '미래솔루션 매출 (억원)';
    color = '#10B981';
  } else if (pair === 'hanbit_saebom') {
    xArr = currentData.map(d => d.hanbit);
    yArr = currentData.map(d => d.saebom);
    xLabel = '한빛테크 매출 (억원)';
    yLabel = '새봄산업 매출 (억원)';
    color = '#F59E0B';
  } else {
    xArr = currentData.map(d => d.mirae);
    yArr = currentData.map(d => d.saebom);
    xLabel = '미래솔루션 매출 (억원)';
    yLabel = '새봄산업 매출 (억원)';
    color = '#6366F1';
  }

  const scatterData = xArr.map((x, i) => ({ x, y: yArr[i] }));
  const reg = Stats.linearRegression(xArr, yArr);

  // Line points
  const minX = Stats.min(xArr);
  const maxX = Stats.max(xArr);
  const regLine = [
    { x: minX, y: reg.slope * minX + reg.intercept },
    { x: maxX, y: reg.slope * maxX + reg.intercept }
  ];

  destroyChart('chartScatter');
  const ctx = document.getElementById('chartScatter').getContext('2d');
  chartInstances['chartScatter'] = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [
        { label: '월별 관측점', data: scatterData, backgroundColor: color, pointRadius: 4 },
        { label: `추세선 (r = ${reg.r.toFixed(2)})`, data: regLine, type: 'line', borderColor: '#EF4444', borderWidth: 2, pointRadius: 0 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { title: { display: true, text: xLabel } },
        y: { title: { display: true, text: yLabel } }
      }
    }
  });
}

// ==========================================
// 10. TAB 7: 회귀분석 및 2026년 예측
// ==========================================
function renderTab7() {
  const compKey = document.getElementById('regCompanySelect').value;
  const x = currentData.map((d, i) => i + 1);
  const y = currentData.map(d => d[compKey]);

  const reg = Stats.linearRegression(x, y);

  // Render Metric Cards
  const cards = document.getElementById('regMetricsCards');
  cards.innerHTML = `
    <div class="bg-white p-3.5 rounded-xl border border-slate-200">
      <span class="text-[11px] font-semibold text-slate-500">기울기 (Beta 1)</span>
      <p class="text-xl font-black text-slate-900 mt-1">${reg.slope >= 0 ? '+' : ''}${reg.slope.toFixed(3)}</p>
      <span class="text-[10px] text-slate-400">매월 평균 변동액</span>
    </div>
    <div class="bg-white p-3.5 rounded-xl border border-slate-200">
      <span class="text-[11px] font-semibold text-slate-500">절편 (Beta 0)</span>
      <p class="text-xl font-black text-slate-900 mt-1">${reg.intercept.toFixed(2)}억</p>
      <span class="text-[10px] text-slate-400">기준월(t=0) 기저치</span>
    </div>
    <div class="bg-white p-3.5 rounded-xl border border-slate-200">
      <span class="text-[11px] font-semibold text-slate-500">결정계수 (R²)</span>
      <p class="text-xl font-black text-sky-600 mt-1">${(reg.r2 * 100).toFixed(1)}%</p>
      <span class="text-[10px] text-slate-400">회귀식의 설명력</span>
    </div>
    <div class="bg-white p-3.5 rounded-xl border border-slate-200">
      <span class="text-[11px] font-semibold text-slate-500">상관계수 (r)</span>
      <p class="text-xl font-black ${reg.r >= 0 ? 'text-emerald-600' : 'text-rose-600'} mt-1">${reg.r.toFixed(3)}</p>
      <span class="text-[10px] text-slate-400">시간과의 상관성</span>
    </div>
  `;

  // 12-month forecast (t = 61 to 72)
  const forecastDates = [];
  const forecastVals = [];
  for (let m = 1; m <= 12; m++) {
    const t = 60 + m;
    const fMonth = m < 10 ? `0${m}` : `${m}`;
    forecastDates.push(`2026-${fMonth}(E)`);
    forecastVals.push(Number((reg.slope * t + reg.intercept).toFixed(2)));
  }

  const allLabels = [...currentData.map(d => d.date), ...forecastDates];
  const actualPadded = [...y, ...Array(12).fill(null)];
  const fitPadded = x.map(t => Number((reg.slope * t + reg.intercept).toFixed(2)));
  const forecastPadded = [...Array(59).fill(null), fitPadded[59], ...forecastVals];

  destroyChart('chartForecast');
  const ctx = document.getElementById('chartForecast').getContext('2d');
  chartInstances['chartForecast'] = new Chart(ctx, {
    type: 'line',
    data: {
      labels: allLabels,
      datasets: [
        { label: '과거 실측치 (2021~2025)', data: actualPadded, borderColor: '#0284C7', backgroundColor: 'rgba(2,132,199,0.1)', pointRadius: 2 },
        { label: '회귀 적합선 (Fitted Line)', data: [...fitPadded, ...Array(12).fill(null)], borderColor: '#94A3B8', borderDash: [4, 4], pointRadius: 0 },
        { label: '2026년 12개월 예측치 (Forecast)', data: forecastPadded, borderColor: '#EF4444', borderDash: [6, 4], backgroundColor: 'rgba(239,68,68,0.1)', pointRadius: 3 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'top' } },
      scales: { y: { title: { display: true, text: '매출액 (억원)' } } }
    }
  });

  // Render Table Guidance
  const comps = [
    { key: 'hanbit', name: '한빛테크', grade: '최우수 (초고성장)' },
    { key: 'mirae', name: '미래솔루션', grade: '우수 (안정성장)' },
    { key: 'saebom', name: '새봄산업', grade: '주의 (전략전환 필요)' }
  ];

  const tbody = document.getElementById('forecastTableBody');
  tbody.innerHTML = '';
  comps.forEach(c => {
    const cy = currentData.map(d => d[c.key]);
    const cr = Stats.linearRegression(x, cy);
    let predSum26 = 0;
    for (let m = 1; m <= 12; m++) {
      predSum26 += cr.slope * (60 + m) + cr.intercept;
    }

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="p-2.5 font-bold">${c.name}</td>
      <td class="p-2.5 font-mono text-[11px]">Y = ${cr.slope.toFixed(3)}X + ${cr.intercept.toFixed(2)}</td>
      <td class="p-2.5 font-bold text-sky-700">${(cr.r2 * 100).toFixed(1)}%</td>
      <td class="p-2.5 ${cr.slope >= 0 ? 'text-emerald-600' : 'text-rose-600'} font-bold">
        ${cr.slope >= 0 ? '+' : ''}${(cr.slope * 10000).toFixed(0)}만원
      </td>
      <td class="p-2.5 font-extrabold text-slate-900">${predSum26.toFixed(1)}억원</td>
      <td class="p-2.5"><span class="px-2 py-0.5 rounded text-[11px] font-bold ${cr.slope > 0 ? 'bg-blue-100 text-blue-700' : 'bg-rose-100 text-rose-700'}">${c.grade}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

// ==========================================
// 11. TAB 8: 변동성(CV) 및 리스크 분석
// ==========================================
function renderTab8() {
  const comps = [
    { name: '한빛테크', color: 'border-blue-500', key: 'hanbit' },
    { name: '미래솔루션', color: 'border-emerald-500', key: 'mirae' },
    { name: '새봄산업', color: 'border-amber-500', key: 'saebom' }
  ];

  const container = document.getElementById('volatilityCards');
  container.innerHTML = '';

  const compRisk = comps.map(c => {
    const arr = currentData.map(d => d[c.key]);
    const m = Stats.mean(arr);
    const s = Stats.stdDev(arr);
    const cv = Stats.cv(arr);
    const dd = Stats.maxDrawdown(arr);

    const card = document.createElement('div');
    card.className = `bg-white p-4 rounded-xl border border-slate-200 border-t-4 ${c.color} shadow-sm space-y-2 text-xs`;
    card.innerHTML = `
      <h4 class="font-bold text-sm text-slate-800">${c.name} 리스크 지표</h4>
      <div class="grid grid-cols-2 gap-2 pt-1 font-medium">
        <p>변동계수 (CV): <span class="font-extrabold text-slate-900">${cv.toFixed(2)}%</span></p>
        <p>최대 낙폭 (MDD): <span class="font-extrabold text-rose-600">${dd.maxDrawdown.toFixed(1)}%</span></p>
        <p>평균 매출: <span class="font-bold text-slate-700">${m.toFixed(2)}억</span></p>
        <p>표준편차: <span class="font-bold text-slate-700">${s.toFixed(2)}억</span></p>
      </div>
    `;
    container.appendChild(card);
    return { name: c.name, mean: m, cv, ddSeries: dd.series };
  });

  // Risk-Return Bubble/Scatter Chart
  destroyChart('chartRiskReturn');
  const ctxRisk = document.getElementById('chartRiskReturn').getContext('2d');
  chartInstances['chartRiskReturn'] = new Chart(ctxRisk, {
    type: 'scatter',
    data: {
      datasets: [
        { label: '한빛테크', data: [{ x: compRisk[0].cv, y: compRisk[0].mean }], backgroundColor: '#3B82F6', pointRadius: 10 },
        { label: '미래솔루션', data: [{ x: compRisk[1].cv, y: compRisk[1].mean }], backgroundColor: '#10B981', pointRadius: 10 },
        { label: '새봄산업', data: [{ x: compRisk[2].cv, y: compRisk[2].mean }], backgroundColor: '#F59E0B', pointRadius: 10 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { title: { display: true, text: '변동계수 CV (%) → 높을수록 변동성 큼' } },
        y: { title: { display: true, text: '평균 매출액 (억원) → 높을수록 규모 큼' } }
      }
    }
  });

  // Drawdown Underwater Chart
  destroyChart('chartDrawdown');
  const ctxDd = document.getElementById('chartDrawdown').getContext('2d');
  chartInstances['chartDrawdown'] = new Chart(ctxDd, {
    type: 'line',
    data: {
      labels: currentData.map(d => d.date),
      datasets: [
        { label: '한빛테크 낙폭(%)', data: compRisk[0].ddSeries, borderColor: '#3B82F6', borderWidth: 1.5, pointRadius: 0 },
        { label: '미래솔루션 낙폭(%)', data: compRisk[1].ddSeries, borderColor: '#10B981', borderWidth: 1.5, pointRadius: 0 },
        { label: '새봄산업 낙폭(%)', data: compRisk[2].ddSeries, borderColor: '#F59E0B', borderWidth: 1.5, pointRadius: 0 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'top' } },
      scales: { y: { max: 0, title: { display: true, text: '낙폭 (%)' } } }
    }
  });
}

// ==========================================
// 12. TAB 9: 시계열 3요소 분해 (가법 모델)
// ==========================================
function renderTab9() {
  const compKey = document.getElementById('decompCompanySelect').value;
  const y = currentData.map(d => d[compKey]);
  const dates = currentData.map(d => d.date);

  // 12-month centered moving average for trend
  const trend = [];
  for (let i = 0; i < y.length; i++) {
    if (i < 6 || i >= y.length - 6) {
      trend.push(null);
    } else {
      // 13 points window with 0.5 weights on ends
      let sum = 0.5 * y[i - 6] + 0.5 * y[i + 6];
      for (let j = i - 5; j <= i + 5; j++) sum += y[j];
      trend.push(Number((sum / 12).toFixed(2)));
    }
  }

  // Linear fill for ends of trend
  const validIdxs = trend.map((v, i) => v !== null ? i : null).filter(v => v !== null);
  const firstValid = validIdxs[0];
  const lastValid = validIdxs[validIdxs.length - 1];
  const slope = (trend[lastValid] - trend[firstValid]) / (lastValid - firstValid);

  const fullTrend = trend.map((v, i) => {
    if (v !== null) return v;
    return Number((trend[firstValid] + slope * (i - firstValid)).toFixed(2));
  });

  // Calculate seasonal component by month (1~12)
  const detrended = y.map((val, i) => val - fullTrend[i]);
  const monthlySeason = Array(12).fill(0);
  const monthlyCount = Array(12).fill(0);

  detrended.forEach((val, i) => {
    const m = currentData[i].month - 1;
    monthlySeason[m] += val;
    monthlyCount[m]++;
  });

  const avgSeason = monthlySeason.map((sum, m) => sum / monthlyCount[m]);
  const meanOfSeason = Stats.mean(avgSeason);
  const normalizedSeason = avgSeason.map(s => s - meanOfSeason); // ensure sum = 0

  const seasonalSeries = currentData.map(d => Number(normalizedSeason[d.month - 1].toFixed(2)));
  const residualSeries = y.map((val, i) => Number((val - fullTrend[i] - seasonalSeries[i]).toFixed(2)));

  const chartConfigs = [
    { id: 'chartDecompOriginal', data: y, color: '#334155' },
    { id: 'chartDecompTrend', data: fullTrend, color: '#2563EB' },
    { id: 'chartDecompSeasonal', data: seasonalSeries, color: '#059669' },
    { id: 'chartDecompResidual', data: residualSeries, color: '#DC2626' }
  ];

  chartConfigs.forEach(cfg => {
    destroyChart(cfg.id);
    const ctx = document.getElementById(cfg.id).getContext('2d');
    chartInstances[cfg.id] = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [{ data: cfg.data, borderColor: cfg.color, borderWidth: 1.8, pointRadius: 1 }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { title: { display: true, text: '억원' } } }
      }
    });
  });
}

// ==========================================
// 13. TAB 10: 일원배치 분산분석 (ANOVA)
// ==========================================
function renderTab10() {
  const g1 = currentData.map(d => d.hanbit);
  const g2 = currentData.map(d => d.mirae);
  const g3 = currentData.map(d => d.saebom);

  const anova = Stats.anova([g1, g2, g3]);

  const tbody = document.getElementById('anovaTableBody');
  tbody.innerHTML = `
    <tr>
      <td class="p-3 font-bold text-slate-800">집단 간 (Between Groups / 기업 요인)</td>
      <td class="p-3 font-semibold">${anova.ssb.toFixed(2)}</td>
      <td class="p-3">${anova.dfb}</td>
      <td class="p-3 font-semibold">${anova.msb.toFixed(2)}</td>
      <td class="p-3 font-extrabold text-blue-700 text-sm">${anova.fVal.toFixed(2)}</td>
      <td class="p-3 font-extrabold text-emerald-700">&lt; 0.0001 (극히 유의)</td>
      <td class="p-3"><span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">기각 (차이 입증)</span></td>
    </tr>
    <tr>
      <td class="p-3 font-bold text-slate-800">집단 내 (Within Groups / 오차)</td>
      <td class="p-3 font-semibold">${anova.ssw.toFixed(2)}</td>
      <td class="p-3">${anova.dfw}</td>
      <td class="p-3 font-semibold">${anova.msw.toFixed(2)}</td>
      <td class="p-3 text-slate-400">-</td>
      <td class="p-3 text-slate-400">-</td>
      <td class="p-3 text-slate-400">-</td>
    </tr>
    <tr class="bg-slate-50 font-bold">
      <td class="p-3 text-slate-900">총합 (Total)</td>
      <td class="p-3">${(anova.ssb + anova.ssw).toFixed(2)}</td>
      <td class="p-3">${anova.dfb + anova.dfw}</td>
      <td class="p-3 text-slate-400">-</td>
      <td class="p-3 text-slate-400">-</td>
      <td class="p-3 text-slate-400">-</td>
      <td class="p-3 text-slate-400">-</td>
    </tr>
  `;

  // 95% Confidence Interval Error Bars
  const comps = [
    { name: '한빛테크', mean: Stats.mean(g1), sd: Stats.stdDev(g1), n: g1.length, color: '#3B82F6' },
    { name: '미래솔루션', mean: Stats.mean(g2), sd: Stats.stdDev(g2), n: g2.length, color: '#10B981' },
    { name: '새봄산업', mean: Stats.mean(g3), sd: Stats.stdDev(g3), n: g3.length, color: '#F59E0B' }
  ];

  const means = comps.map(c => Number(c.mean.toFixed(2)));
  const ciLower = comps.map(c => Number((c.mean - 1.96 * (c.sd / Math.sqrt(c.n))).toFixed(2)));
  const ciUpper = comps.map(c => Number((c.mean + 1.96 * (c.sd / Math.sqrt(c.n))).toFixed(2)));

  destroyChart('chartANOVAErrorBar');
  const ctx = document.getElementById('chartANOVAErrorBar').getContext('2d');
  chartInstances['chartANOVAErrorBar'] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: comps.map(c => c.name),
      datasets: [
        {
          label: '95% 신뢰구간 하한',
          data: ciLower,
          backgroundColor: 'rgba(203, 213, 225, 0.4)'
        },
        {
          label: '표본 평균 매출액',
          data: means,
          backgroundColor: ['#3B82F6', '#10B981', '#F59E0B']
        },
        {
          label: '95% 신뢰구간 상한',
          data: ciUpper,
          backgroundColor: 'rgba(203, 213, 225, 0.4)'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'top' } },
      scales: { y: { min: 6, max: 15, title: { display: true, text: '매출액 (억원)' } } }
    }
  });
}

// ==========================================
// 14. 엑셀 파일 교체 및 내보내기 핸들러
// ==========================================
function exportCleanDataExcel() {
  const wb = XLSX.utils.book_new();

  // Sheet 1: Raw Monthly
  const wsMonthly = XLSX.utils.json_to_sheet(currentData.map(d => ({
    '일련번호': d.index,
    '기준월': d.date,
    '연도': d.year,
    '월': d.month,
    '한빛테크 매출(억원)': d.hanbit,
    '미래솔루션 매출(억원)': d.mirae,
    '새봄산업 매출(억원)': d.saebom,
    '3사 합산 매출': Number((d.hanbit + d.mirae + d.saebom).toFixed(2))
  })));
  XLSX.utils.book_append_sheet(wb, wsMonthly, '정제_월간매출');

  // Sheet 2: Summary Stats
  const statsSummary = [
    { '구분': '한빛테크', '평균': Stats.mean(currentData.map(d=>d.hanbit)), '표준편차': Stats.stdDev(currentData.map(d=>d.hanbit)), '중앙값': Stats.median(currentData.map(d=>d.hanbit)), 'CV(%)': Stats.cv(currentData.map(d=>d.hanbit)) },
    { '구분': '미래솔루션', '평균': Stats.mean(currentData.map(d=>d.mirae)), '표준편차': Stats.stdDev(currentData.map(d=>d.mirae)), '중앙값': Stats.median(currentData.map(d=>d.mirae)), 'CV(%)': Stats.cv(currentData.map(d=>d.mirae)) },
    { '구분': '새봄산업', '평균': Stats.mean(currentData.map(d=>d.saebom)), '표준편차': Stats.stdDev(currentData.map(d=>d.saebom)), '중앙값': Stats.median(currentData.map(d=>d.saebom)), 'CV(%)': Stats.cv(currentData.map(d=>d.saebom)) }
  ];
  const wsStats = XLSX.utils.json_to_sheet(statsSummary);
  XLSX.utils.book_append_sheet(wb, wsStats, '통계요약');

  XLSX.writeFile(wb, '가상기업_3개사_매출통계분석_결과.xlsx');
}

function handleExcelUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

      const parsed = [];
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        if (!row || row.length < 4) continue;
        parsed.push({
          index: i,
          date: String(row[0]),
          year: parseInt(String(row[0]).substring(0, 4)) || 2021,
          month: parseInt(String(row[0]).substring(5, 7)) || ((i - 1) % 12 + 1),
          hanbit: parseFloat(row[1]) || 0,
          mirae: parseFloat(row[2]) || 0,
          saebom: parseFloat(row[3]) || 0
        });
      }

      if (parsed.length > 0) {
        currentData = parsed;
        initDashboard();
        alert(`엑셀 파일이 성공적으로 로드되었습니다! 총 ${parsed.length}개 행이 분석됩니다.`);
      }
    } catch (err) {
      alert('엑셀 파일을 읽는 도중 오류가 발생했습니다: ' + err.message);
    }
  };
  reader.readAsArrayBuffer(file);
}

function filterCharts(company) {
  // Option to emphasize or filter
  if (company === 'all') {
    initDashboard();
  } else {
    // Synchronize select boxes
    const selSma = document.getElementById('smaCompanySelect');
    if (selSma) { selSma.value = company; renderTab4(); }
    const selReg = document.getElementById('regCompanySelect');
    if (selReg) { selReg.value = company; renderTab7(); }
    const selDecomp = document.getElementById('decompCompanySelect');
    if (selDecomp) { selDecomp.value = company; renderTab9(); }
  }
}

function destroyChart(id) {
  if (chartInstances[id]) {
    chartInstances[id].destroy();
    delete chartInstances[id];
  }
}
