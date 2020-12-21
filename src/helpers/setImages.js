import { acuario, aries, cancer, capricornio, escorpio, 
    geminis, leo, libra, piscis, sagitario, tauro, virgo } from "../imports/import";

export const setImages = (image) => {
    
    let zodiacImage;

    switch (image) {
        case 'acuario':
            zodiacImage = acuario;
            break;
        case 'aries':
            zodiacImage = aries;
            break;
        case 'cancer':
            zodiacImage = cancer;
            break;
        case 'capricornio':
            zodiacImage = capricornio;
            break;
        case 'escorpio':
            zodiacImage = escorpio;
            break;
        case 'geminis':
            zodiacImage = geminis;
            break;
        case 'leo':
            zodiacImage = leo;
            break;
        case 'libra':
            zodiacImage = libra;
            break;
        case 'piscis':
            zodiacImage = piscis;
            break;
        case 'sagitario':
            zodiacImage = sagitario;
            break;
        case 'tauro':
            zodiacImage = tauro;
            break;
        case 'virgo':
            zodiacImage = virgo;
            break;
    
        default:
            break;
    }

    return zodiacImage;
}

