import React, {  useRef } from "react";

export default function useDebounce(fn: any, delay:number) {
  const timeoutRef = useRef<null | number>(null)

  function debouncedFn(...args :any[]){
    if(timeoutRef.current){
      window.clearTimeout(timeoutRef.current)
    }
      timeoutRef.current = window.setTimeout(()=>{
        fn(...args);
      }, delay);
    

  }
  return debouncedFn;

}