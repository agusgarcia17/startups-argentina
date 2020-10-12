import React, {useState} from 'react'
import './styles.scss';
import Nav from '../../components/Nav';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import {useNotEmpty} from './../../hooks/notEmpty'
import {useLocalStorage} from '../../hooks/useLocalStorage';

function AddStartup(){ 

    const [inputs, setInputs] = useState({})
    // const [startups, setStartups] = useState([])

    const requiredFields = ["name", "logo", "mail"]
    const errors = useNotEmpty(inputs, requiredFields)
    const [getter, handleSave] = useLocalStorage()

    function handleInputs(e) {
        const {value, name} = e.target
 
        setInputs({...inputs, [name]: value})
        // console.log(inputs)
    }
    
    function addStartup(e) {
        e.preventDefault() 
        if(errors.length === 0) {
            handleSave(inputs)
            console.log("el form es valido")

        } else {
            console.log(`Tenes un error en ${errors}`)
        }
    }

    return(
        <>
        <Nav/>
        <div className="formContainer">
            <form>
                <TextInput name="name" label="Nombre" placeholder="Nombre"   onChange={handleInputs}  />
                <TextInput name="logo" label="Logo" placeholder="Link de imagen"  onChange={handleInputs} />
                <TextInput name="mail" label="E-mail" placeholder="Mail"    onChange={handleInputs}/>
                <label name="description">Description</label>
                <input className="description" name="description" type="text" placeholder="Description"   onChange={handleInputs}/>
                <TextInput name="web" label="Web" placeholder="Web (opcional)"   onChange={handleInputs}/>
                <TextInput name="twitter" label="Twitter" placeholder="Twitter (opcional)"  onChange={handleInputs}/>
                <TextInput name="instagram" label="Instagram"  placeholder="Instagram (opcional)"   onChange={handleInputs}/>
                <Button label="Agregar startup" onClick={addStartup}/>
            </form>
        </div> 
        </>
    )
}

export default AddStartup;