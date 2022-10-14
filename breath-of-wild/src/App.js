import React, { Component } from 'react';
import JacarandaMimosifolia from './components/Plants/JacarandaMimosifolia'
import AlloteropsisSemialata from './components/Plants/AlloteropsisSemialata';
import DavalliaPyxidata from './components/Plants/DavalliaPyxidata'
import EucalyptusArgophloia from './components/Plants/EucalyptusArgophloia';
import EucalyptusTereticornis from './components/Plants/EucalyptusTereticornis';
import Mangroves from './components/Plants/Mangroves';
import MayacaFluviatilis from './components/Plants/MayacaFluviatilis'
import MelaleucaViminalis from './components/Plants/MelaleucaViminalis';


export default class App extends Component{
  render() {
    return (
      <div>
        <JacarandaMimosifolia></JacarandaMimosifolia>
        <AlloteropsisSemialata></AlloteropsisSemialata>
        <DavalliaPyxidata></DavalliaPyxidata>
        <EucalyptusTereticornis></EucalyptusTereticornis>
        <EucalyptusArgophloia></EucalyptusArgophloia>
        <Mangroves></Mangroves>
        <MayacaFluviatilis></MayacaFluviatilis>
        <MelaleucaViminalis></MelaleucaViminalis>

      </div>
    );
  }

}

