import React from "react";

import { createContext , useState } from "react";

const MyContext = createContext();

function Contextfucn (props){

    const [cartitem, setcartitem] = useState([]);

    return(
 <MyContext.Provider value={ { cartitem , setcartitem } }>
      {props.children}
    </MyContext.Provider>
    )

}

export {Contextfucn , MyContext}