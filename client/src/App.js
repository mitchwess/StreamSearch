import React from 'react';
import './App.css';
import Title from './page_components/title.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }

  callAPI(){
    fetch("http://localhost:9000/testdb")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount(){
    this.callAPI();
  }


render(){
  return (
    <div className="App">
      <header className="App-header">
      <Title />
      </header>
      <div className = "App-body">
        <body>
        <p>Select a Movie Genre You Would Like to Explore</p>
        <ul>
          <li><a className="App-drop" href="/">Genres</a>
            <ul>
              <li><a href="/">Action</a></li>
              <li><a href="/">Adventure</a></li>
              <li><a href="/">Comedy</a></li>
            </ul>
          </li>
        </ul>
        </body>
      </div>
  {<p>{this.state.apiResponse}</p>
  }
    </div>
  );
}

}

export default App;
