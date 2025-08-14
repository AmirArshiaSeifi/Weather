const storage = new Storage();

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.state);

document.addEventListener('DOMContentLoaded', getWeather)

document.getElementById('w-change-btn').addEventListener('click', changeLocation);

const ui = new UI();

function changeLocation(){
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    weather.changeLocation(city, state);
    storage.setLocationData(city, state);
    getWeather();
    $('#locationModal').modal('hide');
}

function getWeather(){
    
    weather.getWeather()
    .then(result => {
        console.log(result)
        ui.paint(result , weather.location);
    })
    .catch(err => console.log(err.message))

}

;