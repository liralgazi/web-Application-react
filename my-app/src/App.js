import { useState } from 'react';
import './App.css';
import Product from "./components/Product.js";


const items = [
    {id:"1",image2: "https://thumbs.dreamstime.com/b/red-apple-half-red-apple-16354511.jpg",desc: "the best red apple", title: "Red Apple", price:"30$ per kg" ,image:"https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?b=1&s=170667a&w=0&k=20&c=aAfiibS9LDxSzOmUvlL1vVIqq7unLny6C6uCnnEh59g=",},
    {id:"2",image2: "https://thumbs.dreamstime.com/b/fresh-green-apple-green-leaf-cut-half-isolated-white-background-clipping-path-fresh-green-apple-green-leaf-175907435.jpg",desc: "the best green apple", title: "Green Apple", price:"20$ per kg" ,image:"https://media.istockphoto.com/id/625682480/photo/green-apple.jpg?b=1&s=170667a&w=0&k=20&c=hN65bH-I8IEjkNVVmb6rTvxgDrwAbVBB5BTepU-a3-Y=",},
    {id:"3",image2: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/1200px-Banana-Single.jpg",desc: "the best banana", title: "Banana", price:"15$ per kg" ,image:"https://media.istockphoto.com/id/1291262112/photo/banana.jpg?b=1&s=170667a&w=0&k=20&c=pPSsFoR1CX7oHJrr-bZPSoFIBO8PPf4SQDg3IbF-wcg=",},
    {id:"4",store:"lala",image2: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg",desc: "the best orange", title: "Orange", price:"17$ per kg" ,image:"https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=",}

]

function App() {

  const [selected,setSelected]=useState(null);

  return (
    <div className="App">
      <header className="App-header">
          <div className="title">
            <div className="productRow">
            Products:
              {
                !selected ? (   items.map(item=><Product key={item.id} click={()=>setSelected(item)} product={item}
            />)):(<div><Product isSelect={true} key={selected.id} click={()=>setSelected(null)} product={selected}/></div>)
              }
            </div>
          </div>
      </header>
    </div>
         );
  }

export default App;
