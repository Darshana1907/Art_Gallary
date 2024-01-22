import { useEffect, useState } from "react";
import styless from './InputCompo.module.scss'

interface inputPropsType {
  inputType: string;
  placeHolder: string;
  inputValue: string;
  inputOnChange: (inputvalue: string) => void;
}

const InputCompo = (props:inputPropsType) => {
 
 const { inputType, placeHolder,inputValue,inputOnChange}=props;
  
 

 return (
    <div >
      <span className={styless['divname']}>{placeHolder}</span>
      <br/>
      <input className={styless['inputxt']}
       type={inputType}
       placeholder={placeHolder}
       value={inputValue}
       onChange={(e)=>inputOnChange(e.target.value)}
       
       />

       
    </div>
  );
};

export default InputCompo;
