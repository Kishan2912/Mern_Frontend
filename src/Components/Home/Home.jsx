import React from 'react'
import Header from '../Header/Header'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className='full_home'>
                <Header />
                <div className='home'>
                    <h1 className="home-header-sub"> Do you want to create</h1>
                    <h1 className="home-header">Authentication System  ?</h1>
                    {/* <h1 className="home-header-sub">Features :</h1> */}
                    <h1 className="home-header-sub"> Let's join us!</h1>
                    {/* <h1 className="home-header-sub"> Edit your profile </h1> */}
                </div>
            </div>
        </>
    )
}

export default Home