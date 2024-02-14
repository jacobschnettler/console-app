import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Card } from 'react-bootstrap';
import { fetchHomeServices } from '../utils';
import { LocalAreaDataComponent } from '../components';

export const consoleFontSize = '22px';
export const componentWidth = '700px';

export const ConsolePage = () => {
	const [Services, setServices] = useState([]);

	// const [Plants, setPlants] = useState([
	// 	{
	// 		label: 'Daisy #1',
	// 		reading: 0.51,
	// 	},
	// ]);

	useEffect(() => {
		function fetchServices() {
			fetchHomeServices().then(({ data }) => {
				if (data.error) return alert(data.error);

				setServices(data.services);
			});
		}

		setInterval(fetchServices, 30000);

		fetchServices();
	}, []);

	const [Spaces, setSpaces] = useState([]);

	const [ShowCamera, setShowCamera] = useState(true);

	useEffect(() => {
		let _spaces = [];

		for (let i = 0; i < Services.length; i++) {
			var service = Services[i];

			var spaces = (service.label + ' - ' + service.status).length;

			_spaces.push(spaces);
		}

		let largestNumber = _spaces[0];

		for (let i = 1; i < _spaces.length; i++) {
			if (_spaces[i] > largestNumber) {
				largestNumber = _spaces[i];
			}
		}

		let realSpaces = [];

		for (let x = 0; x < largestNumber; x++) {
			realSpaces.push('-');
		}

		setSpaces(realSpaces);
	}, [Services]);

	return (
		<div>
			<Helmet>
				<link rel='preconnect' href='https://fonts.googleapis.com' />

				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossorigin
				/>

				<link
					href='https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap'
					rel='stylesheet'
				/>

				<style>
					{`
					* {
						overflow: hidden !important;
					}

					body {
						width: 100vh;
						height: 100vh;
						background-color: rgb(0, 0, 0);
						color: rgb(255, 255, 255);
						
						font-family: "Source Code Pro", monospace;
						font-optical-sizing: auto;
						font-weight: <weight>;
						font-style: normal;
					}

					.card-body {
						background-color: rgb(0, 0, 0) !important;
						color: #eee !important;
					}
                `}
				</style>
			</Helmet>

			<div style={{ padding: '25px' }}>
				<h1>Console</h1>

				<div style={{ display: 'flex', paddingTop: '15px' }}>
					<LocalAreaDataComponent spaces={Spaces} />

					<div
						style={{
							padding: '10px',
							maxWidth: componentWidth,
							paddingLeft: '120px',
							fontSize: consoleFontSize,
						}}
					>
						<p>Home Services</p>

						<p>
							{Spaces.map((_, index) => (
								<span key={index}>-</span>
							))}
						</p>

						{Services.map((service, index) => (
							<p key={index}>
								{service.label} -{' '}
								<span
									style={{
										color:
											service.status == 1
												? 'rgb(0, 255, 0)'
												: 'rgb(255, 0, 0)',
									}}
								>
									{service.status == 1 ? 'Online' : 'Offline'}
								</span>
							</p>
						))}
					</div>

					{/* <div
						style={{
							padding: '10px',
							maxWidth: '600px',
							paddingLeft: '120px',
						}}
					>
						<p>Plant Moisture Levels</p>

						<p>{Spaces.map((_) => '-')}</p>

						{Plants.map((plant) => (
							<p>
								{plant.label} -{' '}
								<span
									style={{
										color:
											plant.reading > 0.5
												? 'rgb(0, 255, 0)'
												: 'rgb(255, 0, 0)',
									}}
								>
									{plant.reading * 100}%
								</span>
							</p>
						))}
					</div> */}
				</div>
			</div>

			{ShowCamera && (
				<div
					style={{
						position: 'absolute',
						top: '28px',
						right: '28px',
						zIndex: '10',
					}}
				>
					<div
						style={{
							height: '300px',
							width: '550px',
							backgroundColor: 'gray',
							borderRadius: '6px',
						}}
					>
						<div
							style={{
								position: 'absolute',
								zIndex: '15',
								right: '14px',
								top: '10px',
							}}
						>
							<p
								style={{
									fontWeight: '600',
									fontSize: '24px',
									cursor: 'pointer',
								}}
								onClick={() => setShowCamera(false)}
							>
								&#10006;
							</p>
						</div>

						<div
							style={{
								height: '100%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<p style={{ fontSize: '24px' }}>No Feed.</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
