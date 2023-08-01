function Productos (props){
    return (
        <div className="card-producto">
            
        <div className="div-img">
            <img src={props.imagen}></img>
        </div>
        <div className="div-text">

            <h4>{props.nombre}</h4>
            <p>Precio: $ {props.precio}</p>
        </div>
    </div>
    )
}
export default Productos