import { useState, useEffect, useContext } from 'react';

import {
	LocalAreaDataComponent,
	HomeServicesComponent,
	HeadTagsComponent,
	CameraFeedComponent,
	VehicleDataComponent,
	PlantTrackerComponent,
} from '../components';

import { AuthContext } from '../contexts';

export const consoleFontSize = '18px';
export const componentWidth = '700px';

export const ConsolePage = () => {
	const [Spaces, setSpaces] = useState([]);

	const [ShowCamera, setShowCamera] = useState(true);

	const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);

	const [SelectedIndex, setSelectedIndex] = useState(0);

	const { logoutUser } = useContext(AuthContext);

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.keyCode === 9) {
				event.preventDefault();

				setSelectedIndex((index) => (index = index + 1));

				if (SelectedIndex == 2) return setSelectedIndex(0);
			}

			if (event.keyCode === 13) {
				event.preventDefault();

				switch (SelectedIndex) {
					case 1:
						window.open(
							'https://www.accuweather.com/en/us/tannersville/18372/weather-forecast/2125776',
							'_blank'
						);

						break;
					case 2:
						logoutUser();

						break;
				}
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [SelectedIndex]); // Empty dependency array ensures that this effect runs only once

	// const isMobileDevice = true;

	return (
		<div>
			<HeadTagsComponent isMobileDevice={isMobileDevice} />

			<div style={{ padding: '25px' }}>
				{/* <h1>Console	</h1> */}

				<div
					style={{
						position: 'absolute',
						bottom: '10px',
						left: '35px',
					}}
				>
					<a
						href='#'
						onClick={logoutUser}
						target='_blank'
						style={{ fontSize: consoleFontSize }}
					>
						<p>
							<span
								style={{
									color:
										SelectedIndex == 2
											? 'rgb(100, 149, 237)'
											: 'rgb(255, 255, 255)',
									textDecoration: 'underline',
								}}
							>
								Logout
							</span>
						</p>
					</a>
				</div>

				<div
					style={{
						height: isMobileDevice ? '82.5vh' : '90vh',
						width: '100%',
					}}
				>
					<div style={{ display: 'flex' }}>
						<div
							style={{
								// display: !isMobileDevice ? 'flex' : null,
								paddingTop: '15px',
								width: 'calc(.50 * (100vw - 50px))',
								// backgroundColor: 'red',
								overflow: 'auto',
								// paddingRight: '15px',
								paddingTop: '0',
							}}
						>
							<LocalAreaDataComponent
								spaces={Spaces}
								isMobileDevice={isMobileDevice}
								selectedIndex={SelectedIndex}
							/>

							<HomeServicesComponent
								spaces={Spaces}
								setSpaces={setSpaces}
								isMobileDevice={isMobileDevice}
							/>
						</div>

						<div
							style={{
								// display: !isMobileDevice ? 'flex' : null,
								paddingTop: '15px',
								width: 'calc(.50 * (100vw - 50px))',
								// backgroundColor: 'red',
								overflow: 'auto',
								// paddingRight: '15px',
								paddingTop: '0',
							}}
						>
							<VehicleDataComponent
								spaces={Spaces}
								isMobileDevice={isMobileDevice}
								selectedIndex={SelectedIndex}
							/>

							<PlantTrackerComponent
								spaces={Spaces}
								setSpaces={setSpaces}
								isMobileDevice={isMobileDevice}
							/>

							{/* <HomeServicesComponent
						spaces={Spaces}
						setSpaces={setSpaces}
						isMobileDevice={isMobileDevice}
					/> */}
						</div>
					</div>

					<CameraFeedComponent
					// isMobileDevice={isMobileDevice}
					// showCamera={ShowCamera}
					// setShowCamera={setShowCamera}
					/>
				</div>
			</div>
		</div>
	);
};
