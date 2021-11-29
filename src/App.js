import React from 'react';
import './App.css';
import Header from './components/Header';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';


let hex = BoxColor
function App() {
  return (
    <div>
<Header
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<Header
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
<Greetings lang={'en'} /> 
<Greetings lang={'es'} /> 
<Greetings lang={'fr'} /> 
<Greetings lang={'de'} />

<Random min={1} max={6}/>
<Random min={1} max={100}/>

<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />

</div>
 
 );
}

export default App;
