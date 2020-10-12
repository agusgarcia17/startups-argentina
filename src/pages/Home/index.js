import React from 'react'; 
import Nav from '../../components/Nav'
import List from '../../components/List'
import { useLocalStorage } from './../../hooks/useLocalStorage'; 

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
