export const orderItems = ( data, { date } ) => {
    if(date === false){
        data.sort((a, b) => { // ORDENAMIENTO POR ABECEDARIO
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();

            if(nameA < nameB) {
                return -1;
            }

            if(nameA > nameB) {
                return 1;
            }

            return 0;
        }); 
    }else{     
        data.sort((a, b) => { // ORDENAMIENTO POR FECHA
            let initDateA = a.init_date.split('-');
            let initDateB = b.init_date.split('-');
            
            return initDateA[1] - initDateB[1];
        });       
    }
    
    return data;
}
