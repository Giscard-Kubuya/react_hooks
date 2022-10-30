import React,{useEffect,useState} from 'react';
import axios from 'axios';

const EffectState = () => {
  const [count,setCount] = useState(0);
  const [data,setData] = useState('');

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
      console.log('API RESTAT')
      setData(response.data[count].name)

    })
  },[count])
  return (
    <div>
      This is the user number {count} and he's called {data}
      <button onClick={()=>{
        setCount(count+1)
      }}>See the next</button>

      <button onClick={()=>{
       count>-1&& setCount(count-1)
      }}>See the previous</button>
    </div>
  );
}

export default EffectState;

