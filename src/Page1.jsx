import Table from "./Tabble";
import NavigationBar from "./NavigationBar";
import Page1Text from "./Page1Text";
import "./Page1.css";
import { useEffect, useState } from "react";
export default function Page1() {
    let [data,getdata]=useState({});
    let [showdata,setshow]=useState(false);
  let getInfo = async () => {
    let response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=tether,bitcoin,ethereum,gate,solana,bnb,dogecoin,cardano,tronstellar,litecoin,toncoin,pepe,ripple&vs_currencies=usd"
    );
    let jsonresponese = await response.json();
    
    console.log(jsonresponese);
    getdata(jsonresponese);
    setshow(true);
  };

  useEffect(()=>{
    if (Object.keys(data).length > 0) {
      localStorage.setItem("cryptodata", JSON.stringify(data));//stringify: object ne string ma convert kare
    }
    },[data])
  
  return (
    <>
      <NavigationBar />
      <Page1Text />
      <button onClick={getInfo} className="bg">
        Get Data
      </button>
     {showdata && <Table content={data} />}
    </>
  );
}
