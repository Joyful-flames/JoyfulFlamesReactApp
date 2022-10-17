import React from 'react';
import { Link } from "react-router-dom";
import NormalButton from '../components/buttons/NormalButton';
import icon1 from '../assets/images/plantIcon/CampylopusIntroflexus.png';
import icon2 from '../assets/images/plantIcon/DavalliaPyxidata.png';
import icon3 from '../assets/images/plantIcon/EucalyptusTereticornis.png';
import icon4 from '../assets/images/plantIcon/AlloteropsisSemialata.png';
import icon5 from '../assets/images/plantIcon/EucalyptusArgophloia.png';
import icon6 from '../assets/images/plantIcon/JacarandaMimosifolia.PNG';

export default function Library() {
    return (
        <>
        <div className='screen'>
            <div className='garden wrap'>
                <h1>Botanical Garden</h1>
                <div className='plants'>
                    <NormalButton imageUrl={icon1}></NormalButton>
                    <NormalButton imageUrl={icon2}></NormalButton> 
                    <NormalButton imageUrl={icon3}></NormalButton>  
                    <NormalButton imageUrl={icon4}></NormalButton>                    
                </div>
                <h1>Moss & Grass</h1>
                <hr></hr>
                <div className='plants'>
                    <Link to={"/Wood"}><NormalButton imageUrl={icon1}></NormalButton></Link>
                    <NormalButton imageUrl={icon4}></NormalButton>                          
                </div>
                <h1>Bush</h1>
                <hr></hr>
                <div className='plants'>
                    <NormalButton imageUrl={icon2}></NormalButton>                         
                </div>
                <h1>Wood</h1>
                <hr></hr>
                <div className='plants'>
                    <NormalButton imageUrl={icon5}></NormalButton>
                    <NormalButton imageUrl={icon3}></NormalButton> 
                    <NormalButton imageUrl={icon6}></NormalButton> 
                </div>
            </div>
        </div>         
        </>

    );
}