import React, { useState } from "react";
import useDebounce from "../Hooks/useDebounce";

interface SearchProps{
  value?: string;
  onChange: (event: React.SetStateAction<string>) => React.FormEvent<HTMLInputElement>;
}
export function SearchInput ({ value, onChange }:SearchProps) {
  const [displayValue, setDisplayValue] = useState(value)
  const debouncedChange = useDebounce(onChange, 500) //500 = MeioSegundo

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    console.log(debouncedChange)
    setDisplayValue(event.currentTarget.value)
    debouncedChange(event.currentTarget.value)
    //  onChange(event.currentTarget.value)
  }

  return (
  <>
      <input 
        className="p-2 " 
        type="search" 
        value={displayValue} 
        onChange={handleChange} 
      />
  </>
  )
}