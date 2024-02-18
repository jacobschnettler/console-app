import { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { loginCall } from '../utils';

export const LoginPage = () => {
	const [UsernameInput, setUsernameInput] = useState('');
	const [PasswordInput, setPasswordInput] = useState('');

	function login(e) {
		// window.location.href = '/';

		if (e && e.preventDefault) e.preventDefault();

		loginCall({
			username: UsernameInput,
			password: PasswordInput,
		}).then(({ data }) => {
			if (data.error) return alert(data.error);

			localStorage.setItem('user-token', data.token);

			window.location.href = '/';
		});
	}

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
					<Card.Title>Console Login</Card.Title>

					<Form style={{ paddingTop: '8px' }}>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label>Username</Form.Label>
							<Form.Control
								type='text'
								placeholder='Username'
								value={UsernameInput}
								onChange={(e) =>
									setUsernameInput(e.target.value)
								}
							/>
						</Form.Group>

						<Form.Group
							className='mb-3'
							controlId='formBasicPassword'
						>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='Password'
								value={PasswordInput}
								onChange={(e) =>
									setPasswordInput(e.target.value)
								}
								// onKeyDown={(e) => {
								// 	if (e.key == 'Enter') login();
								// }}
							/>
						</Form.Group>

						<hr />

						<Button
							onClick={login}
							variant='primary'
							type='submit'
							style={{
								width: '100%',
								backgroundColor: 'rgb(255, 255, 255)',
								color: 'rgb(33, 37, 41)',
								borderColor: 'rgb(222, 226, 230)',
							}}
						>
							Login
						</Button>
					</Form>
				</Card>
			</div>
		</div>
	);
};
