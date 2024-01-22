interface radioType {
    name :string;
    value: string;
    setRadio :(inputValue:string)=>void
}

const RadioCompo =(props:radioType)=>{
  const { name,value,setRadio}= props;

  return(
    <div style={{marginLeft: '130px'}}> 

     
  <input 
   type="radio"
   name={name}
   value={value}
  onChange={(e)=>setRadio(e.target.value)}
  />
  <label  style={{marginLeft: '9px', fontSize:'20px', lineHeight:'34px'}}   htmlFor={value}> {value} </label>


    </div>
  )


}

export default RadioCompo;