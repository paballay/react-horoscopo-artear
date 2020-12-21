export const getData = async (itemSearch = '') => {
    const auth = 'qazwsx';
    const url = 'http://localhost:3001/zodiac_signs';
    let resp;
    if(itemSearch !== ''){
        resp = await fetch(`${url}?name=${itemSearch}`, {
            headers: {
                'Authorization': auth,
            }
        });
    }else{
        resp = await fetch(url, {
            headers: {
                'Authorization': auth,
            }
        });
    }
    
    return await resp.json();
}
