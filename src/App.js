// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

const products = [
  { name: 'Photoshop', price: '$90.99' },
  { name: 'Illustrator', price: '$60.99' },
  { name: 'PDF Reader', price: '$6.99' },
  {name: 'Premeir Pro', price: '99.99'}
];
const persons =[
  {name: 'Faja Rabby', age: '20'},
  {name: 'Anando', age: '26'},
  {name: 'Khusi', age: '30'}
]

const App = () => {
  const productMap = products.map(pd => <Product product={pd} />);
  const personMap = persons.map(ps => <Person person={ps} />);

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        {productMap}
        {personMap}
      </header>
    </div>
  );
}

const ProductStyle = {
  border: '1px solid gray',
  borderRadius: '5px',
  marginBottom: '10px',
  backgroundColor: 'lightgray',
  // height: '200px',
  width: '200px',
  color: 'black',
  float: 'left',
}

const Product = (props) => {
  // console.log(props);
  return (
    <div style={ProductStyle}>
      <h2>{props.product.name} </h2>
      <h1>{props.product.price}</h1>
      <button>Buy Now</button>
    </div>
  )
};

const Person = (props) => {
  return(
    <div style={ProductStyle}>
      <h3>Name: {props.person.name}</h3>
      <h5>Age: {props.person.age}</h5>
    </div>
  )
};

const Counter = () => { 
  const [count, setCount] = useState(10);         // state define
  const handleIncrease = () => setCount(count + 1);
  const handleDecrese = () => setCount(count - 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={handleDecrese}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

export default App;