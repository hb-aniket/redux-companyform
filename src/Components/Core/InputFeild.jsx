import React from 'react'
// import { useFormContext } from 'react-hook-form'

export default function InputFeild(props) {
    return (
        <div className="col-md-3 mt-4">
            <label htmlFor="formGroupExampleInput2" className="form-label">{props.label}</label>
            <input type="text" className="form-control" id={props.id} placeholder={props.placeholder} name={props.name} 
            {...props.register(`${props.data}.${props.name}` ,{ required: true, maxLength: 20 })}
            aria-invalid={`${props.data}.${props.name}` ? "true" : "false"} 
            />
            
        </div>
    )
}
