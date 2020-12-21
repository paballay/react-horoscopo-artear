import { useState } from "react";

export const InputSearch = ({ setInputSearch }) => {

    const [input, setInput] = useState('');

    const handleInput = ({ target: { value }}) => {
        setInput(value);

        if(value === '') setInputSearch('');
    }

    const submit = (e) =>{
        e.preventDefault();

        setInputSearch(input);
    }

    return (
        <form onSubmit={ submit } className="form-group has-warning">
            <input id="inputSearch" className="form-control form-control-warning m-2" 
                type="text" placeholder="Buscar Signo" name="signo" onChange={ handleInput } autoComplete="off"/>
        </form>
    )
}
