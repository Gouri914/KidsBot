import React from 'react'
import { Link } from 'react-router-dom'
import animate from './animate.json'
import Lottie from 'lottie-react'
import background from './image/background.jpg'

export default function Navbars() {

    return (
        <div style={{ position: 'relative', height: '100vh', backgroundImage: `url(${background})` }}>
            <Lottie animationData={animate} loop={true} autoPlay={true}
                style={{ position: 'absolute', width: '100%', height: '100%' }} />

            <div style={{   
                position: 'absolute', top: '0', left: '0', right: '0', bottom: '4',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '2%'
            }}>
                <div className='h3 ms-5 ' style={{ fontSize: '50px', color: 'white' }}>
                    <i className='bx bx-child h1' style={{ fontSize: '50px', color: 'white' }}></i>E-Bot</div>
                <div style={{ textAlign: 'center', fontSize: '30px', marginRight: '2%' }}>
                    <Link to="/ProfileLogin" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
                </div>
            </div>
        </div>

        
    )
}