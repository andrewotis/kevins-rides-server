export const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Sales ($)',
      data: [1200, 1900, 1700, 2200, 2600, 2400, 2800],
      fill: false,
      borderColor: 'rgba(75,192,192,1)',
      tension: 0.3,
    },
  ],
};

export const barChartData = {
  labels: ['Laptops', 'Phones', 'Tablets', 'Monitors', 'Keyboards'],
  datasets: [
    {
      label: 'Units in Stock',
      data: [45, 80, 30, 60, 90],
      backgroundColor: [
        'rgba(255,99,132,0.6)',
        'rgba(54,162,235,0.6)',
        'rgba(255,206,86,0.6)',
        'rgba(75,192,192,0.6)',
        'rgba(153,102,255,0.6)',
      ],
      borderWidth: 1,
    },
  ],
};