import React, { useEffect, useState } from 'react'
// import { Crypto } from 'react-native-crypto';
// import jwt from 'passport-jwt';
// Use the jwt and Crypto modules here
import jwtDecode from 'jwt-decode'


import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'
import "./Css/profile.css"

const Profile = () => {
	const navigate = useNavigate()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('Not Given')
	const [tempName, setTempName] = useState('')
	const [tempEmail, setTempEmail] = useState('')

	async function GetProfile() {
		const req = await fetch('http://43.205.191.63:1337/api/profile', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})

		const data = await req.json()
		if (data.status === 'ok') {
			setName(data.name)
			setEmail(data.email)
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
	}, [])

	return (
		<>
			<Header />
			<div className="profile-page">
				<h1 className="profile-header">Profile Page</h1>
				<div className="profile-info">
					<h2 className="profile-name">
						Name: {name}
					</h2>
					<h3 className="profile-email">
						Email: {email}
					</h3>
					<Link to="/editprofile" className="edit-profile-link">
						Edit Profile
					</Link>
				</div>
			</div>

		</>
	)
}

export default Profile