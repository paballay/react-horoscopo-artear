export const featuredItem = ( dataOrder ) => {

    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const year = new Date().getFullYear();

    const today = new Date(year, month, day);

    let featured = [];
    const array = [];

    for(let item of dataOrder) {
        let initDate = item.init_date.split('-');
        let endDate = item.end_date.split('-');

        let itemInitDate = new Date(year, initDate[1], initDate[0]);
        let itemEndDate = new Date(year, endDate[1], endDate[0]);

        if (today >= itemInitDate && today <= itemEndDate) {
            featured.push(item);
        }else{
            array.push(item)
        }
    }

    return {
        newData: array,
        featured
    };
}
