import axios from 'axios';

export default function getData() {
    return  function (dispatch) {
        return axios
            .get(`https://s3-sa-east-1.amazonaws.com/config.instacarro.com/recruitment/auctions.json`)
            .then((response) => {
                dispatch({ type: "GET_DATA", payload: response.data })
            })

    };
}