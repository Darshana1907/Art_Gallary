interface ChechType {
    name :string;
    value :string;
    setCheck :(inputValue : string )=>void;
}

const CheckCompo =(props:ChechType)=>{

    const{ name , value, setCheck}= props
 
    return (
        <div style={{marginLeft: '130px'}}>
          <input 
           type='checkbox'
           name ={name}
           value={value}
           onChange={(e)=>setCheck(e.target.value)}
        /> 
       <label style={{marginLeft: '9px', fontSize:'20px', lineHeight:'34px'}}   htmlFor={value}> {value}</label>


        </div>
    )
    
}
export default CheckCompo;