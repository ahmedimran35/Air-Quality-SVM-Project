// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Results chart
const ctx = document.getElementById('resultsChart').getContext('2d');
const resultsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Good Air', 'Bad Air'],
        datasets: [{
            label: 'Predicted Counts',
            data: [120, 200], // Replace with your test_preds counts!
            backgroundColor: ['#2c3e50', '#e74c3c'],
            borderColor: ['#34495e', '#c0392b'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: true, title: { display: true, text: 'Count', font: { size: 14 } } },
            x: { title: { display: true, text: 'Air Quality', font: { size: 14 } } }
        },
        plugins: {
            legend: { labels: { font: { size: 14 } } }
        },
        animation: {
            duration: 1500,
            easing: 'easeInOutQuart'
        }
    }
});