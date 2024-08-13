// import logo from './logo.svg';
import { useEffect, useState } from 'react';
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
        {/* <Counter></Counter>
        {productMap}
        {personMap} */}
        {/* <Users></Users> */}
        {/* <Posts></Posts> */}
        <Todos></Todos>
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
};

const Users = () => {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
    setUsers(data)
    });
  }, [])
 
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      {console.log(users)}
      <ul>
        {users.map(user => <li>{user.username}</li>)}
      </ul>
    </div>
  )
}

const Posts = (props) =>{
  let [post, setPost] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      setPost(data)
    })
  }, []);

  return(
    <div style={{width: '500px', border: '1px solid #ccc', borderRadius: '5px', }}>
      <h2>Dynamic Post: {post.length}</h2>
      {console.log(post)}
      <ul>
        {
          post.map(pt => <li>{pt.body}</li> )
        }
      </ul>
    </div>
  )
};


const Todos = (props) =>{
  let [todos, setTodos] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(data => setTodos(data))
  }, []);

  return(
    <div>
      <h2>Dynammic Todos: {todos.length}</h2>
      <ul>
        {
          todos.map(td => <li>{td.title}</li>)
        }
      </ul>
    </div>
  )
}

export default App;