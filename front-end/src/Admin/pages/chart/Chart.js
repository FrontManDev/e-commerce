import { Chart as ChartJs, LineElement, ArcElement, CategoryScale, LinearScale, PointElement, Tooltip, BarElement, Legend } from 'chart.js';
ChartJs.register(LineElement, CategoryScale, ArcElement, BarElement, LinearScale, PointElement, Tooltip, Legend);

export const Visitures = {
    labels: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
        {
            label: "Number of Visitore Per Week",
            data: [0, 10, 20, 50, 60, 40, 60],
            fill: false,
            borderColor: 'rgb(0, 0, 0)',
            tension: 0.5,
            pointBackgroundColor: 'white',
            pointBorderColor: 'rgb(75, 192, 192)',
        }
    ]
}

export const visituresOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top'
    },
    tooltip: {
      enabled: true
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Days of the Week'
      }
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Number of Visitors'
      }
    }
  }
};

export const MonthSales = {
    labels: [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ],
    datasets: [
        {
            label: 'Number of Sales',
            data: [120, 150, 180, 200, 170, 250, 300, 280, 260, 310, 290, 330],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderRadius: 5,
        },
    ],
};

export const monthSalesOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top'
    },
    tooltip: {
      enabled: true
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Months'
      }
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Sales Count'
      }
    }
  }
};

export const CategorySales = {
    labels: ['Electronics', 'Clothing', 'Home Appliances', 'Books', 'Toys'],
    datasets: [
        {
            label: 'Sales Count',
            data: [500, 420, 350, 300, 250],
            backgroundColor: [
                '#4dc9f6',
                '#f67019',
                '#f53794',
                '#537bc4',
                '#acc236'
            ],
            borderRadius: 6,
        },
    ],
};

export const categorySalesOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top'
    },
    tooltip: {
      enabled: true
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Categories'
      }
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Sales Count'
      }
    }
  }
};

export const Orders = {
    labels: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
        {
            label: 'Orders Per Week',
            data: [10, 50, 60, 32, 0, 5, 90],
            backgroundColor: [
                '#4fc9f6',
                '#f87019',
                '#f63794',
                '#53bbc4',
                '#aff236'
            ],
            borderRadius: 6,
        }
    ]
}

export const ordersOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top'
    },
    tooltip: {
      enabled: true
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Days of the Week'
      }
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Orders Count'
      }
    }
  }
};
