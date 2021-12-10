import axios from 'axios';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const FAILED = 'FAILED'
export const ADDSMURF = "ADDSMURF";

export const fetchStart = () => {
    return ({type: LOADING})
}
export const fetchSuccess = (smurfs) => {
    return ({type: SUCCESS, payload: smurfs})
}
export const fetchFailed = (err) => {
    return ({type: FAILED, payload: err})
}


export const fetchSmurfs = () => (dispatch) => {
    dispatch({type: LOADING})
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({type:SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type: FAILED, payload: err}));
};

export const addSmurf = (newSmurf) => {
    axios.post(`https://localhost:3333/smurfs`, newSmurf)
        .then(res => {
            console.log('post:', res);
        })
        .catch(res => {
            console.log('error:', res)
        })
    return ({type: ADDSMURF, payload: newSmurf})
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.