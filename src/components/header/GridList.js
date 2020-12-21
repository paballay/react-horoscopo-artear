export const GridList = ( { handleList, handleGrid } ) => {

    return (
        <div className="btn-group col-md-2" role="group">
            <button type="button" className="btn btn-outline-primary m-2" onClick={ handleGrid } >Grilla</button>
            <button type="button" className="btn btn-outline-primary m-2" onClick={ handleList } >Lista</button>
        </div> 
    )
}
