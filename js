const userText = document.getElementById('inputText');
const speechBtn = document.getElementById('speech');
let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
    voices = speechSynthesis.getVoices();
};
speechBtn.addEventListener('click', function () {
    const speechText = userText.value;
    let speechData = new SpeechSynthesisUtterance(speechText);
    let femaleVoice = voices.find(voice => 
        voice.name.includes('Google UK English Female') || 
        voice.gender === 'female'
    );
    if (femaleVoice) {
        speechData.voice = femaleVoice;
    }
    speechData.pitch = 1.255555555555;
    speechData.rate = 1;
    speechSynthesis.speak(speechData);
});
