import { useEffect, useState } from 'react';
import { componentWidth, consoleFontSize } from '../../pages';

export const WorkScheduleComponent = ({ spaces }) => {
	var days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

	var hours = [
		'12:30-8:30',
		'Off',
		'12:30-8:30',
		'12:30-8:30',
		'Off',
		'4:00-10:00',
		'12:30-8:30',
	];

	return (
		<div
			style={{
				padding: '10px',
				maxWidth: componentWidth,
				fontSize: consoleFontSize,
			}}
		>
			<p>Work Schedule</p>

			<p>
				{spaces.map((_, index) => (
					<span key={index}>-</span>
				))}
			</p>

			{days.map((day, index) => (
				<p key={index}>
					{day} -{' '}
					<span
						style={{
							color: 'rgb(255, 255, 255)',
						}}
					>
						{hours[index]}
					</span>
				</p>
			))}
		</div>
	);
};
