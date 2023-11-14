import { useState } from "react";

export default function ControlledFormRaw() {
	const [formState, setFormState] = useState({
		username: "",
		password: "",
	});

	const changeHandler = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(formState.username, formState.password);
	};

	return (
		<>
			<h1>Controlled Form</h1>

			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						name="username"
						value={formState.username}
						onChange={changeHandler}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						value={formState.password}
						onChange={changeHandler}
					/>
				</div>
				<div>
					<input type="submit" value="Register" />
				</div>
			</form>
		</>
	);
}
