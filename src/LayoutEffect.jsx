import React,{useEffect,useLayoutEffect,useRef} from 'react';

const LayoutEffect = () => {
    const inpRef=useRef(null);
    
    // This is loaded after the rendering content reload
    useEffect(()=>{
        inpRef.current.value= 'DANIEL';
    },[])

    // This is loaded before the rendering content reload
    useLayoutEffect(()=>{
        console.log(inpRef.current.value)
    },[])

    return (
        <div>
            <input onChange={()=>{}} value='KUBUYA' ref={inpRef}/>
        </div>
    );
}

export default LayoutEffect;
