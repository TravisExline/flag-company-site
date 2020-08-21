export const ADD_FLAG = "ADD_FLAG"
export const FETCH_FLAG = "FETCH_FLAG"
export const SET_FLAGS= "SET_FLAGS"
export const CREATE_FLAG = "CREATE_FLAG"

export const addFlag = flag => {
    return {type: ADD_FLAG, flag}
}

export const setFlags = flags => {
    return {type: SET_FLAGS, flags}
}

export const fetchFlags = () => {
    return dispatch => 
    fetch("http://localhost:3001/flags")
    .then(res => res.json())
    .then(data => {
        dispatch(setFlags(data))
    })
}

export const createFlag = flag => {
    return dispatch => 
        fetch("http://localhost:3001/flags", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({flag})
        })
        .then(res => res.json())
        .then(flag => {
            dispatch(addFlag(flag))
        })
}