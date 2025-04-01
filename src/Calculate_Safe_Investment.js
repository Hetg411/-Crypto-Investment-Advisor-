function Investmet(salary,tolarance){
    if(tolarance=="low"){
        return (salary*0.5)
    }
    else if(tolarance==="medium"){
        return (salary*0.1)
    }else{
        return (salary*0.2)
    }
}
export  {Investmet};