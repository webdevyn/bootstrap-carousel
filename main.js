$.ajax({
    method: "get",
    url: "https://api.openweathermap.org/data/2.5/weather?lat=47&lon=122&appid=26abd8c18fb449bc1a1e2e4ec9ae7594"
})
    .then(function(response) {
        $('h2').append(`<h2>Current conditions in Seattle: ${response.weather[0].description}.</h2>`)
    })
    .catch(function() {
        console.log('weather api error')
    })