import React, { useEffect, useState, } from 'react'
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import "./editProfile.css"

const EditProfile = () => {
	const navigate = useNavigate()
	const [tempName, setTempName] = useState('')
	const [tempEmail, setTempEmail] = useState('')

	async function GetProfile() {
		const req = await fetch('http://43.205.191.63/api/profile', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})

		const data = await req.json()
		if (data.status === 'ok') {
			setTempName(data.name)
			setTempEmail(data.email)
		} else {
			alert(data.error)
		}
	}

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			const user = jwtDecode(token)
			if (!user) {
				localStorage.removeItem('token')
				navigate('/login', { replace: true })
			} else {
				GetProfile()
			}
		}
		else {
			navigate('/login', { replace: true })
		}
	}, [])

	async function updateProfile(event) {
		event.preventDefault()

		console.log(tempName)

		const req = await fetch('http://43.205.191.63/api/profile', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-access-token': localStorage.getItem('token'),
			},
			body: JSON.stringify({
				name: tempName,
				email: tempEmail,
			}),
		})

		const data = await req.json()
		if (data.status === 'ok') {
			navigate('/profile', { replace: true })
		} else {
			alert(data.error)
		}
	}

	return (
		<div className="edit-profile-page">
			<h1 className="edit-profile-header">Edit Profile</h1>
			<form onSubmit={updateProfile} className="edit-profile-form">
				<input
					type="email"
					placeholder="Email"
					value={tempEmail}
					// onChange={(e) => setTempEmail(e.target.value)}
					className="edit-profile-input email_input"
					readOnly
				/>
				<input
					type="text"
					placeholder="Name"
					value={tempName}
					onChange={(e) => setTempName(e.target.value)}
					className="edit-profile-input"
				/>
				<input type="submit" value="Update Profile" className="edit-profile-submit" />
			</form>
		</div>

	)
}

export default EditProfile