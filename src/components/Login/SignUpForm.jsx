import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import api from "../../api/api"

const SignUpForm = ({ user, setUser }) => {
	const navigate = useNavigate()
	const [error, setError] = useState("")

	const handleChange = (e, input) => {
		setUser((prev) => ({ ...prev, [input]: e.target.value }))
		setError()
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const data = {
			email: user.email,
			password: user.password,
			password_confirmation: user.confirmPassword,
		}
		try {
			const response = await api.post("/api/v1/auth/", data)

			setUser((prev) => ({ ...prev, accessToken: response.headers["access-token"] }))
			setUser((prev) => ({ ...prev, expiry: response.headers["client"] }))
			setUser((prev) => ({ ...prev, client: response.headers["expiry"] }))
			setUser((prev) => ({ ...prev, id: response.data.data["id"] }))

			navigate("/workspace/create", { replace: true })
		} catch (error) {
			setError(error.response.data.errors.full_messages)
		}
	}

	const goToLogin = () => {
		navigate("/")
	}

	return (
		<div className="col">
			<img src={logo} alt="logo" className="logo" />

			<form action="" onSubmit={handleSubmit}>
				{error && error.map((err) => <p className="error">{err}</p>)}
				<input value={user.username} placeholder="Full Name" onChange={(e) => handleChange(e, "name")} />

				<input value={user.email} placeholder="Email Address" onChange={(e) => handleChange(e, "email")} />

				<input
					value={user.password}
					type="password"
					autoComplete="off"
					placeholder="Password"
					onChange={(e) => handleChange(e, "password")}
				/>

				<input
					value={user.confirmPassword}
					type="password"
					autoComplete="off"
					placeholder="Confirm Password"
					onChange={(e) => handleChange(e, "confirmPassword")}
				/>
				<button type="submit">Create Account</button>
				<a onClick={goToLogin}>Sign in with existing account</a>
			</form>
		</div>
	)
}

export default SignUpForm
