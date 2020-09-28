import React, {useState} from 'react'; 
import Nav from '../../components/Nav'
import List from '../../components/List'
// import { StartupProvider } from './../../context/StartupContext'; 

function Home() {

  // const [startUp, setStartUp] = useState('')

  // function handleInput(value){
  //   setStartUp(value)
  //   console.log(startUp)
  // }

  // const StartupContextData = {
  //   startUp,
  //   handleInput
  // } 
  return (
    <>
      <Nav/>
      <List/> 
     
    </>

  );
}

export default Home;
