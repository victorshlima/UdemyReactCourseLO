import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {


  //THIS is a class FIELD, this remove the necessity of use constructors  
  state = {
    name: 'Vic',
    counter: 0,
    posts: [
      {
        id: 1,
        title: "Titulo 1",
        body: "Corpo 3"
      },
      {
        id: 2,
        title: "Titulo 2",
        body: "Corpo 3"
      },
      {
        id: 3,
        title: "Titulo 3",
        body: "Corpo 3"
      }

    ]
  }

  // class fields made me depreciated 
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     name: 'Victor',
  //     counter: 0
  //   }
  //   // this.handlePClick = this.handlePClick.bind(this)
  // }

    handlePClick = () => { // OLD way to GET the variable
       const {name} = this.state;  //name -  only works with bind in constructo, 
      console.log(`<p> clicado`)  //but using a class field and arow functuions this is not necessy anymore
      this.setState({name : 'Junior'})
    }

    handleAClick = (event) => {
      event.preventDefault();
      
      const {counter} = this.state;
      this.setState({counter: counter +1})
   }

  render() {

    const nome  = this.state.nome
    const { name, counter, posts } = this.state;

    return (
      <div className="App">       
      {posts.map(post => (   
        <>
          <h1 key={post.id}>{post.title}</h1>
          <p>{post.body}</p> 
          </>      
        ))}
      </div>
    );
  }
}

export default App;
