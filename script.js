const createStar = () => {
    const container = document.querySelector("body");
    for (let i = 0; i < 10000; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.width = ".1px";
        star.style.height = ".1px";
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        container.appendChild(star);
    }
};

createStar();

const createAsteroids = () => {
    const asteroidBelt = document.querySelector('.asteroid-belt');
    for (let i = 0; i < 50; i++) { // Create 50 asteroids
        const asteroid = document.createElement('div');
        asteroid.className = 'asteroid';
        asteroid.style.width = '2em'; // Size of the asteroid
        asteroid.style.height = '2em'; // Size of the asteroid
        asteroid.style.borderRadius = '50%';
        asteroid.style.backgroundColor = 'gray';
        asteroid.style.position = 'absolute';
        
        // Random position within the belt
        const angle = Math.random() * 2 * Math.PI;
        const radius = 18; // Adjust to fit within the asteroid belt
        asteroid.style.top = `${18 + radius * Math.sin(angle)}em`;
        asteroid.style.left = `${18 + radius * Math.cos(angle)}em`;

        asteroidBelt.appendChild(asteroid);
    }
};

// Call the function after the DOM content is loaded
document.addEventListener('DOMContentLoaded', createAsteroids);


const backgroundAudio = document.getElementById('background-audio');
backgroundAudio.loop = true;

document.addEventListener('DOMContentLoaded', () => {
    backgroundAudio.play().catch(error => {
        const promptToPlay = document.createElement('div');
        promptToPlay.innerText = "Click anywhere to start the music!";
        promptToPlay.style.position = "absolute";
        promptToPlay.style.top = "50%";
        promptToPlay.style.left = "50%";
        promptToPlay.style.transform = "translate(-50%, -50%)";
        promptToPlay.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        promptToPlay.style.padding = "20px";
        promptToPlay.style.borderRadius = "10px";
        promptToPlay.style.textAlign = "center";
        document.body.appendChild(promptToPlay);

        document.body.addEventListener('click', () => {
            backgroundAudio.play().catch(error => {});
            document.body.removeChild(promptToPlay);
        });
    });
});
