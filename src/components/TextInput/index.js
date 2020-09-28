import React from 'react';

function TextInput(props){

    const {name, label, placeholder, onChange} = props;

    return(
        <>
        {label &&<label name={name}>{label}</label> } 
        <input type="text" name={name} placeholder={placeholder} onChange={onChange}/>
        </>
    )
}

export default TextInput
