import { useEffect, useState } from "react"
import { getData } from '../helpers/getData';

export const useFetchData = (inputSearch) => {

    const [state, setState] = useState({
        data: [],
        featured: {}
    });
    
    useEffect(() => {
        getData(inputSearch)
            .then( items => {
                setState({
                    data: items,
                    featured: {},
                });
            })
    }, [inputSearch]);

    return state;

}
