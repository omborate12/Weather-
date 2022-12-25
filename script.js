const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5a7436ca68msh8582a60f1ab1d03p1083bajsn66b717b4b697',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


 const city =["mumbai","pune","nashik"]
//  let templet = `<tr>
//  <th scope="row">1</th>
//  <td>Mark</td>
//  <td>Otto</td>
//  <td>@mdo</td>
// </tr>`

 let data = document.getElementById("data")
 
const getWeather = async(city) => {
	// cityName.innerHTML = city
// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		try {
			let response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
			response = await response.json()
			console.log(response)
			const tablerow=`
			<th scope="row">${city}</th>
			<td>${response.temp}</td>
			<td>${response.feels_like}</td>
			<td>${response.humidity}</td>
			<td>${response.min_temp}</td>
			<td>${response.max_temp}</td>
			<td>${response.wind_speed}</td>
			<td>${response.wind_degrees}</td>
			<td>${new Date(response.sunrise)}</td>
			<td>${new Date(response.sunset)}</td>
			
		   `
		   const row =document.createElement("tr")
		   row.innerHTML = tablerow
		   data.appendChild(row)


		} catch (error) {
			console.log(error)
			
		}



	// .then(response => response.json())
	// .then(response =>
		// {

		    // console.log(response)
			// temp.innerHTML =response.temp
			// temp2.innerHTML =response.temp
			// // cloud_pct.innerHTML =response.cloud_pct
			// feels_like.innerHTML =response.feels_like
			// humidity.innerHTML =response.humidity
			// humidity2.innerHTML =response.humidity
			// min_temp.innerHTML =response.min_temp
			// max_temp.innerHTML =response.max_temp
			// wind_speed.innerHTML =response.wind_speed
			// wind_speed2.innerHTML =response.wind_speed
			// wind_degrees.innerHTML =response.wind_degrees
			// sunrise.innerHTML =response.sunrise
			// // sunrise2.innerHTML =response.sunrise
			// sunset.innerHTML =response.sunset
		// })
	// .catch(err => console.error(err));
}
city.forEach(element=> {
	getWeather(element)


})

	// submit.addEventListener('click', e => {
		// e.preventDefault()
		// getWeather(city.value)
	   
	// })




	// const options = {
	// 	method: 'GET',
	// 	headers: {
	// 		'X-RapidAPI-Key': '5a7436ca68msh8582a60f1ab1d03p1083bajsn66b717b4b697',
	// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	// 	}
	// };
	
	// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune', options)
	// 	.then(response => response.json())
	// 	.then(response =>{

	// 		temp3.innerHTML =response.temp
	// 		cloud_pct3.innerHTML =response.cloud_pct
	// 		feels_like3.innerHTML =response.feels_like
	// 		humidity3.innerHTML =response.humidity
	// 		min_temp3.innerHTML =response.min_temp
	// 		max_temp3.innerHTML =response.max_temp
	// 		wind_speed3.innerHTML =response.wind_speed
	// 		wind_degrees3.innerHTML =response.wind_degrees
	// 		sunrise3.innerHTML =response.sunrise
	// 		sunset3.innerHTML =response.sunset
			
			
	// 		console.log(response)
	// 	})
	// 	.catch(err => console.error(err));