import Sbox1 from "./Own_components/Sbox1";

const Newapp=()=>{
    const data={
        name:"TollyWood",
        budject:"1000cr"
    }
    const data1={
        name:"BollyWood",
        budject:"1200cr"
    }
    const data2={
        name:"HollyWood",
        budject:"1800cr"
    }
  return(
    <div className="mainbox">
         <Sbox1 raw={data}/> 
         <Sbox1 raw={data1}/> 
         <Sbox1 raw={data2}/> 
     </div>
  )  
}
export default Newapp;