import { useEffect, useState } from 'react'

const useWindowResize = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleWindowResize = (e) => {
    console.log("event", e);
    setPosition({ x: window.innerWidth, y: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return position;
};

export default useWindowResize;