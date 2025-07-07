// bootstrap_custom_script.js

document.addEventListener('DOMContentLoaded', () => {
    // Current Year for Footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Chart.js for Growth Performance Chart
    const ctx = document.getElementById('growthPerformanceChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar', // Using a bar chart for a different visual
            data: {
                labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
                datasets: [{
                    label: 'Pendapatan (Miliar IDR)',
                    data: [250, 280, 320, 380, 450, 520],
                    backgroundColor: 'rgba(0, 123, 255, 0.8)', // Primary blue
                    borderColor: 'rgba(0, 123, 255, 1)',
                    borderWidth: 1
                }, {
                    label: 'Volume Produksi (K Ton)',
                    data: [150, 165, 180, 200, 220, 240],
                    backgroundColor: 'rgba(40, 167, 69, 0.8)', // Green for production
                    borderColor: 'rgba(40, 167, 69, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Nilai'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Tahun'
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                family: 'Inter'
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += context.parsed.y + (context.dataset.label.includes('Pendapatan') ? ' Miliar IDR' : ' K Ton');
                                }
                                return label;
                            }
                        }
                    }
                }
            }
        });
    }

    // Contact Form Submission (Conceptual)
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            formStatus.textContent = 'Mengirim pesan Anda...';
            formStatus.className = 'mt-3 text-center text-info'; // Bootstrap text-info for pending

            // Simulate form submission
            setTimeout(() => {
                formStatus.textContent = 'Terima kasih! Pesan Anda telah terkirim.';
                formStatus.className = 'mt-3 text-center text-success'; // Bootstrap text-success for success
                contactForm.reset();
            }, 2000);
        });
    }

    // Intersection Observer for Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-slide-right, .animate-slide-left').forEach(element => {
        observer.observe(element);
    });

    // Optional: Close navbar on outside click for mobile
    document.addEventListener('click', function(e) {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.getElementById('navbarNav');
        if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target) && navbarCollapse.classList.contains('show')) {
            navbarToggler.click(); // Simulate click to close
        }
    });
});