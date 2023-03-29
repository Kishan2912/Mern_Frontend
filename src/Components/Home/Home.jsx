import React from 'react'
import Header from '../Header/Header'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className='full_home'>
                <Header />
                <div className='home'>
                    <h1 className="home-header">Authentication System</h1>
                    <h1 className="home-header-sub">Features :</h1>
                    <h1 className="home-header-sub">1. Create a new account using email-id</h1>
                    <h1 className="home-header-sub">2. Login using email-id and paasword</h1>
                    <h1 className="home-header-sub">3. Edit your profile </h1>
                </div>
            </div>
        </>
    )
}

export default Home