import { setImages } from "../../helpers/setImages"
import { Items } from "./Items";

export const Featured = ({ name, init_date, end_date, prediction, image, classListGrid }) => {

    const img = image.split('.');
    const zodiacImage = setImages(img[0]);
    const colorTitle = '#FFC107';

    return (
        <div className="columnList">
            <div className="card border-warning">
                <Items name={name} init_date={init_date} end_date={end_date} prediction={prediction} zodiacImage={zodiacImage} color={colorTitle} />
            </div>
        </div>
    )
}
