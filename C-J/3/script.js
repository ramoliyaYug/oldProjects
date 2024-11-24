let typedText = `HEY JIYA,

You know, ever since we got into the advance batch in 11th and the first moment I saw you I found you interesting and intriguing. (fast forwarding 1 year) We ended up in the same class again in 12th, it's like the universe keeps throwing us together....

I want to say (as I've noticed you in school), your confidence and maturity are really impressive. IDK why but I find you an emotionally mature person which grabs my attention towards you. I wonder if you have a secret manual on how to be awesome that the rest of us didn't get.

But in all seriousness, I wanted to be honest and open with you about something that has been on my mind. You are my first ever crush of my life. In the middle of 12th, I've been crushing on you but I didn't get the opportunity to tell you. Still, I've been debating with myself whether to tell you or not.

I value our future friendship deeply. I hope by sharing this, it doesn't create any awkwardness and weirdness between us. No matter what, I respect your feelings. I just can't hold it to only myself anymore. I feel like you should know this too...

Regardless of how you feel, I wanted to be upfront because I think you deserve honesty. Hope you can understand how difficult it is to share this with you as an introvert... I really like you.... Now I can't find any words to say to you....bbyeee...take care... (I am waiting for your reply)`;

let index = 0;
let speed = 80;

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
