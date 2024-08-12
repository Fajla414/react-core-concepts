// import logo from './logo.svg';
import './App.css';

const App = () => {
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$6.99' },
    {name: 'Premeir Pro', price: '99.99'}
  ];

  const ProductMap = products.map(pd => <Product product={pd} />)

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        {ProductMap}
      </header>
    </div>
  );
}

const Product = (props) => {
  const ProductStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    marginBottom: '10px',
    backgroundColor: 'lightgray',
    // height: '200px',
    // width: '200px',
    color: 'black',
    float: 'left',
  }
  console.log(props);

  return (
    <div style={ProductStyle}>
      <h2>{props.product.name} </h2>
      <h1>{props.product.price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
