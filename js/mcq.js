// MCQ Test Data Structure
const mcqData = {
    tests: [
        {
            id: 1,
            title: "Mechanics - Newton's Laws",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            questions: [
                {
                    id: 1,
                    question: "Which of the following statements is correct according to Newton's First Law of Motion?",
                    options: [
                        "A body at rest will always remain at rest",
                        "A body in motion will always remain in motion",
                        "A body will maintain its state of rest or uniform motion unless acted upon by an external force",
                        "Force is equal to mass times acceleration"
                    ],
                    correctAnswer: 2,
                    explanation: "Newton's First Law states that a body will maintain its state of rest or uniform motion in a straight line unless acted upon by an external force."
                },
                {
                    id: 2,
                    question: "According to Newton's Second Law of Motion, the acceleration of an object is:",
                    options: [
                        "Directly proportional to the mass and inversely proportional to the force",
                        "Directly proportional to the force and inversely proportional to the mass",
                        "Directly proportional to both force and mass",
                        "Inversely proportional to both force and mass"
                    ],
                    correctAnswer: 1,
                    explanation: "Newton's Second Law states that the acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass (F = ma)."
                },
                {
                    id: 3,
                    question: "Which of the following is an example of Newton's Third Law of Motion?",
                    options: [
                        "A rocket launching into space",
                        "A car accelerating on a highway",
                        "A book resting on a table",
                        "A ball rolling down a hill"
                    ],
                    correctAnswer: 0,
                    explanation: "A rocket launching is a classic example of Newton's Third Law - for every action (expelling gases backward), there is an equal and opposite reaction (the rocket moving forward)."
                },
                {
                    id: 4,
                    question: "What is the SI unit of force?",
                    options: [
                        "Joule",
                        "Newton",
                        "Pascal",
                        "Watt"
                    ],
                    correctAnswer: 1,
                    explanation: "The SI unit of force is the Newton (N), which is defined as the force required to accelerate a mass of one kilogram at a rate of one meter per second squared."
                },
                {
                    id: 5,
                    question: "Which of the following is NOT a type of force?",
                    options: [
                        "Gravitational force",
                        "Electromagnetic force",
                        "Inertial force",
                        "Nuclear force"
                    ],
                    correctAnswer: 2,
                    explanation: "Inertia is not a force but a property of matter that resists changes in motion. The fundamental forces are gravitational, electromagnetic, strong nuclear, and weak nuclear forces."
                },
                {
                    id: 6,
                    question: "What happens to the acceleration of an object if the net force acting on it is doubled while its mass remains constant?",
                    options: [
                        "It doubles",
                        "It halves",
                        "It remains the same",
                        "It quadruples"
                    ],
                    correctAnswer: 0,
                    explanation: "According to F = ma, if force (F) doubles and mass (m) remains constant, then acceleration (a) must also double to maintain the equation."
                },
                {
                    id: 7,
                    question: "Which of the following is a scalar quantity?",
                    options: [
                        "Force",
                        "Velocity",
                        "Acceleration",
                        "Mass"
                    ],
                    correctAnswer: 3,
                    explanation: "Mass is a scalar quantity as it has only magnitude and no direction. Force, velocity, and acceleration are vector quantities as they have both magnitude and direction."
                },
                {
                    id: 8,
                    question: "What is the weight of a 5 kg object on Earth? (Assume g = 9.8 m/s²)",
                    options: [
                        "5 N",
                        "49 N",
                        "0.51 N",
                        "9.8 N"
                    ],
                    correctAnswer: 1,
                    explanation: "Weight = mass × gravitational acceleration = 5 kg × 9.8 m/s² = 49 N"
                },
                {
                    id: 9,
                    question: "Which of the following statements about friction is correct?",
                    options: [
                        "Friction always opposes motion",
                        "Friction is independent of the nature of surfaces in contact",
                        "Static friction is always greater than kinetic friction",
                        "Friction is a non-contact force"
                    ],
                    correctAnswer: 2,
                    explanation: "Static friction is generally greater than kinetic friction. This is why it's harder to start moving an object than to keep it moving once it's in motion."
                },
                {
                    id: 10,
                    question: "What is the principle behind the working of a rocket?",
                    options: [
                        "Newton's First Law",
                        "Newton's Second Law",
                        "Newton's Third Law",
                        "Law of Conservation of Energy"
                    ],
                    correctAnswer: 2,
                    explanation: "Rockets work on the principle of Newton's Third Law - for every action (expelling gases backward), there is an equal and opposite reaction (the rocket moving forward)."
                }
            ]
        },
        {
            id: 2,
            title: "Thermodynamics - Basic Concepts",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            questions: [
                {
                    id: 1,
                    question: "Which of the following is a state function?",
                    options: [
                        "Work",
                        "Heat",
                        "Internal Energy",
                        "None of the above"
                    ],
                    correctAnswer: 2,
                    explanation: "Internal Energy is a state function as it depends only on the state of the system and not on the path taken to reach that state."
                },
                {
                    id: 2,
                    question: "What is the first law of thermodynamics?",
                    options: [
                        "Energy cannot be created or destroyed, only transformed",
                        "The entropy of an isolated system always increases",
                        "Heat always flows from a hotter body to a colder body",
                        "The pressure of a gas is inversely proportional to its volume"
                    ],
                    correctAnswer: 0,
                    explanation: "The first law of thermodynamics states that energy cannot be created or destroyed, only transformed from one form to another."
                },
                {
                    id: 3,
                    question: "Which of the following processes is isothermal?",
                    options: [
                        "A process at constant pressure",
                        "A process at constant volume",
                        "A process at constant temperature",
                        "A process with no heat exchange"
                    ],
                    correctAnswer: 2,
                    explanation: "An isothermal process is one that occurs at constant temperature."
                },
                {
                    id: 4,
                    question: "What is the SI unit of heat?",
                    options: [
                        "Kelvin",
                        "Joule",
                        "Calorie",
                        "Watt"
                    ],
                    correctAnswer: 1,
                    explanation: "The SI unit of heat is the Joule (J), though the calorie is also commonly used."
                },
                {
                    id: 5,
                    question: "Which of the following is NOT a property of an ideal gas?",
                    options: [
                        "Molecules have negligible volume",
                        "Molecules exert no forces on each other",
                        "Molecules have constant velocity",
                        "Collisions are perfectly elastic"
                    ],
                    correctAnswer: 2,
                    explanation: "In an ideal gas, molecules have varying velocities that follow the Maxwell-Boltzmann distribution, not constant velocity."
                },
                {
                    id: 6,
                    question: "What is the relationship between pressure and volume in Boyle's Law?",
                    options: [
                        "Directly proportional",
                        "Inversely proportional",
                        "Exponentially related",
                        "No relationship"
                    ],
                    correctAnswer: 1,
                    explanation: "Boyle's Law states that pressure and volume are inversely proportional at constant temperature (P₁V₁ = P₂V₂)."
                },
                {
                    id: 7,
                    question: "Which of the following is a measure of the disorder of a system?",
                    options: [
                        "Enthalpy",
                        "Entropy",
                        "Internal Energy",
                        "Heat Capacity"
                    ],
                    correctAnswer: 1,
                    explanation: "Entropy is a measure of the disorder or randomness of a system."
                },
                {
                    id: 8,
                    question: "What happens to the internal energy of a system during an adiabatic process?",
                    options: [
                        "It increases",
                        "It decreases",
                        "It remains constant",
                        "It depends on the specific process"
                    ],
                    correctAnswer: 3,
                    explanation: "In an adiabatic process, there is no heat exchange (Q = 0), but the internal energy can change due to work done on or by the system."
                },
                {
                    id: 9,
                    question: "Which of the following is the correct expression for the efficiency of a heat engine?",
                    options: [
                        "η = W/Q₁",
                        "η = Q₁/Q₂",
                        "η = (Q₁ - Q₂)/Q₁",
                        "η = Q₂/Q₁"
                    ],
                    correctAnswer: 2,
                    explanation: "The efficiency of a heat engine is given by η = (Q₁ - Q₂)/Q₁, where Q₁ is the heat absorbed from the hot reservoir and Q₂ is the heat rejected to the cold reservoir."
                },
                {
                    id: 10,
                    question: "What is the value of the universal gas constant (R)?",
                    options: [
                        "8.314 J/mol·K",
                        "0.0821 L·atm/mol·K",
                        "1.987 cal/mol·K",
                        "All of the above"
                    ],
                    correctAnswer: 3,
                    explanation: "The universal gas constant (R) can be expressed in different units: 8.314 J/mol·K, 0.0821 L·atm/mol·K, or 1.987 cal/mol·K. They are all equivalent."
                }
            ]
        },
        {
            id: 3,
            title: "Electromagnetism",
            image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            questions: [
                {
                    id: 1,
                    question: "What is the SI unit of electric charge?",
                    options: [
                        "Ampere",
                        "Volt",
                        "Coulomb",
                        "Ohm"
                    ],
                    correctAnswer: 2,
                    explanation: "The SI unit of electric charge is the Coulomb (C)."
                },
                {
                    id: 2,
                    question: "Which of the following statements about electric field lines is correct?",
                    options: [
                        "They always form closed loops",
                        "They never cross each other",
                        "They start from negative charges and end at positive charges",
                        "They are always straight lines"
                    ],
                    correctAnswer: 1,
                    explanation: "Electric field lines never cross each other. If they did, it would mean that at the point of intersection, the electric field would have two different directions, which is impossible."
                },
                {
                    id: 3,
                    question: "What is the relationship between electric potential and electric field?",
                    options: [
                        "Electric field is the gradient of electric potential",
                        "Electric potential is the gradient of electric field",
                        "They are directly proportional",
                        "They are inversely proportional"
                    ],
                    correctAnswer: 0,
                    explanation: "Electric field is the negative gradient of electric potential. In one dimension, E = -dV/dx."
                },
                {
                    id: 4,
                    question: "Which of the following materials is a good conductor of electricity?",
                    options: [
                        "Glass",
                        "Rubber",
                        "Copper",
                        "Wood"
                    ],
                    correctAnswer: 2,
                    explanation: "Copper is a good conductor of electricity due to its high electrical conductivity and low resistivity."
                },
                {
                    id: 5,
                    question: "What is the direction of the magnetic field around a straight current-carrying wire?",
                    options: [
                        "Along the wire",
                        "Radially outward from the wire",
                        "In concentric circles around the wire",
                        "Parallel to the wire"
                    ],
                    correctAnswer: 2,
                    explanation: "The magnetic field around a straight current-carrying wire forms concentric circles around the wire, with the direction given by the right-hand thumb rule."
                },
                {
                    id: 6,
                    question: "Which of the following is NOT a unit of magnetic field?",
                    options: [
                        "Tesla",
                        "Gauss",
                        "Weber",
                        "Ampere per meter"
                    ],
                    correctAnswer: 2,
                    explanation: "The Weber (Wb) is a unit of magnetic flux, not magnetic field. The SI unit of magnetic field is the Tesla (T), while Gauss and Ampere per meter are also used."
                },
                {
                    id: 7,
                    question: "What is the principle behind electromagnetic induction?",
                    options: [
                        "A changing magnetic field induces an electric field",
                        "A changing electric field induces a magnetic field",
                        "Like charges attract, unlike charges repel",
                        "Magnetic poles always exist in pairs"
                    ],
                    correctAnswer: 0,
                    explanation: "Electromagnetic induction is based on Faraday's law, which states that a changing magnetic field induces an electric field, leading to the generation of an electromotive force (emf)."
                },
                {
                    id: 8,
                    question: "Which of the following devices works on the principle of electromagnetic induction?",
                    options: [
                        "Electric motor",
                        "Transformer",
                        "Battery",
                        "Resistor"
                    ],
                    correctAnswer: 1,
                    explanation: "A transformer works on the principle of electromagnetic induction, where a changing magnetic field in the primary coil induces a voltage in the secondary coil."
                },
                {
                    id: 9,
                    question: "What is the relationship between the frequency and wavelength of an electromagnetic wave?",
                    options: [
                        "Directly proportional",
                        "Inversely proportional",
                        "Exponentially related",
                        "No relationship"
                    ],
                    correctAnswer: 1,
                    explanation: "The frequency and wavelength of an electromagnetic wave are inversely proportional, related by the equation c = fλ, where c is the speed of light."
                },
                {
                    id: 10,
                    question: "Which of the following is NOT part of the electromagnetic spectrum?",
                    options: [
                        "X-rays",
                        "Sound waves",
                        "Gamma rays",
                        "Radio waves"
                    ],
                    correctAnswer: 1,
                    explanation: "Sound waves are mechanical waves that require a medium to propagate, while electromagnetic waves can travel through a vacuum. Therefore, sound waves are not part of the electromagnetic spectrum."
                }
            ]
        }
    ]
};

