export const CameraFeedComponent = ({
	isMobileDevice,
	showCamera,
	setShowCamera,
}) =>
	true &&
	showCamera && (
		<div
			style={{
				// position: 'absolute',
				// bottom: '80px',
				// left: '35px',
				// right: '35px',
				// zIndex: '10',
				padding: '10px',
				paddingTop: '35px',
				width: '100%',
				// backgroundColor: 'green',
			}}
		>
			<div
				style={{
					height: isMobileDevice ? '200px' : '325px',
					width: isMobileDevice ? '100%' : '60%',
					// backgroundColor: 'gray',
					backgroundImage:
						"url('https://www.cctvcamerapros.com/v/4K/4K-security-camera-snapshot.jpg')",
					borderRadius: '6px',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
			>
				<div
					style={{
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						position: 'relative',
					}}
				>
					{/* <p style={{ fontSize: '24px', margin: '0', padding: '0' }}>
						No Feed.
					</p> */}
					<div
						style={{
							position: 'absolute',
							// zIndex: '15',
							// right: '14px',
							// textAlign: 'right',
							right: '20px',
							// paddingRight: '14px',
							top: '10px',
						}}
					>
						{/* <p
							style={{
								fontWeight: '600',
								fontSize: '24px',
								cursor: 'pointer',
							}}
							onClick={() => setShowCamera(false)}
						>
							&#10006;
						</p> */}
					</div>
				</div>
			</div>
		</div>
	);