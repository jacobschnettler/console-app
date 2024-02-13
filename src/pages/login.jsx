import { Card, Form, Button } from 'react-bootstrap';

export const LoginPage = () => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div style={{ marginTop: '75px', width: '550px' }}>
				<Card body>
					<Card.Title>Login</Card.Title>

					<Form style={{ paddingTop: '8px' }}>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label>Username</Form.Label>
							<Form.Control type='text' placeholder='Username' />
						</Form.Group>

						<Form.Group
							className='mb-3'
							controlId='formBasicPassword'
						>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='Password'
							/>
						</Form.Group>

						<Button variant='primary' type='submit'>
							Login
						</Button>
					</Form>
				</Card>
			</div>
		</div>
	);
};
