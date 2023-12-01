const Reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isloading: true,
            }
        case "GET_STORIES":
            return {
                ...state,
                isloading: false,
                hits: action.payload.hits,
                nbpages: action.payload.nbpages,
            };
        case "REMOVE_POST":
            return {
                ...state,
                hits: state.hits.filter(
                    (currelement) => currelement.objectID !== action.payload
                ),

            }
        case "SEARCH_QUERY":
            return {
                ...state,
                query:action.sanket,

            };
        case "NEXT_PAGE":
            let increment = state.page+1;
            if(increment  >= state.nbpages){
                increment = 0;
            }
            return {
                ...state,
                page:increment,
            }
        case "PREV_PAGE":
            let pagenum = state.page;
            if(pagenum <=0){
                pagenum =0;
            }
            else{
                pagenum = pagenum - 1;
            }
            return {
                ...state,
                page:pagenum,
            }    
    }
    return state;
}
export default Reducer