import { useState, useEffect } from 'react';

type THandler = NodeJS.Timeout | null;

const useThrottle = (func: Function, delay: number): Function => {
  const [throttledFunc, setThrottledFunc] = useState(func);
  let handler: THandler;
  useEffect(() => {
    if (!handler) {
      handler = setTimeout(() => {
        setThrottledFunc(func);
        handler = null;
      }, delay);
    }
  }, [func, delay]);
  return throttledFunc;
};

export default useThrottle;
