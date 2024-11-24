let typedText = "Dear [Her Name],\n\nI hope you're doing well. There's something I've been meaning to tell you for a while now, but never quite found the right words or the right time.\n\nSo, I decided to write it all down and share it with you this way. You are an amazing person, and I truly enjoy every moment we spend together. Your smile, your kindness, and the way you make me feel are something I've grown to cherish deeply.\n\nI guess what I'm trying to say is... I really, really like you. And I hope you feel the same way about me.\n\nWith all my heart,\n[Your Name]";
let index = 0;
let speed = 50;

function startConfession() {
    document.getElementById('letter').style.display = 'block';
    typeWriter();
}

function typeWriter() {
    if (index < typedText.length) {
        document.querySelector('.typed-text').innerHTML += typedText.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    } else {
        document.getElementById('nextButton').style.display = 'inline';
    }
}

function showFinalMessage() {
    document.getElementById('finalMessage').style.display = 'block';
}
