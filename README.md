Ionian React Intro app
===

Phase 1: create and setup 
---

- run ```npx create-react-app APP-NAME``` in terminal 
- empty README.md (update with project description AT LEAST)
- cd into project folder, run ```npm start```
- go into src/App.js and update the initial DOM content 
- create "_template" folder in "src"
- create "_template.jsx" in "_template" folder
- add following code to _template.jsx:

```
import {useState} from "react";

function _template(){
    // const[name, setName] = useState( null );
    
    return(
        <div>
            <h1>_template</h1>
        </div>
    )
}

export default _template
```
- duplicate "_template" folder & rename to "Body"
- rename "_template.jsx" within "Body folder to "Body.jsx"
- in "Body.js" find & replace all "_template" with "Body"
- import Body at top App.js:

```
import Body from './Body/Body';
```

- mount Body element to DOM in App.js:
```
<Body/>
```


Phase 2: Button clicker
===

- add a button element in Body component 
```            
<button onClick={ handleClick }>Clicker</button>
```

- add a handleClick function at top of Body function: 
```
    const handleClick = ()=>{
        console.log( 'in handleClick' );
    }
```

- create clicks variable and it's setter (copy from templete comment): 

```
    const[clicks, setClicks] = useState( 0 ); //replace name(s) and set initial value 
```

- update click function: 
```
    const handleClick = ()=>{
        console.log( 'in handleClick' );
        setClicks( clicks + 1 );
    }
```

Phase 3: text in Footer 
===

- create our variable and setting using template:

```
    const[typedString, setTypedString] = useState( '' );
```

- display on DOM using an expression in JSX:

```
<p>You typed: {typedString}</p>
```

- add our text input in Footer: 

```<input type="text" placeholder="say what?" onChange={ (event)=>{ handleChange (event) } }></input>```

- create our handleChange function: 
```
    const handleChange = (event) =>{
        console.log( 'in onChange', event.target.value );
        setTypedString( event.target.value);
    }
```

