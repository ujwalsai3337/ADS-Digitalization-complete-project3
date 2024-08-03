import React from 'react';
import './index.css';
import wantImage from './new.jpg';
import { useNavigate } from "react-router-dom";
 
const Home = () => {

    const navigate = useNavigate();

    return (
        <div className='home'>
            <nav className='nav-bar'>
                <h1 onClick={()=>navigate('/home')}>IFP Projects</h1>
                <h1 onClick={()=>navigate('/analytics')}>Analytics</h1>
                <h1 onClick={()=>navigate('/insert_student')}>Add IFP</h1>
                <h1 onClick={()=>navigate('/')}>Log Out</h1>
                <img className='nav-img' src={wantImage} alt="noimage"/>
            </nav>
        </div>
    )

}

export default Home;

