import { ListGridItems } from './ListGridItems';
import { useFetchData } from '../../hooks/useFetchData';
import { Featured } from './Featured';
import { featuredItem } from '../../helpers/featuredItem';
import { orderItems } from '../../helpers/orderItems';
import PropTypes from 'prop-types';
import { Error } from '../utils/Error';

export const ListGrid = ( { classListGrid, orderBy, inputSearch } ) => {
    const { data } = useFetchData(inputSearch);
    const dataOrder = orderItems( data, orderBy );
    const { newData, featured } = featuredItem( dataOrder );
    
    return (
        <div>            
            <div className="row">
                {
                    featured.map( items => (
                        <Featured key={ items.id }
                                { ...items }
                        />
                    ))
                }
                {
                    newData.map( items => (
                        <ListGridItems 
                            key={ items.id }
                            { ...items }
                            classListGrid={ classListGrid }
                        />
                    ))
                }
                {
                    (newData.length === 0 && featured.length === 0) && <Error />
                }
            </div>          
        </div>
    )
}

ListGrid.propTypes = {
    classListGrid: PropTypes.string,
}

