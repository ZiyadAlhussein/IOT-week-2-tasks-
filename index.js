function voice(){
    var recognition=new webkitSpeechRecognition();
    recognition.lang="ar";
    recognition.onresult=function(event){
        console.log(event);
        document.getElementById("speachToText").value=event.results[0][0].transcript;
    }
        
    recognition.start();
}