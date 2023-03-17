import React, { useReducer } from "react";
import { createContext, useEffect } from "react";
import axios from "axios";
import reducer from '../reducer/productReducer'

export const AppContext = createContext();

const initialstate={
    isLoading:false,
    isError:false,
    featurProducts:[],
    products:[],
    isSingleLoading:false,
    singleProduct:{},
    singlePageError:false,
}


const mydata= {...initialstate}
// console.log(intitalstate.featurProducts)
// console.log(intitalstate.singleProduct)
// console.log(mydata)


const ApiData = "https://api.pujakaitem.com/api/products";



export const DataProvider = ({ children }) => {

    const [state,dispatch]=useReducer(reducer,initialstate)
// console.log(state)
        //First api call





        const getdata= async (api)=>{

            dispatch({type:"loading"}) 


            try{
            const res= await  axios.get(api)
            const productData=  await res.data
            // console.log(productData)
            dispatch({type:"set_api_Data",payload:productData})
        }


catch (error) {
    dispatch({type:"Api_error"})
}
        }


//Second api Call

const singleProductDataFunction= async(sigleapi)=>{
    dispatch({type:"isSingleLoading"})

try {
    const res = await axios.get(sigleapi)
    // console.log(res)
    const singleProduct= await res.data;
    console.log(singleProduct)

    dispatch({type:"singleproduct",payload:singleProduct})


} catch (error) {
    dispatch({type:"singlepageerror"})
}
}

    useEffect(() =>{
      getdata(ApiData)
    
    }, [])
    


  return <AppContext.Provider value={ {...state  ,singleProductDataFunction} }>{children}</AppContext.Provider>;
};
