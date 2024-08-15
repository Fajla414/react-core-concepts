// // import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

// const products = [
//   { name: 'Photoshop', price: '$90.99' },
//   { name: 'Illustrator', price: '$60.99' },
//   { name: 'PDF Reader', price: '$6.99' },
//   {name: 'Premeir Pro', price: '99.99'}
// ];
// const persons =[
//   {name: 'Faja Rabby', age: '20'},
//   {name: 'Anando', age: '26'},
//   {name: 'Khusi', age: '30'}
// ]


const App = () => {
  //   const productMap = products.map(pd => <Product product={pd} />);
  //   const personMap = persons.map(ps => <Person person={ps} />);

  let [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        let sliceData = data.slice(0, 5);
        setUser(sliceData);
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        {/* <Counter></Counter>
        {productMap}
        {personMap} */}
        {/* <Users></Users> */}
        {/* <Posts></Posts> */}
        {/* <Todos></Todos> */}
        {/* <NewPost></NewPost> */}
        {/* <MovieCounter></MovieCounter> */}
        {/* {user.map(usr => <RandomUsers key={usr.id} name={usr.name} userName={usr.username} email={usr.email} />)} */}
        {user.map(usr => <RandomUsers key={usr.id} name={usr.name} userName={usr.username} email={usr.email} ></RandomUsers>)}
      </header>
    </div>
  );
}

const RandomUsers = (props) => {
  let divStyle = {
    border: '1px solid #ccc',
    margin: '10px',
    padding: '20px',
    borderRadius: '8px'
  }
  return (
    <div style={divStyle}>
      <h2>Name: {props.name}</h2>
      <h4>User Name: {props.userName}</h4>
      <h6>Email: {props.email}</h6>
    </div>
  )
}

// const Person = (props) =>{
//   return(
//     <div>
//       <h3>Name: {props.name}</h3>
//       <h5>Age: {props.age}</h5>
//     </div>
//   )
// }



// const MovieCounter = (props) => {
//   let [count, setCount] = useState(0);
//   const handleClick = () =>{
//     setCount(count + 1)
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>Add Movie</button>
//       <h2>Number of movies: {count}</h2>
//       <MovieDisplay movie={count}></MovieDisplay>
//       <MovieDisplay movie={count}></MovieDisplay>
//       <MovieDisplay movie={count +10}></MovieDisplay>
//       <MovieDisplay movie={count}></MovieDisplay>
//     </div>
//   )
// }

// const MovieDisplay = (props) =>{
//   return(
//     <div>
//       <h4>Movies I have acted: {props.movie}</h4>
//     </div>
//   )
// }

// const ProductStyle = {
//   border: '1px solid gray',
//   borderRadius: '5px',
//   marginBottom: '10px',
//   backgroundColor: 'lightgray',
//   // height: '200px',
//   width: '200px',
//   color: 'black',
//   float: 'left',
// }

// const Product = (props) => {
//   // console.log(props);
//   return (
//     <div style={ProductStyle}>
//       <h2>{props.product.name} </h2>
//       <h1>{props.product.price}</h1>
//       <button>Buy Now</button>
//     </div>
//   )
// };

// const Person = (props) => {
//   return(
//     <div style={ProductStyle}>
//       <h3>Name: {props.person.name}</h3>
//       <h5>Age: {props.person.age}</h5>
//     </div>
//   )
// };

// const Counter = () => { 
//   const [count, setCount] = useState(10);         // state define
//   const handleIncrease = () => setCount(count + 1);
//   const handleDecrese = () => setCount(count - 1);
//   return(
//     <div>
//       <h1>Count: {count}</h1>
//       <button onMouseMove={handleDecrese}>Decrease</button>
//       <button onClick={handleIncrease}>Increase</button>
//     </div>
//   )
// };

// const Users = () => {
//   let [users, setUsers] = useState([]);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//     setUsers(data)
//     });
//   }, [])

//   return (
//     <div>
//       <h3>Dynamic Users: {users.length}</h3>
//       {console.log(users)}
//       <ul>
//         {users.map(user => <li>{user.username}</li>)}
//       </ul>
//     </div>
//   )
// }

// const Posts = (props) =>{
//   let [post, setPost] = useState([]);
//   useEffect(() =>{
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => {
//       setPost(data)
//     })
//   }, []);

//   return(
//     <div style={{width: '500px', border: '1px solid #ccc', borderRadius: '5px', }}>
//       <h2>Dynamic Post: {post.length}</h2>
//       {console.log(post)}
//       <ul>
//         {
//           post.map(pt => <li>{pt.body}</li> )
//         }
//       </ul>
//     </div>
//   )
// };


// const Todos = (props) =>{
//   let [todos, setTodos] = useState([]);
//   useEffect(() =>{
//     fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(data => setTodos(data))
//   }, []);

//   return(
//     <div>
//       <h2>Dynammic Todos: {todos.length}</h2>
//       <ul>
//         {
//           todos.map(td => <li>{td.title}</li>)
//         }
//       </ul>
//     </div>
//   )
// }

// const NewPost = (props) => {
//   let [post, setPost] = useState([]);
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => setPost(data));

//   return (
//     <div>
//       <ul>
//         {
//           post.map(pst => <li>{pst.title}</li>)
//         }
//       </ul>
//     </div>
//   )
// }

export default App;