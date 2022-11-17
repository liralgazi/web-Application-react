import './App.css';
import Product from "./components/Product.js";


const items = [
    {id:"1", product: "Red Apple", price:"30 per kg" ,image:"https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?b=1&s=170667a&w=0&k=20&c=aAfiibS9LDxSzOmUvlL1vVIqq7unLny6C6uCnnEh59g=",},
    {id:"2", product: "Green Apple", price:"20 per kg" ,image:"https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?b=1&s=170667a&w=0&k=20&c=aAfiibS9LDxSzOmUvlL1vVIqq7unLny6C6uCnnEh59g=",},
    {id:"3", product: "Banana", price:"15 per kg" ,image:"https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?b=1&s=170667a&w=0&k=20&c=aAfiibS9LDxSzOmUvlL1vVIqq7unLny6C6uCnnEh59g=",},
    {id:"4", product: "Orange", price:"17 per kg" ,image:"https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?b=1&s=170667a&w=0&k=20&c=aAfiibS9LDxSzOmUvlL1vVIqq7unLny6C6uCnnEh59g=",}

]

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="title">Vegetables:
        <div className="productRow"></div>
          {
              items.map(item=><Product key={item.id} product={item.product}
                                       price={item.price}
                                       image={item.image}/>)
          }
          </div>
      </header>
    </div>
  );
}

export default App;
