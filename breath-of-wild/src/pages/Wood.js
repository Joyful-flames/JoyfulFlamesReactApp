import React from 'react';
import NormalButton from '../components/buttons/NormalButton';
import icon3 from '../assets/images/plantIcon/EucalyptusTereticornis.png';
import icon5 from '../assets/images/plantIcon/EucalyptusArgophloia.png';
import icon6 from '../assets/images/plantIcon/JacarandaMimosifolia.PNG';
import image1 from '../assets/images/plantImage/EucalyptusTereticornis.PNG'

export default function Wood() {
    return (
        <>
        <div className='screen'>
            <div className='garden wrap'>
                <h1>Botanical Garden</h1>
                <h1>Wood</h1>
                <hr></hr>
                <div className='plants'>
                    <NormalButton imageUrl={icon5}></NormalButton>
                    <NormalButton imageUrl={icon3}></NormalButton> 
                    <NormalButton imageUrl={icon6}></NormalButton> 
                </div>
                <h1>Forest Red Gum</h1>
            </div>
            <div className='wrap science'>
                <h2>Scientific Name</h2>
                <h1>Eucalyptus Tereticornis</h1>
                <img src={image1}></img>
            </div>
        </div>  
        </>
    );
}

