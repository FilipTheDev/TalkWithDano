const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const speechDiv = document.getElementById('voiceDiv');
const reply = document.getElementsByTagName('h4')
const popUpLayer = document.querySelector('.pop-upLayer');

const jokes = [
    'My boss told me to have a good day, i went home.',
    'What you call a dog with no legs? It doesn\'t matter what you call him, he isn\'t coming.',
    'You.',
    'The best way of saving money is forget who you borrowed it from.'
];

const greetings = [
    'Leave me alone, i don\'t like you.',
    'I\'m Awesome, thanks.',
    'I\'m good.',
    'I\m fine',
    'I\'m trapped here with you what do you think?'
];

const weather = [
    'Look it up, don\'t be lazy',
    'The weather is fine',
    'Why do you care?',
    'Go outside and see, don\'t be lazy'
];

const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();


recognition.onstart = function() {
    console.log('Microphone is activated!')
};


function greeting() {
    popUpLayer.style.display = "none";
    greeting.text = 'Hello, I\'m Dano. If you wanna talk click on the microphone icon. I hope you have fun here!';
}

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
}

btn.addEventListener('click', () => {
        recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'I don\'t understand you';

    if(message.includes('how are you')){
        const greetingsText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = greetingsText;
    }

    if(message.includes('weather')) {
        const weatherText = weather[Math.floor(Math.random() * weather.length)];
        speech.text = weatherText;
    }
    if(message.includes('joke')) {
        const jokesText= jokes[Math.floor(Math.random() * jokes.length)];
        speech.text = jokesText;
    }
    if(message.includes('background colour')) {
        if(message.includes('Black')) {
            speech.text = 'Your background colour is now black';
            speechDiv.style.color = "white";
            speechDiv.style.backgroundColor = 'black';
        }
        if(message.includes('Red')) {
            speech.text = 'Your background colour is now red';
            speechDiv.style.backgroundColor = 'red';
        }
        if(message.includes('Blue')) {
            speech.text = 'Your background colour is now blue';
            speechDiv.style.backgroundColor = 'blue';
        }
        if(message.includes('Grey')) {
            speech.text = 'Your background colour is now gray';
            speechDiv.style.backgroundColor = 'gray';
        }
        if(message.includes('purple')) {
            speech.text = 'Your background colour is now purple';
            speechDiv.style.backgroundColor = 'purple';
        }
        if(message.includes('yellow')) {
            speech.text = 'Your background colour is now yellow';
            speechDiv.style.backgroundColor = 'yellow';
        }
        if(message.includes('Orange')) {
            speech.text = 'Your background colour is now orange';
            speechDiv.style.backgroundColor = 'orange';
        }
    }

    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

// try {
    
// } catch (e) {
    
// }