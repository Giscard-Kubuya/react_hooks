import React,{useRef,useState} from 'react';

const RefHook = () => {
    const inputRef = useRef(null);
    const [name,setName] = useState('Kubuya')

    const onClick = ()=>{
        inputRef.current.focus();
        setName(inputRef.current.value);
        inputRef.current.value = '';
    }
    return (
        <div>
            <h1>My name is {name}</h1>
            <input onChange={()=>{setName(inputRef.current.value)}} type='text' placeholder='Ex...' ref={inputRef}/>
            <button onClick={onClick}>Confirm</button>
        </div>
    );
}

export default RefHook;
