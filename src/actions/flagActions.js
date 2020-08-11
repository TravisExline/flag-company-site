export const ADD_FLAG = "ADD_FLAG"
export const FETCH_FLAG = "FETCH_FLAG"
export const SET_FLAGS= "SET_FLAGS"

export const addFlag = flag => {
    return {type: ADD_FLAG, flag}
}

export const setFlags = flags => {
    return {type: SET_FLAGS, flags}
}

export const fetchFlags = () => {
    return dispatch => 
        fetch("http://localhost3001/flags", {
            headers : {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            }
        })
        .then(res => {res.json()})
        .then(data => {
            dispatch(setFlags(data))
        })
}