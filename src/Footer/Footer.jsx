import {useState} from "react";

function Footer(){
    // const[name, setName] = useState( null );
    const[typedString, setTypedString] = useState( '' );

    const handleChange = (event) =>{
        console.log( 'in onChange', event.target.value );
        setTypedString( event.target.value);
    }

    return(
        <div>
            <h1>Footer</h1>
            <input type="text" placeholder="say what?" onChange={ (event)=>{ handleChange (event) } }></input>
            <p>You typed: {typedString}</p>
        </div>
    )
}

export default Footer