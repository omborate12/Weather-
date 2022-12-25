

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5a7436ca68msh8582a60f1ab1d03p1083bajsn66b717b4b697',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = async(city) => {
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	



	 .then(async response => await response.json())
	.then(response =>
		{

		    console.log(response)
			temp.innerHTML =response.temp
			temp2.innerHTML =response.temp
			// cloud_pct.innerHTML =response.cloud_pct
			feels_like.innerHTML =response.feels_like
			humidity.innerHTML =response.humidity
			humidity2.innerHTML =response.humidity
			min_temp.innerHTML =response.min_temp
			max_temp.innerHTML =response.max_temp
			wind_speed.innerHTML =response.wind_speed
			wind_speed2.innerHTML =response.wind_speed
			wind_degrees.innerHTML =response.wind_degrees
			sunrise.innerHTML =new Date(response.sunrise)
			// sunrise2.innerHTML =response.sunrise
			sunset.innerHTML =new Date(response.sunset)
		})
	.catch(err => console.error(err));
}



    submit.addEventListener('click', e => {
		e.preventDefault()
        const city = document.getElementById("city")
		getWeather(city.value)
	   
	})