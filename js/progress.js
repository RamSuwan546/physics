// Progress Tracking Management
class ProgressTracker {
    constructor() {
        this.testResults = window.utils.storage.get('testResults') || [];
        this.chart = null;
    }

    initialize() {
        this.renderProgressChart();
        this.renderProgressStats();
    }

    renderProgressChart() {
        const ctx = document.getElementById('progressChart');
        if (!ctx) return;

        // Process test results for chart
        const chartData = this.processChartData();
        
        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: 'Test Scores (%)',
                    data: chartData.scores,
                    borderColor: '#0d6efd',
                    tension: 0.1,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Score (%)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Test Date'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Performance Progress'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Score: ${context.parsed.y}%`;
                            }
                        }
                    }
                }
            }
        });
    }

    processChartData() {
        // Sort results by date
        const sortedResults = [...this.testResults].sort((a, b) => 
            new Date(a.date) - new Date(b.date)
        );

        return {
            labels: sortedResults.map(result => 
                new Date(result.date).toLocaleDateString()
            ),
            scores: sortedResults.map(result => result.score)
        };
    }

    renderProgressStats() {
        const progressStats = document.getElementById('progressStats');
        if (!progressStats) return;

        const stats = this.calculateStats();
        
        progressStats.innerHTML = `
            <div class="card">
                <div class="card-header bg-primary text-white">
                    <h5 class="card-title mb-0">Performance Statistics</h5>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-6 mb-3">
                            <div class="stat-item">
                                <h6>Average Score</h6>
                                <p class="h4">${stats.averageScore.toFixed(1)}%</p>
                            </div>
                        </div>
                        <div class="col-6 mb-3">
                            <div class="stat-item">
                                <h6>Highest Score</h6>
                                <p class="h4">${stats.highestScore.toFixed(1)}%</p>
                            </div>
                        </div>
                        <div class="col-6 mb-3">
                            <div class="stat-item">
                                <h6>Tests Taken</h6>
                                <p class="h4">${stats.totalTests}</p>
                            </div>
                        </div>
                        <div class="col-6 mb-3">
                            <div class="stat-item">
                                <h6>Total Time</h6>
                                <p class="h4">${stats.totalTime}</p>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4">
                        <h6>Areas for Improvement</h6>
                        <ul class="list-unstyled">
                            ${stats.improvementAreas.map(area => `
                                <li class="mb-2">
                                    <i class="fas fa-arrow-up text-success me-2"></i>
                                    ${area}
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <div class="mt-4">
                        <h6>Recent Activity</h6>
                        <div class="list-group">
                            ${stats.recentActivity.map(activity => `
                                <div class="list-group-item">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h6 class="mb-1">${activity.title}</h6>
                                        <small>${activity.date}</small>
                                    </div>
                                    <p class="mb-1">Score: ${activity.score}%</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    calculateStats() {
        if (this.testResults.length === 0) {
            return {
                averageScore: 0,
                highestScore: 0,
                totalTests: 0,
                totalTime: '0 minutes',
                improvementAreas: ['Take more tests to get personalized improvement suggestions'],
                recentActivity: []
            };
        }

        const scores = this.testResults.map(result => result.score);
        const totalDuration = this.testResults.reduce((sum, result) => sum + result.duration, 0);
        
        // Calculate improvement areas based on lowest scoring topics
        const improvementAreas = this.identifyImprovementAreas();

        // Get recent activity
        const recentActivity = this.testResults
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 5)
            .map(result => ({
                title: mcqData.tests.find(t => t.id === result.testId)?.title || 'Unknown Test',
                score: result.score,
                date: new Date(result.date).toLocaleDateString()
            }));

        return {
            averageScore: scores.reduce((a, b) => a + b, 0) / scores.length,
            highestScore: Math.max(...scores),
            totalTests: this.testResults.length,
            totalTime: `${Math.floor(totalDuration / 60)} minutes`,
            improvementAreas,
            recentActivity
        };
    }

    identifyImprovementAreas() {
        // This is a simplified version. In a real application, you would
        // analyze performance by topic and identify specific areas for improvement
        const areas = [];
        
        if (this.testResults.length > 0) {
            const recentScores = this.testResults
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, 3)
                .map(result => result.score);
            
            const averageRecentScore = recentScores.reduce((a, b) => a + b, 0) / recentScores.length;
            
            if (averageRecentScore < 70) {
                areas.push('Focus on fundamental concepts and formulas');
            }
            if (this.testResults.length < 5) {
                areas.push('Take more tests to improve your understanding');
            }
        }

        return areas.length > 0 ? areas : ['Keep up the good work!'];
    }
}

// Initialize Progress Tracker
document.addEventListener('DOMContentLoaded', () => {
    const progressTracker = new ProgressTracker();
    progressTracker.initialize();
}); 