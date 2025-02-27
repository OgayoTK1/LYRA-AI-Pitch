const slides = [
    `<h1>LYRA AI – Breaking Barriers, Saving Lives</h1>
     <h2>AI-Powered Sign Language Translation for Healthcare</h2>
     <p>Team Name: [Your Team Name]</p>
     <p>Hackathon: CodeXtreme 2025</p>`,

    `<h2>The Problem – Deaf Refugees Struggle to Access Healthcare</h2>
     <p>70+ million deaf people worldwide lack access to healthcare communication.</p>
     <p>Refugees face extreme challenges in describing symptoms.</p>
     <p>Misdiagnoses and incorrect treatments put lives at risk.</p>`,

    `<h2>The Solution – LYRA AI</h2>
     <p>AI-driven sign language recognition translates signs into medical text & speech.</p>
     <p>Works offline for refugee camps and remote areas.</p>
     <p>Enhances doctor-patient interactions.</p>`,

    `<h2>How LYRA AI Works</h2>
     <p>1️⃣ Deaf patient signs symptoms.</p>
     <p>2️⃣ AI recognizes gestures using computer vision.</p>
     <p>3️⃣ LYRA AI translates signs into medically accurate text & speech.</p>
     <p>4️⃣ Doctor understands and provides proper diagnosis.</p>`,

    `<h2>Why LYRA AI Stands Out</h2>
     <p>🏆 First-of-Its-Kind: No AI-powered medical sign language translator exists.</p>
     <p>🚀 High Impact: Prevents misdiagnoses & ensures treatment accuracy.</p>
     <p>🌍 Scalable: Usable in hospitals, refugee camps, and telemedicine.</p>`,

    `<h2>The Prototype – What We’ll Demo</h2>
     <p>🎥 Live demo of sign-to-speech conversion.</p>
     <p>✅ Real-time doctor-patient communication.</p>
     <p>✅ Offline functionality in low-connectivity areas.</p>`,

    `<h2>Future Roadmap – Beyond the Hackathon</h2>
     <p>🌍 Expand to more sign languages & medical terms.</p>
     <p>🤝 Partner with healthcare & humanitarian organizations.</p>
     <p>📱 Develop a mobile app & wearable integration.</p>`,

    `<h2>Call to Action – Why We Deserve to Win</h2>
     <p>🔹 LYRA AI solves a real-world crisis – healthcare access for deaf refugees.</p>
     <p>🔹 We built a functional prototype – imagine its potential!</p>
     <p>🔹 This is the future of AI-powered healthcare.</p>
     <h2>🚀 Thank you! 🚀</h2>`
];

let currentSlide = 0;

function updateSlide() {
    document.getElementById("slide-content").innerHTML = slides[currentSlide];
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlide();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
}

