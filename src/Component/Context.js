import reducer from './Reducer'

import React, { useContext, useEffect, useReducer } from "react";
const initialstate = {
    isloading: true,
    query: "CSS",
    nbPages: 50,
    page: 0,
    hits: [],
};


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    // const [state,setState]=useState(initialstate)
    const [state, dispatch] = useReducer(reducer, initialstate)
    let API = "http://hn.algolia.com/api/v1/search?";
    const fetchapidata = async (api) => {
        dispatch({ type: "SET_LOADING" })
        try {
            // let isloading = true;
            const res = await fetch(api);
            const data = await res.json();
            console.log(data);
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                },
            });
            // isloading = false; 

        }
        catch (error) {
            console.log("Error");
        }

    }
    const removepost = (ID) => {
        dispatch({ type: "REMOVE_POST", payload: ID });
    }
    const searchpost = (search) => {
        dispatch({
            type: "SEARCH_QUERY",
            sanket: search,
        });
    }
    const getNextPage=()=>{
        dispatch({
            type:"NEXT_PAGE",
        })
    }
    const getPrevPage=()=>{
        dispatch({
            type:"PREV_PAGE",
        })
    }
    useEffect(() => {
        fetchapidata(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query,state.page])
    return <AppContext.Provider value={{ ...state, removepost, searchpost,getPrevPage,getNextPage }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext };