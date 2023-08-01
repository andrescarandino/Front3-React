import Productos from './Productos.jsx';
function Principal () {
    return (
    <>
    <div>Soy principal</div>
    <div className='content-principal'>
        <Productos nombre="Botella" precio="250" imagen="https://falabella.scene7.com/is/image/Falabella/gsc_115611909_1193540_1?wid=800&hei=800&qlt=70" />
        <Productos nombre="Taza" precio="400" imagen="https://res.cloudinary.com/unitedprint-com-se/image/upload/f_auto,q_auto/v1/master/TextImageBlocks_1-Mugs_oikay3" />
        <Productos nombre="Mouse" precio="1500" imagen="https://m.media-amazon.com/images/I/51u4+7opF-S._AC_UF894,1000_QL80_.jpg" />
    </div></>
    )
}
export default Principal