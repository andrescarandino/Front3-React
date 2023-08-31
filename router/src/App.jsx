
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useParams,
  useNavigate
} from "react-router-dom";

const products= [
  {id:1, name:"Producto 1", description:"Descripción del producto 1"},
  {id:2, name:"Producto 2", description:"Descripción del producto 2"},
  {id:3, name:"Producto 3", description:"Descripción del producto 3"},
  {id:4, name:"Producto 4", description:"Descripción del producto 4"},
  {id:5, name:"Producto 5", description:"Descripción del producto 5"},
];

//Listar productos

function ProductList(){
  return(
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((product)=>(
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

//Detalle de cada producto

function ProductDetail(){
  const {productId} =useParams();
  const navigate=useNavigate();

  const productIndex= products.findIndex((product)=> product.id==parseInt(productId))

  if(productIndex === -1){
    return <div>Producto no encontrado</div>
  }

  const handleNextProduct = () => {
    const nextProductIndex = (productIndex + 1) % products.length;
    navigate(`/products/${products[nextProductIndex].id}`);
  };

  const handlePrevProduct = () => {
    const prevProductIndex =
      (productIndex - 1 + products.length) % products.length;
    navigate(`/products/${products[prevProductIndex].id}`);
  };

  const product= products[productIndex];

  return(
    <div>
        <h2>Detalle del producto</h2>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <button onClick={handlePrevProduct}>Anterior</button>
        <button onClick={handleNextProduct}>Siguiente</button>
    </div>    
  );
}

function App(){
  return(
    <Router>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/products">Productos</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<h2>Página de Inicio</h2>}></Route>
        <Route path='/products' element={<ProductList/>}></Route>
        <Route path='/products/:productId' element={<ProductDetail/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;



