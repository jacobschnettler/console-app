import { useEffect, useState } from 'react';
import { componentWidth, consoleFontSize } from '../../pages';

export const PlantTrackerComponent = ({ spaces, selectedIndex }) => {
	const [Time, setTime] = useState('');

	useEffect(() => {
		setTime(new Date().toLocaleTimeString());

		setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);
	}, []);

	const [weatherData, setWeatherData] = useState(null);
	const apiKey = 'e06808c68e8782f07704bdc84b609742';
	const zipCode = '18372'; // Replace with the desired ZIP code

	useEffect(() => {
		// Fetch latitude and longitude from zip code using a geocoding service
		function fetchData() {
			fetch(
				`https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${apiKey}`
			)
				.then((response) => response.json())
				.then((geoData) => {
					const { lat, lon } = geoData;
					// Once we have latitude and longitude, fetch weather data
					fetch(
						`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
					)
						.then((response) => response.json())
						.then((data) => {
							setWeatherData(data);
						})
						.catch((error) => {
							console.error(
								'Error fetching weather data:',
								error
							);
						});
				})
				.catch((error) => {
					console.error('Error fetching coordinates:', error);
				});
		}

		fetchData();

		setInterval(fetchData, 300000);
	}, [zipCode, apiKey]);

	// Convert temperature from Celsius to Fahrenheit
	const celsiusToFahrenheit = (celsius) => {
		return (celsius * 9) / 5 + 32;
	};

	return (
		<div
			style={{
				padding: '10px',
				maxWidth: componentWidth,
				fontSize: consoleFontSize,
				paddingTop: '35px',
			}}
		>
			<p>Plant Growth</p>

			<p>
				{spaces.map((_, index) => (
					<span key={index}>-</span>
				))}
			</p>

			<p>Daisies:</p>

			{[
				{ label: '#1', value: 98 },
				{ label: '#2', value: 95 },
				{ label: '#3', value: 60 },
			].map((service, index) => (
				<p key={index} style={{ marginLeft: '15px' }}>
					{service.label} -{' '}
					<span
						style={{
							color: 'rgb(0, 255, 0)',
						}}
					>
						{service.value}%
					</span>
				</p>
			))}

			{/* <a
				href='https://www.accuweather.com/en/us/tannersville/18372/weather-forecast/2125776'
				target='_blank'
			>
				<p>
					<span
						style={{
							color:
								selectedIndex == 1
									? 'rgb(100, 149, 237)'
									: 'rgb(255, 255, 255)',
							textDecoration: 'underline',
						}}
					>
						View Timelapse
					</span>
				</p>
			</a> */}
		</div>
	);
};
