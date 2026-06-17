/**
 * Chart configuration and data for dashboard visualizations
 */

// Line chart data for dashboard main page
export const lineChartDataMain = [
  {
    name: 'Credits Used',
    data: [10, 39, 80, 50, 30, 60, 40, 80, 50, 100, 60, 80],
  },
];

export const lineChartOptionsMain = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  markers: {
    size: 0,
    colors: '#868CFF',
    strokeColors: 'white',
    strokeWidth: 2,
    strokeOpacity: 0.9,
    fillOpacity: 1,
    shape: 'circle',
    radius: 2,
  },
  tooltip: {
    theme: 'dark',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    type: 'gradient',
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    labels: {
      style: {
        colors: '#a3aed0',
        fontSize: '12px',
        fontWeight: '500',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: '#a3aed0',
        fontSize: '12px',
        fontWeight: '500',
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
  },
  fill: {
    type: 'gradient',
    gradient: {
      type: 'vertical',
      shadeIntensity: 0.1,
      opacityFrom: 0.3,
      opacityTo: 0.9,
    },
  },
};

// Sidebar chart data
export const lineChartDataSidebar = [
  {
    name: 'Balance',
    data: [10, 39, 80, 50, 10],
  },
  {
    name: 'Profit',
    data: [20, 60, 30, 40, 20],
  },
];

export const lineChartOptionsSidebar = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  markers: {
    size: 0,
    colors: '#868CFF',
    strokeColors: 'white',
    strokeWidth: 2,
    strokeOpacity: 0.9,
    fillOpacity: 1,
    shape: 'circle',
    radius: 2,
  },
  tooltip: {
    theme: 'dark',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
    labels: {
      style: {
        colors: 'white',
        fontSize: '8px',
        fontWeight: '500',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
  },
  fill: {
    type: 'gradient',
    gradient: {
      type: 'vertical',
      shadeIntensity: 0.1,
      opacityFrom: 0.3,
      opacityTo: 0.9,
    },
  },
};
