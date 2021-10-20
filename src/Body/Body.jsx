import {useState} from "react";

function Body(){
    // const[name, setName] = useState( null );
    const[clicks, setClicks] = useState( 0 ); //replace name(s) and set initial value 
    const handleClick = ()=>{
        console.log( 'in handleClick' );
        setClicks( clicks + 1 );
    }

    return(
        <div>
            <h1>Ionian React Intro</h1>
            <p>Hello world from the Body Component</p>
            <button onClick={ handleClick }>Clicker</button>
            <p>Clicks: { clicks }</p>
        </div>
    )
}

export default Body