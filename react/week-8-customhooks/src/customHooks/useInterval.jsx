import { useEffect } from 'react';

function useInterval(fn, timer){
  useEffect(()=>{
    const val = setInterval(fn, timer);

    return ()=>{
      clearInterval(val);
    }
  }, [fn, timer]);
}

export default useInterval;