const initialState = {
    dataCar : [],



}

function rootReducer(state = initialState, action) {

    switch (action.type) {


        case "GET_DATA":
            return {
                dataCar: action.payload,   
            }
        case "CONTADOR" :
            return "mas"
        default:
            return state
    }

}

export default rootReducer;