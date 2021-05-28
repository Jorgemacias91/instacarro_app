const initialState = {
    dataCar: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_DATA":
            //Eu ordeno o array do menor para o maior tempo restante
            const arrayOrdenado = action.payload.sort((a, b) =>
                a.remainingTime > b.remainingTime
                    ? 1
                    : b.remainingTime > a.remainingTime
                    ? -1
                    : 0
            );
            return {
                dataCar: arrayOrdenado,
            };
        case "CONTADOR":
            return "mas";
        default:
            return state;
    }
}

export default rootReducer;