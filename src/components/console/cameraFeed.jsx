import { useRef, useEffect, useState } from 'react';
import { loadPlayer } from 'rtsp-relay/browser';

const VideoFeed = () => {
	const canvas = useRef();
	const [errorHandled, setErrorHandled] = useState(false);

	useEffect(() => {
		const errorHandler = () => {
			if (!errorHandled) {
				setErrorHandled(true);
				window.location.href = 'http://localhost:5000/api/reopen';
			}
		};

		window.onerror = errorHandler;

		if (!canvas.current) throw new Error('Ref is null');

		loadPlayer({
			url: 'ws://localhost:2000/api/stream',
			canvas: canvas.current,
		});

		return () => {
			window.onerror = null; // Cleanup to remove the error handler
		};
	}, [errorHandled]);

	return <canvas ref={canvas} style={{ width: '100%' }} />;
};

export const CameraFeedComponent = ({
	isMobileDevice,
	showCamera,
	setShowCamera,
}) => (
	<div
		style={{
			padding: '10px',
			paddingTop: '35px',
			width: '100%',
			height: '100%',
		}}
	>
		<div
			style={{
				height: `${1920 * 0.25}px`,
				width: `100%`,
				borderRadius: '6px',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			<VideoFeed />

			<div
				style={{
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'relative',
				}}
			>
				<div
					style={{
						position: 'absolute',
						right: '20px',
						top: '10px',
					}}
				></div>
			</div>
		</div>
	</div>
);
