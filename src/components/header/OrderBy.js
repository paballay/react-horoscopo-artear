export const OrderBy = ({ handleOrderByDate, handleOrderByAlphabet }) => {
    return (
        <div className="row justify-content-start">
            <label className="col-md-4 m-3 p-0 text-end">Ordenar por: </label>
            <div className="col-md-7 p-0">
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-outline-primary m-2" onClick={handleOrderByDate} >Fecha</button>
                    <button type="button" className="btn btn-outline-primary m-2" onClick={handleOrderByAlphabet} >Nombre</button>
                </div>
            </div>

        </div>
    )
}
