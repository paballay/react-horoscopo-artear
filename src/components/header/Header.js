import { GridList } from "./GridList"
import { InputSearch } from "./InputSearch"
import { OrderBy } from "./OrderBy"

export const Header = ( { handleList, handleGrid, handleOrderByDate, handleOrderByAlphabet, setInputSearch } ) => {
    
    return (
        <>
            <h1> Horóscopo </h1>
            <div className="row">
                <div className="col-md-4 p-0">
                    <GridList handleList={ handleList } handleGrid={ handleGrid }/>
                </div>
                <div className="col-md-4">
                    <OrderBy handleOrderByDate={ handleOrderByDate } handleOrderByAlphabet={ handleOrderByAlphabet }/>
                </div>
                <div className="col-md-4"> 
                    <InputSearch setInputSearch={ setInputSearch }/>                    
                </div>
            </div>
        </>
    )
}
