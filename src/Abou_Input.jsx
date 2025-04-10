import { useEffect, useState } from "react"
import style from "./About_Input.module.css"
import { Investmet } from "./Calculate_Safe_Investment";
export default function About_Input(){
    let [future_value,setfuture_value]=useState(0);

    useEffect(() => {
        fetch("/Prediction/route?investment=2000&duration=60")
          .then(res => res.json())
          .then(data => {
            setfuture_value(data);
            console.log(data);
          })
          .catch(error => console.error("Error fetching prediction:", error));
    }, []);
    
    let [risk,setrisk]=useState("");
    let eventhandle=(event)=>{
        setrisk(event.target.value);
        console.log(event.target.value);
    }

    const [salary,setsalary]=useState();

    let handlesalary=(event)=>{
         setsalary(event.target.value);
         console.log(event.target.value);
    }
    let Safe_Investment=Investmet(salary,risk);
         
    
    let data1=localStorage.getItem("cryptodata");
    let data=JSON.parse(data1);// string ne object ne ma convert kare
    console.log(data);
   
    let [currency,setcurrency]=useState("bitcoin");
    let [check,setcheck]=useState(false);
    let no_of_coin;
    let handlecurrency=(event)=>{
         setcurrency(event.target.value);
        console.log(event.target.value);
        console.log(" Safe Investment is"+Safe_Investment);
    }
    let handledata=()=>{
     setcheck(true);
    }
   

    

    return (<>
        <h1 className={style.intro}>Manage Your Finances, Master Your Future.</h1>
        <p  className={style.intro2}>"Find out how much you can safely invest based on your financial comfort and risk preference."</p>
      <div>
      <label htmlFor="" className={style.Income}> Enter Your Monthly Income:
       <input type="number" value={salary} onChange={handlesalary} /> 
       </label>
      </div>

       <div>
       <label htmlFor="" className={style.Risk_Tolarance}>Select Your Risk Tolerance:
        <select name="risklevel" id="risklevel" value={risk} onChange={eventhandle}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            </select> 
       </label>

      <div>
      <label htmlFor="" className={style.Choose_bitcoin}>Choose Currency:
        <select name="" id="" value={currency} onChange={handlecurrency}>
            <option value="bitcoin">Bitcoin</option>
            <option value="cardano">Cardano</option>
            <option value="dogecoin">Dogecoin</option>
            <option value="ethereum">Ethereum</option>
            <option value="gate">Gate</option>
            <option value="litecoin">Litecoin</option>
            <option value="pepe">Pepe</option>
            <option value="ripple">Ripple</option>
            <option value="solana">Solana</option>
            <option value="tether">Tether</option>
            </select> 
       </label>
      </div>

      <button onClick={handledata}>Analysis</button>

      {
        check && <div>  <div><h2>Safe Investment is: {Safe_Investment}</h2> </div>
                  <div> <h2>No of Coins: {Safe_Investment/(data[currency].usd)} </h2> </div> </div>
      }
       </div>

       
    </>)
}