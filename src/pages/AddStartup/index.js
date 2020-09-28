import React, {useState} from 'react'
import Nav from '../../components/Nav';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import './styles.scss';
import {useNotEmpty} from './../../hooks/notEmpty'

function AddStartup(){ 

    const [inputs, setInputs] = useState({})
    const [startups, setStartups] = useState([])

    const requiredFields = ["name", "logo", "mail"]
    const errors = useNotEmpty(inputs, requiredFields)

    function handleInputs(e) {
        const {value, name} = e.target
 
        setInputs({...inputs, [name]: value})
        // console.log(inputs)
    }
    
    function addStartup(e) {
        e.preventDefault() 
        if(errors.length === 0) {
            const parseado = JSON.parse(localStorage.getItem("startup"))

            setInputs(parseado)
            
            const todas = [
                ...startups,
                inputs
            ]

            setStartups(todas)

            const stringeado = JSON.stringify(todas)
            localStorage.setItem("todas", stringeado)

            // console.log(localStorage)

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
                <input className="description" type="text" placeholder="Description"   onChange={handleInputs}/>
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