import {createContext, useState} from "react";

const SearchContext = createContext();

function SearchProvider(props){

    const [Search, setSearch] = useState();

    return(
        <SearchContext.Provider value={[Search,setSearch]}>
            {props.children}
        </SearchContext.Provider>
    );
}

export { SearchContext, SearchProvider };