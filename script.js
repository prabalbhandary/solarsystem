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
