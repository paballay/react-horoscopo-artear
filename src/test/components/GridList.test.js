import { shallow } from 'enzyme';
import { GridList } from '../../components/header/GridList';

describe('Probando componente <GridList />', () => {
    const handleList = () => {
        console.log('Boton Lista presionado');
    }

    const handleGrid = () => {
        console.log('Boton Grilla presionado');
    }
    
    let wrapper = shallow( <GridList handleList={ handleList } handleGrid={ handleGrid }/> );

    beforeEach(() => {
        wrapper = shallow( <GridList handleList={ handleList } handleGrid={ handleGrid }/> );
    })

    test('Renderizando del componente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Simulando boton Grilla', () => {
        wrapper.find('button').at(0).simulate('click');
    });

    test('Simulando boton Lista', () => {
        wrapper.find('button').at(1).simulate('click');
    });
})