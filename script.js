// script.js
function showInfo(name) {
    const infoBox = document.getElementById('info-box');

    const neurotransmitters = {
        'dopamine': `
            <h2>Dopamine</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Dopamine_3D_ball.png" alt="Dopamine" style="width:150px;height:auto;">
            <p>Dopamine is a neurotransmitter that plays several important roles in both the brain and body. It is crucial for regulating movement, emotional responses, and the reward system. High levels of dopamine are associated with feelings of pleasure and satisfaction, while imbalances can contribute to various disorders such as Parkinson's disease and schizophrenia.</p>
            <h3>How It Works:</h3>
            <p>Dopamine is released in response to rewards and helps reinforce behaviors by making them more enjoyable. It affects areas of the brain involved in motivation, pleasure, and reinforcement.</p>
        `,
        'serotonin': `
            <h2>Serotonin</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/06/Serotonin_3D_ball.png" alt="Serotonin" style="width:150px;height:auto;">
            <p>Serotonin is a neurotransmitter that helps regulate mood, appetite, and sleep. It is often linked to feelings of well-being and happiness. Imbalances in serotonin levels are associated with mood disorders such as depression and anxiety.</p>
            <h3>How It Works:</h3>
            <p>Serotonin helps modulate mood and anxiety by affecting various brain regions. It also plays a role in regulating sleep cycles and appetite by influencing signals in the gastrointestinal tract.</p>
        `,
        'norepinephrine': `
            <h2>Norepinephrine</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Norepinephrine_3D_ball.png" alt="Norepinephrine" style="width:150px;height:auto;">
            <p>Norepinephrine acts as both a neurotransmitter and a hormone. It is involved in the body’s response to stress and helps regulate arousal, alertness, and mood. Dysregulation of norepinephrine is linked to conditions such as depression and bipolar disorder.</p>
            <h3>How It Works:</h3>
            <p>Norepinephrine increases alertness and readiness for action. It enhances the body's 'fight or flight' response by increasing heart rate, blood pressure, and blood sugar levels.</p>
        `,
        'acetylcholine': `
            <h2>Acetylcholine</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Acetylcholine_3D_ball.png" alt="Acetylcholine" style="width:150px;height:auto;">
            <p>Acetylcholine is a neurotransmitter that plays a key role in muscle contraction, memory formation, and learning. It is essential for communication between nerve cells and muscles and is involved in cognitive functions.</p>
            <h3>How It Works:</h3>
            <p>Acetylcholine facilitates muscle movement by transmitting signals from nerve cells to muscles. In the brain, it helps with attention and memory by modulating neural connections.</p>
        `,
        'glutamate': `
            <h2>Glutamate</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Glutamate_3D_ball.png" alt="Glutamate" style="width:150px;height:auto;">
            <p>Glutamate is the primary excitatory neurotransmitter in the brain. It is involved in cognitive functions such as learning and memory. Excessive glutamate activity can lead to neurotoxicity and is implicated in conditions like Alzheimer’s disease and multiple sclerosis.</p>
            <h3>How It Works:</h3>
            <p>Glutamate activates receptors in the brain that are crucial for synaptic plasticity, which is the ability of synapses to strengthen or weaken over time. This process underlies learning and memory formation.</p>
        `,
        'GABA': `
            <h2>GABA</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/GABA_3D_ball.png" alt="GABA" style="width:150px;height:auto;">
            <p>GABA (gamma-aminobutyric acid) is the main inhibitory neurotransmitter in the brain. It helps to reduce neuronal excitability and regulates muscle tone. Imbalances in GABA levels can contribute to conditions such as anxiety disorders and epilepsy.</p>
            <h3>How It Works:</h3>
            <p>GABA works by binding to its receptors on neurons, which leads to a decrease in neuronal excitability. This inhibitory action helps maintain balance in the brain and prevent excessive neural activity.</p>
        `
    };

    infoBox.innerHTML = neurotransmitters[name] || '<p>Information not available.</p>';
}

// Search functionality
document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const items = document.querySelectorAll('#neurotransmitter-list li');

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});