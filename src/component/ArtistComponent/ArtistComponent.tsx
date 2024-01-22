import { useReducer, useState } from "react";
import InputCompo from "../../module/InputCompo/InputCompo";
import RadioCompo from "../../module/Radiocompo/RadioCopmo";
import CheckCompo from "../../module/CheckCompo/Checkcompo";
import { Button } from "react-bootstrap";
import styless from './ArtistComponent.module.scss'

export interface artistType {
  id: string;
  ArtistName: string;
  DOB: string;
  Email:string;
  Mobile :number;
  Address:string;
  Gender:string;
  CheckBox:string;
}

const initialState = {
  id: "000",
  ArtistName: "",
  DOB: "0",
  Email:'',
  Mobile: 91,
  Address:'',
  Gender:'',
  CheckBox:''
};
const reducerFun = (state: any, action: any) => {
  switch (action.type) {
    case "setArtistName":
      return { ...state, ArtistName: action.payload.ArtistName };

    case "setArtistDOB":
      return { ...state, DOB: action.payload.DOB };

      case "setArtistEmail":
      return { ...state, Email: action.payload.Email };

      case "setArtistMobile":
      return { ...state, Mobile: action.payload.Mobile };

      case "setArtistAddress":
      return { ...state,Address : action.payload.Address };

      case "setArtistGender":
      return { ...state, Gender : action.payload.Gender };
    
      case "setArtistCheck":
         return { ...state, CheckBox : action.payload.CheckBox };
       
    
      default:
      return { ...state };
  }
};

const ArtistCompo = (props: {
  ArtistData: artistType[];
  setArtistData: React.Dispatch<any>;
}) => {
  const { ArtistData, setArtistData } = props;
  const genderArr= ['Male','Female','Transgender','Other'];
  const CheckArr =['painting - decorative','photography','Drawing','Paper/Mixed Media','Glass','Wood - furnishings','Wood - decorative','Calliography']


  const [state, dispatch] = useReducer<(state: any, action: any) => any>(
    reducerFun,
    initialState
  );

  const submitform = () => {
    const id = `${state.ArtistName}-${Math.random() * 1000}-${
      Math.random() * 1000}`;
    state.id = id;
    console.log("state", state);
    setArtistData([...ArtistData, state]);

    alert('Do you want to submit !')
  };

  const changeValue = (inputValue: string) => {
    dispatch({ type: "setArtistName", payload: { ArtistName: inputValue } });
  };

  const changeValue2 = (inputValue: string) => {
    dispatch({ type: "setArtistDOB", payload: { DOB: inputValue } });
  };

  const changeValue3 = (inputValue: string) => {
   dispatch({ type: "setArtistEmail", payload: { Email: inputValue } });
 };

 const changeValue4 = (inputValue: string) => {
   dispatch({ type: "setArtistMobile", payload: { Mobile: inputValue } });
 };

 const changeValue5 = (inputValue: string) => {
   dispatch({ type: "setArtistAddress", payload: { Address: inputValue } });
 };

 const changeValue6 = (inputValue: string) => {
   dispatch({ type: "setArtistGender", payload: { Gender: inputValue } });
 };

 const changeValue7 = (inputValue: string) => {
   dispatch({ type: "setArtistCheck", payload: { CheckBox: inputValue } });
 };

  return (
    
    <div className={styless['divStyle']}>
      <br/><br/>
      <h1 style={{ textAlign: "center", color:'#011c01', marginTop: '-22px',
  lineHeight: '77px',textDecoration:'underline' }}> Art Gallery Registration Form </h1>
      
      <InputCompo
        inputType="text"
        inputValue={state.ArtistName}
        placeHolder="Name"
        inputOnChange={changeValue}
      />
      <InputCompo
        inputType="date"
        inputValue={state.DOB}
        placeHolder="Date of Birth"
        inputOnChange={changeValue2}
      />
       <span className={styless['heading']}> Gender :</span>
       {genderArr.map((values)=>{
         return  <RadioCompo 
         name="Gender"
         value={values}
         setRadio={changeValue6}
         />
      })}

      <InputCompo
        inputType="email"
        inputValue={state.Email}
        placeHolder="Email"
        inputOnChange={changeValue3}
      />

      <InputCompo
        inputType="number"
        inputValue={state.Mobile}
        placeHolder="Mobile Number"
        inputOnChange={changeValue4}
      />

     <InputCompo
        inputType="text"
        inputValue={state.Address}
        placeHolder="Address"
        inputOnChange={changeValue5}
      />
        
        
       <span  className={styless['heading']}> Media :</span>
        <br/>
       {CheckArr.map((value1)=>{
      return <CheckCompo  name ='Media' value ={value1} setCheck={changeValue7} />
       })}

      <br/>
     <div style={{textAlign:"center"}}>
    <Button   variant="primary" onClick={submitform}> Submit </Button>
    </div>
    <br/><br/>
      
    </div>
  );
};

export default ArtistCompo;
