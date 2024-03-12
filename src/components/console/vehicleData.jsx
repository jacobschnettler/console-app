import { useEffect, useState } from 'react';
import { componentWidth, consoleFontSize } from '../../pages';
import { fetchSubaruData } from '../../utils';

export const VehicleDataComponent = ({ spaces, selectedIndex }) => {
	const [TirePressure, setTirePressure] = useState([]);
	const [FuelRange, setFuelRange] = useState(null);
	const [Odometer, setOdometer] = useState(null);

	useEffect(() => {
		fetchSubaruData().then(({ data }) => {
			setOdometer(data.rawMiles);
			setFuelRange(data.rawMilage);
			setTirePressure(data.tirePressure);
		});
	}, []);

	return (
		<div
			style={{
				padding: '10px',
				maxWidth: componentWidth,
				fontSize: consoleFontSize,
				paddingTop: '0',
			}}
		>
			<p>Vehicle Data</p>

			<p>
				{spaces.map((_, index) => (
					<span key={index}>-</span>
				))}
			</p>

			{[
				{
					label: 'Tire Pressure: ',
					text: TirePressure && (
						<span style={{ color: 'rgb(255, 255, 255)' }}>
							{TirePressure.map(value => value + " ")}
						</span>
					),
				},
				{ label: 'Fuel Range: ', text: FuelRange && FuelRange + ' Miles' },
				{ label: 'Odometer: ', text: Odometer && Odometer + " Miles" },
			].map((service, index) => (
				<p key={index}>
					{service.label}
					<span
						style={{
							color: 'rgb(255, 255, 255)',
						}}
					>
						{service.text}
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
						Start Engine
					</span>
				</p>
			</a> */}
		</div>
	);
};
