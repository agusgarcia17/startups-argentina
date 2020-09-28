
import {useState} from 'react'

export const usePassword = (minlength = 8) => {

    const [isValid, setIsValid] = useState(false)
    
    const handleChange = (e) => {
        
    const {value} = e.target
    const _isValid = value.length >= minlength ? true : false
    
    setIsValid(_isValid)

    console.log(value)
    
    }
    return [isValid, handleChange]
    }
    