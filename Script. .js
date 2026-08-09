function speak() {
    const text = document.getElementById("text").value;

    if (!text.trim()) {
        alert("براہِ کرم پہلے متن لکھیں");
        return;
    }

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "ur-PK";
    speech.rate = 0.9;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
