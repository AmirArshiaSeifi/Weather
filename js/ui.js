class UI {

    constructor(){
        this.location = document.getElementById("w-location");
        this.main = document.getElementById("w-main");
        this.icon = document.getElementById("w-icon");
        this.temp = document.getElementById("w-temp");
        this.temp_min = document.getElementById("w-temp_min");
        this.temp_max = document.getElementById("w-temp_max");
        this.pressure = document.getElementById("w-pressure");
        this.humidity = document.getElementById("w-humidity");
        this.wind_speed = document.getElementById("w-wind_speed");
        this.lon = document.getElementById("w-lon");
        this.lat = document.getElementById("w-lat");
    }
    
    paint (weather, location) {
        this.location.textContent = location;
        this.main.textContent = this.mainWeather(weather.weather[0].main);
        this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.temp.textContent = (weather.main.temp-273).toFixed(2);
        this.temp_min.textContent = (weather.main.temp_min-273).toFixed(2);
        this.temp_max.textContent =  (weather.main.temp_max-273).toFixed(2);
        this.pressure.textContent =  weather.main.pressure;
        this.humidity.textContent =  weather.main.humidity;
        this.wind_speed.textContent = weather.wind.speed;
        this.lon.textContent = weather.coord.lon;
        this.lat.textContent = weather.coord.lat;
    }

   mainWeather (a) {
        switch(a){
            case 'Clouds':
                return 'ابری'
                break;
            case 'sun':
                return 'آفتابی'
                break;
            default:
                return
        }
    }
    
}