// MCQ Test Management
class MCQTest {
    constructor(testId) {
        this.testId = testId;
        this.test = mcqData.tests.find(t => t.id === testId);
        this.currentQuestionIndex = 0;
        this.answers = new Array(this.test.questions.length).fill(null);
        this.startTime = null;
    }

    start() {
        this.startTime = new Date();
        this.renderQuestion();
    }

    renderQuestion() {
        const mcqTestsContent = document.getElementById('mcqTestsContent');
        if (!mcqTestsContent) return;

        const question = this.test.questions[this.currentQuestionIndex];
        
        mcqTestsContent.innerHTML = `
            <div class="col-md-8 mx-auto">
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        <h5 class="card-title mb-0">${this.test.title}</h5>
                    </div>
                    <div class="card-body">
                        <div class="progress mb-4">
                            <div class="progress-bar" role="progressbar" 
                                 style="width: ${((this.currentQuestionIndex + 1) / this.test.questions.length) * 100}%">
                                Question ${this.currentQuestionIndex + 1} of ${this.test.questions.length}
                            </div>
                        </div>
                        
                        <h6 class="mb-3">${question.question}</h6>
                        
                        <div class="options">
                            ${question.options.map((option, index) => `
                                <div class="mcq-option ${this.answers[this.currentQuestionIndex] === index ? 'selected' : ''}"
                                     onclick="mcqTest.selectAnswer(${index})">
                                    ${String.fromCharCode(65 + index)}. ${option}
                                </div>
                            `).join('')}
                        </div>
                        
                        <div class="d-flex justify-content-between mt-4">
                            <button class="btn btn-secondary" 
                                    onclick="mcqTest.previousQuestion()"
                                    ${this.currentQuestionIndex === 0 ? 'disabled' : ''}>
                                Previous
                            </button>
                            <button class="btn btn-primary" 
                                    onclick="mcqTest.nextQuestion()"
                                    ${this.answers[this.currentQuestionIndex] === null ? 'disabled' : ''}>
                                ${this.currentQuestionIndex === this.test.questions.length - 1 ? 'Finish' : 'Next'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    selectAnswer(answerIndex) {
        this.answers[this.currentQuestionIndex] = answerIndex;
        this.renderQuestion();
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.renderQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.test.questions.length - 1) {
            this.currentQuestionIndex++;
            this.renderQuestion();
        } else {
            this.finishTest();
        }
    }

    finishTest() {
        const endTime = new Date();
        const duration = (endTime - this.startTime) / 1000; // in seconds
        
        const score = this.calculateScore();
        const results = {
            testId: this.testId,
            score: score,
            duration: duration,
            date: new Date().toISOString()
        };

        // Save results to localStorage
        const testResults = window.utils.storage.get('testResults') || [];
        testResults.push(results);
        window.utils.storage.set('testResults', testResults);

        this.showResults(score, duration);
    }

    calculateScore() {
        let correctAnswers = 0;
        this.answers.forEach((answer, index) => {
            if (answer === this.test.questions[index].correctAnswer) {
                correctAnswers++;
            }
        });
        return (correctAnswers / this.test.questions.length) * 100;
    }

    showResults(score, duration) {
        const mcqTestsContent = document.getElementById('mcqTestsContent');
        if (!mcqTestsContent) return;

        mcqTestsContent.innerHTML = `
            <div class="col-md-8 mx-auto">
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        <h5 class="card-title mb-0">Test Results</h5>
                    </div>
                    <div class="card-body text-center">
                        <h3 class="mb-4">Score: ${score.toFixed(1)}%</h3>
                        <p>Time taken: ${Math.floor(duration / 60)} minutes ${Math.floor(duration % 60)} seconds</p>
                        
                        <div class="mt-4">
                            <h5>Question Review</h5>
                            ${this.test.questions.map((question, index) => `
                                <div class="question-review mb-3 p-3 border rounded">
                                    <p class="mb-2"><strong>Q${index + 1}:</strong> ${question.question}</p>
                                    <p class="mb-1 ${this.answers[index] === question.correctAnswer ? 'text-success' : 'text-danger'}">
                                        Your answer: ${String.fromCharCode(65 + this.answers[index])}. ${question.options[this.answers[index]]}
                                    </p>
                                    ${this.answers[index] !== question.correctAnswer ? `
                                        <p class="mb-0 text-success">
                                            Correct answer: ${String.fromCharCode(65 + question.correctAnswer)}. ${question.options[question.correctAnswer]}
                                        </p>
                                    ` : ''}
                                    <p class="mt-2 mb-0"><small>${question.explanation}</small></p>
                                </div>
                            `).join('')}
                        </div>
                        
                        <button class="btn btn-primary mt-4" onclick="location.reload()">
                            Take Another Test
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

// Initialize MCQ Tests
document.addEventListener('DOMContentLoaded', () => {
    // Render available tests
    const mcqTestsContent = document.getElementById('mcqTestsContent');
    if (!mcqTestsContent) return;

    mcqTestsContent.innerHTML = `
        <div class="col-md-10 mx-auto">
            <div class="row">
                ${mcqData.tests.map(test => `
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 test-card">
                            <img src="${test.image}" class="card-img-top test-image" alt="${test.title}">
                            <div class="card-body">
                                <h5 class="card-title">${test.title}</h5>
                                <p class="card-text">
                                    ${test.questions.length} questions
                                </p>
                                <button class="btn btn-primary w-100" onclick="startTest(${test.id})">
                                    Start Test
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
});

// Global function to start a test
function startTest(testId) {
    window.mcqTest = new MCQTest(testId);
    window.mcqTest.start();
}
