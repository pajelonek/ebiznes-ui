import {createContext, useState} from "react";

const SearchContext = createContext(false);

function SearchProvider(props){

    const [Search, setSearch] = useState(false);

    return(
        <SearchContext.Provider value={[Search,setSearch]}>
            {props.children}
        </SearchContext.Provider>
    );
}

export { SearchContext, SearchProvider };