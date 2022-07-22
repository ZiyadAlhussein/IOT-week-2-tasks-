# IOT-week-2-tasks-
**Task 1: developing an Arabic voice recognition for Chrome browser**

(Helpful source: https://www.youtube.com/watch?v=-k-PgvbktX4) 

**1. Download Visual Studio Code program: https://code.visualstudio.com/download**

**2. Developing the voice recognition:**

The program consists of three main parts:

 1) The index.html code:
 
 ```ruby
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="index.js"></script>
    <title>Speach To Text</title>
</head>
<body>
    <div>
        <img src="logo.png" alt="Smart Methods" id="sm">
        <h1>Arabic Voice Recognition.</h1>
        <h2 id="ruh">By Ziyad Alhussein</h2>
        <textarea id="speachToText" cols="55" rows="5" placeholder="your voice recognition here..."></textarea>
        <button onclick="voice()">Start</button>
    </div>
</body>
</html>
  ```
  2) The style.css code:
  
   ```ruby
*{padding:0;margin:0;box-sizing:border-box; border-radius: 5px;}
body{

    background:rgb(250, 250, 250);
    width:100%;
     height:100vh;
     display:grid;
     place-items:center;
}

button{
    padding: 8px 43px;
    border: 0;
    outline: 0;
    background: rgb(0, 0, 0);
    color: white;
    border-radius: 20px;
    font-size: larger;
    background-position-x: -7px;
    position: absolute;
    left: 895px;
    bottom: 345px;
}
h1{

   color:rgb(0, 0, 0);
    font-family:sans-serif;
   margin-bottom:10px;
   text-shadow:2px 3px 5px grey;
    letter-spacing:2px;

}

#sm {
    position: absolute;
    left: 820px;   
    top: 170px;
}

#ruh{
    background: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    position: absolute;
    left: 890px;
    top: 300px;
}
  ```
  3) The index.js code: 
  
   ```ruby
function voice(){
    var recognition=new webkitSpeechRecognition();
    recognition.lang="ar";
    recognition.onresult=function(event){
        console.log(event);
        document.getElementById("speachToText").value=event.results[0][0].transcript;
    }
        
    recognition.start();
}
  ```
  **3. Save all 3 codes in the same folder then Open "index.html" the following chrome brower will open:
  
  ![image](https://user-images.githubusercontent.com/108147030/180515885-e6928848-f9e0-4875-99ce-f9e60b93da97.png)

Click on "Start" and it will recognize your Arabic voice as show here: 

![image](https://user-images.githubusercontent.com/108147030/180516151-5bf6bcca-7e90-4de7-9d7f-3d0b17c0f198.png)

  
