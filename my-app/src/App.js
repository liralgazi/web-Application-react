import './App.css';
import Product from "./components/Product.js";


const items = [
    {id:"1", product: "apple", price:"30" ,image:"https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?b=1&s=170667a&w=0&k=20&c=aAfiibS9LDxSzOmUvlL1vVIqq7unLny6C6uCnnEh59g=" }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="productRow"></div>
          {
              items.map(item=><Product key={item.id} product={item.product}
                                       price={item.price}
                                       image={item.image}/>)
          }
      </header>
    </div>
  );
}

export default App;
