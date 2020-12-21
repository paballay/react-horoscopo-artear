import { setImages } from "../../helpers/setImages";
import { Items } from "./Items";

export const ListGridItems = ({ name, init_date, end_date, prediction, image, classListGrid }) => {

    const img = image.split('.');
    const zodiacImage = setImages(img[0]);
    
    return (
        <div className={classListGrid}>
            <div className="card bg-light">
                <Items name={ name } init_date={ init_date } end_date={ end_date } prediction={ prediction } zodiacImage={ zodiacImage }/>
            </div>
        </div>
    )
}