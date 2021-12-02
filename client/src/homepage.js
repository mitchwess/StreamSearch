import React from 'react';
import './App.css';
import Title from './page_components/title.js';

class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state=this.state = {
        netflixCheckBox: false,
        huluCheckBox: false,
        disneyCheckBox: false,
        amazonCheckBox: false
    }
  }

  callAPI(){
    fetch("http://localhost:9000/testdb")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount(){
    this.callAPI();
  }

  send_checkbox_data(checkboxid){
    var chk = document.getElementById(checkboxid).checked;
    if(chk === true){
      console.log("true");
      return true;
    }
    else{
      console.log("false");
      return false;
    }
  }

    /////////////// checkbox handlers /////////////////////////////
    netflix_chageHandler = e => {
    if(document.getElementById("netflix_checkbox").checked) this.setState({netflixCheckBox: true});
    else this.setState({netflixCheckBox: false});
    }

    hulu_changeHandler = e => {
    if(document.getElementById("hulu_checkbox").checked) this.setState({huluCheckBox: true});
    else this.setState({huluCheckBox: false});
    }

    amazon_changeHandler = e => {
    if(document.getElementById("amazon_checkbox").checked) this.setState({amazonCheckBox: true});
    else this.setState({amazonCheckBox: false});
    }

    disney_changeHandler = e => {
    if(document.getElementById("dis_checkbox").checked) this.setState({disneyCheckBox: true});
    else this.setState({disneyCheckBox: false})
    }

    ///////////////////////////////////////////////////////////////////

    onCliclHandler = e => {
        console.log(this.state);
      //   axios
      //     .post('http://localhost:9000/testAPI', this.state)
      //     .then(response => {
      //         console.log(response);
      //     })
      //     .catch(error => {
      //         console.log(error);
      //     })
      }

  render(){
    const { netflixCheckBox } = this.state  
    return (
      <div className="App">
        <header className="App-header">
        <Title />
        </header>
        <div className = "App-body">
          <body>
          <p>Welcome to StreamSearch</p>
          <form>
              <input 
                  type="checkbox" 
                  id="netflix_checkbox" 
                  name="netflixCheckBox" 
                  value={netflixCheckBox} 
                  onChange={this.netflix_chageHandler}>
              </input>
            <label className="App-check" for="netflix_checkbox">Netflix</label>
  
            <input 
              type="checkbox" 
              id="hulu_checkbox" 
              name="huluCheckBox"
              onChange={this.hulu_changeHandler}>
            </input>
            <label className="App-check" for="hulu_checkbox">Hulu</label>
  
            <input 
              type="checkbox" 
              id="amazon_checkbox" 
              name="amazonCheckBox"
              onChange={this.amazon_changeHandler}>
              
            </input>
            <label className="App-check" for="amazon_checkbox">Amazon Prime</label>
  
            <input 
              type="checkbox" 
              id="dis_checkbox" 
              name="disneyCheckBox"
              onChange={this.disney_changeHandler}>
            </input>
            <label for="dis_checkbox">Disney+</label>
           
          </form>
          <input type="submit" onClick={() => this.onCliclHandler()}></input>
  
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

export default HomePage;
