import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Title from './page_components/title.js';

var url = "http://localhost:9000/checkboxdata";


class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state=this.state = {
        netflixCheckBox: false,
        huluCheckBox: false,
        amazonCheckBox: false,
        genreCheckbox: false,
        titleCheckbox: false,
        castCheckBox: false,
        search: ""
    }
  }

  callAPI(){
     fetch(url)
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

    title_chageHandler = e => {
      if(document.getElementById("title_checkBox").checked) this.setState({titleCheckbox: true});
      else this.setState({titleCheckbox: false})
    }

    genre_chageHandler = e => {
      if(document.getElementById("genre_checkBox").checked) this.setState({genreCheckbox: true});
    else this.setState({genreCheckbox: false});
    }

    cast_chageHandler = e => {
      if(document.getElementById("cast_checkBox").checked) this.setState({castCheckBox: true});
      else this.setState({castCheckBox: false})
    }

    searchbarChangeHandler = e => {
      this.setState({ [e.target.name]: e.target.value})
    }


    ///////////////////////////////////////////////////////////////////

    get_data_back = e => {
      var options = {
        method: "GET",
        //body: JSON.stringify(this.state)
      };
      fetch(url,options);
    }

    onCliclHandler = e => { //sends checkbox data to backend
        console.log(this.state);
        console.log(JSON.stringify(this.state));
        var options = {
          method: 'POST',
          body: JSON.stringify(this.state),
          headers:{
            'checkbox-data': JSON.stringify(this.state)
          }
        };
        fetch(url, options);
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
                  id="title_checkBox" 
                  name="titleCheckbox"
                  onChange={this.title_chageHandler}>
              </input>
            <label className="App-check" for="title_checkBox">Title</label>
          <input 
                  type="checkbox" 
                  id="genre_checkBox" 
                  name="genreCheckbox" 
                  onChange={this.genre_chageHandler}>
              </input>
            <label className="App-check" for="genre_checkBox">Genre</label>
            <input 
                  type="checkbox" 
                  id="cast_checkBox" 
                  name="castCheckBox"
                  onChange={this.cast_chageHandler}>
              </input>
            <label className="App-check" for="cast_checkBox">Cast</label>
            <br></br>
              <input 
                  type="text"
                  id="searchbar"
                  name="search"
                  onChange={this.searchbarChangeHandler}>
              </input>
              <br></br>
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
  
           
          </form>
          <input type="submit" onClick={() => this.onCliclHandler()}></input>
          <br></br>
          </body>
          
        </div>
    {<p>{//this.state.apiResponse
    }</p>
    }
      </div>
    );
  }

}

export default HomePage;
