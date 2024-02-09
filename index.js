const apiKey="08e45c0e476321d47fba9ac2a4c8f3e3";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchbox=document.querySelector(".search input");
        const searchBtn=document.querySelector(".search button");
        const weatherIcon=document.querySelector(".weather-icon");
        

        async function checkWeather(city){
            const response=await fetch(apiUrl +city+ '&appid='+apiKey);
            if(response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }
            else{
                var data=await response.json();

                console.log(data);

                document.querySelector(".city").innerHTML=data.name;
                document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
                document.querySelector(".Humidity").innerHTML=data.main.humidity+"%";
                document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
                if(data.weather[0].main=="Clouds"){
                    weatherIcon.src="images/clouds.png";
                }
                else if(data.weather[0].main=="Mist"){
                    weatherIcon.src="images/mist.png";
                }
                else if(data.weather[0].main=="Clear"){
                    weatherIcon.src="images/clear.png";
                }
                else if(data.weather[0].main=="Rain"){
                    weatherIcon.src="images/rain.png";
                }
                else if(data.weather[0].main=="Drizzle"){
                    weatherIcon.src="images/drizzle.png";
                }
                else if(data.weather[0].main=="Haze"){
                    weatherIcon.src="images/haze.png";
                }

                document.querySelector(".weather").style.display="block";
                document.querySelector(".error").style.display="none";
            }

            
        }

        searchBtn.addEventListener("click",()=>{
            checkWeather(searchbox.value);
        })
