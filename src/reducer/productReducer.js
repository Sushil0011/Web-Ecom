const Productreducer=(state,action)=>{
switch(action.type){
    case "loading":
        return {
            ...state,
            isLoading:true
        }

        case "Api_error":
            return{
                ...state,
                isLoading:false,
                isError:true
            }

        case "set_api_Data":

        const featuredata=action.payload.filter((elem)=>{
// console.log(featuredata)
            return elem.featured===true;

        })

        return{
            ...state,
            isLoading:false,
            featurProducts:featuredata,
            products:action.payload,

        }


        case "isSingleLoading":
            return {
                ...state,
                isSingleLoading:true,

            }

            case "singleproduct":
                return{
                    ...state,

                    isSingleLoading:false,

                    singleProduct:action.payload,
                

                }

            
                case "singlepageerror":
    return{
        ...state,
        isSingleLoading:false,
        singlePageError:true
    }

        default:
            return{
                ...state,
                
            }
}
}

export default Productreducer