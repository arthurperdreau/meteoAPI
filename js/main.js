const textMeteorologie=document.querySelector(".textMeteo")
const boutonMeteorologie=document.querySelector(".boutonMeteo")
const ville=document.querySelector(".ville")
const temperature=document.querySelector(".temperature")
boutonMeteorologie.addEventListener("click",()=>{
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.750000&lon=4.850000&appid=40cb5b1074d48b5b74893777d03db394")
        .then(response => response.json())
        .then(data => {
            ville.innerHTML=data.name
            textMeteorologie.innerHTML=`Today,the weather is ${data.weather[0].main}.`
            temperature.innerHTML=`The temperature is ${data.main.temp}K.`
        })})