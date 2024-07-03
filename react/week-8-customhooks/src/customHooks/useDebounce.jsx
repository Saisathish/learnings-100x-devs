import { useEffect, useState } from 'react';

function useDebounce(valueChange, timer) {
  const [value, setValue] = useState(valueChange);

  useEffect(()=>{
    const val = setTimeout(()=>{
      setValue(valueChange);
    }, timer);

    return ()=>{
      clearTimeout(val);
    }
  },[valueChange, timer]);

  return value;
}

export default useDebounce;