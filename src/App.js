import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {


  //THIS is a class FIELD, this remove the necessity of use constructors  
  state = {
    name: 'Vic',
    counter: 0
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

    const { name, counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <p onClick={this.handlePClick}>
          {name}
        </p>

          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Este é o link
          </a>
        </header>
      </div>
    );
  }
}

export default App;
