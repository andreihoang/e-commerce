import { useState, useEffect, createContext, useReducer } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../firebase/fiirebase.utils";


export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload.user,
            }
    }
}

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})


const INITIAL_STATE = {
    currentUser: null
}


export const UserProvider = ({children}) => {
    
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE)

    const setCurrentUser = (user) => {
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: {user: user}})
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        })
        return unsubcribe;
    }, [])

    const value = {currentUser, setCurrentUser};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}