
import axios from "../../axios"

export function setData(name, value) {
    console.log("fetched success");
    return {
        type: 'SET_DATA',
        payload: { [name]: value },
    }
}

export const listAllBooks = (name, sortBy, race, gender, page) => (dispatch) => {
    dispatch({ type: 'SET_DATA', payload: {  books_loader: true } })
    axios.get(`/character?limit=5&name=${name}&sort=name:${sortBy}&race=${race}&gender=${gender}&page=${page}`)
        .then(res => {
            if (res.data) {
                dispatch({
                    type: 'SUCCESS_DATA', payload: {
                        books_loader: false,
                        books_data: res.data ? res.data : [],
                    }
                })
            } else {
                dispatch({ type: 'REQUEST_FAILED', payload: { books_loader: false } });
            }
        })
        .catch(err => {
            dispatch({ type: 'REQUEST_FAILED', payload: { books_loader: false } });
        })
}

export const viewCharacterDetails = (id) => (dispatch) => {
    dispatch({ type: 'SET_DATA', payload: {  books_loader: true } })
    axios.get(`/character/${id}`)
        .then(res => {
            if (res.data) {
                dispatch({
                    type: 'SUCCESS_DATA', payload: {
                        books_loader: false,
                        character_details: res.data ? res.data : [],
                    }
                })
            } else {
                dispatch({ type: 'REQUEST_FAILED', payload: { books_loader: false } });
            }
        })
        .catch(err => {
            dispatch({ type: 'REQUEST_FAILED', payload: { books_loader: false } });
        })
}