// Syllabus Data Structure
const syllabusData = {
    chapters: [
        {
            id: 1,
            title: "Mechanics",
            topics: [
                {
                    id: "1.1",
                    title: "Newton's Laws of Motion",
                    content: "Detailed explanation of Newton's three laws of motion with examples and applications.",
                    formulas: [
                        "F = ma",
                        "F₁ = -F₂ (Newton's Third Law)",
                        "v = u + at",
                        "s = ut + ½at²",
                        "v² = u² + 2as"
                    ],
                    examples: [
                        {
                            question: "A body of mass 2kg is acted upon by a force of 10N. Find its acceleration.",
                            solution: "Using F = ma, a = F/m = 10/2 = 5 m/s²"
                        }
                    ]
                },
                // Add more topics under Mechanics
            ]
        },
        {
            id: 2,
            title: "Thermodynamics",
            topics: [
                {
                    id: "2.1",
                    title: "Laws of Thermodynamics",
                    content: "Explanation of the four laws of thermodynamics and their applications.",
                    formulas: [
                        "ΔU = Q - W",
                        "η = W/Q × 100%",
                        "PV = nRT"
                    ],
                    examples: [
                        {
                            question: "Calculate the work done when 2 moles of an ideal gas expand isothermally at 300K from 1L to 2L.",
                            solution: "W = nRT ln(V₂/V₁) = 2 × 8.314 × 300 × ln(2) = 3457.8 J"
                        }
                    ]
                }
                // Add more topics under Thermodynamics
            ]
        }
        // Add more chapters
    ]
};

// Render Syllabus Content
function renderSyllabus() {
    const syllabusContent = document.getElementById('syllabusContent');
    if (!syllabusContent) return;

    syllabusContent.innerHTML = syllabusData.chapters.map(chapter => `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
                <div class="card-header bg-primary text-white">
                    <h5 class="card-title mb-0">Chapter ${chapter.id}: ${chapter.title}</h5>
                </div>
                <div class="card-body">
                    <div class="accordion" id="chapter${chapter.id}Accordion">
                        ${chapter.topics.map(topic => `
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" 
                                            data-bs-toggle="collapse" 
                                            data-bs-target="#topic${topic.id.replace('.', '')}">
                                        ${topic.title}
                                    </button>
                                </h2>
                                <div id="topic${topic.id.replace('.', '')}" 
                                     class="accordion-collapse collapse" 
                                     data-bs-parent="#chapter${chapter.id}Accordion">
                                    <div class="accordion-body">
                                        <p>${topic.content}</p>
                                        ${topic.formulas ? `
                                            <div class="formulas-section mt-3">
                                                <h6>Key Formulas:</h6>
                                                <ul class="list-unstyled">
                                                    ${topic.formulas.map(formula => `
                                                        <li class="mb-2">
                                                            <code class="bg-light p-2 rounded">${formula}</code>
                                                        </li>
                                                    `).join('')}
                                                </ul>
                                            </div>
                                        ` : ''}
                                        ${topic.examples ? `
                                            <div class="examples-section mt-3">
                                                <h6>Examples:</h6>
                                                ${topic.examples.map(example => `
                                                    <div class="example-item mb-3">
                                                        <p class="mb-1"><strong>Q:</strong> ${example.question}</p>
                                                        <p class="mb-0"><strong>A:</strong> ${example.solution}</p>
                                                    </div>
                                                `).join('')}
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize Syllabus
document.addEventListener('DOMContentLoaded', () => {
    renderSyllabus();
    
    // Add event listeners for formula highlighting
    document.querySelectorAll('code').forEach(code => {
        code.addEventListener('click', () => {
            const text = code.textContent;
            navigator.clipboard.writeText(text).then(() => {
                window.utils.showNotification('Formula copied to clipboard!', 'success');
            }).catch(err => {
                window.utils.showNotification('Failed to copy formula', 'danger');
            });
        });
    });
}); 