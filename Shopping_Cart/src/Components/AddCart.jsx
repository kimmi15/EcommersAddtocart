import data from "./Data.json";
import { useState } from "react";
import cart from "./Images/assests/cart.jpg";
import "./Addcart.css";

const AddCart = () => {

  const [valueD, setvalue] =  useState(0);


  const Additem = async() => {
    setvalue(valueD + 1);
    try{
      await fetch('http://localhost:8080/product',{
        method:"Post",
        header:{"content-type":"Application/json"},
        body:valueD
      })
      
    }
    catch(err){
} 
  }

  const Removeitem = () => {
    if(valueD !== 0) 
    setvalue(valueD - 1);
  }

  return ( 
    <>
    <div className="headcart">
    <div className="value">{valueD}</div>
    <img src={cart} className="cart" />
    
    </div>
    
    <div>
      {
        data.map((item) => {
          return (
            <>
             <div className="pot">
             <img src={item.img} />
             <div>{item.name}</div>
             <div>Price Rs.{item.price}.00</div>
              <div value={item.available} style={{color: "red",fontWeight : "bold"}}
              > {item.available ? "In-Stock" : "Out-of-Stock"}</div>
             <div>{item.vendor}</div>
             <div>{item.category}</div>
             {item.available ?
             <>
              <button onClick={Additem}> + </button>
              <button onClick={Removeitem}> - </button>
             </>
              : 
              null
              }
             
             </div> <br/><br/>
            </>
          )
        })
      }
    </div>
    
    </>
   );
}
 
export default AddCart;