import React from "react";
import axios from "axios";
import './App.css';

var url = ''
class App extends React.Component {
  state = {
    name: ""
  };

  onTitleChange = e => {
    this.setState({
      name: e.target.value
    });
    url = "/api/HttpTrigger4?name=" + e.target.value;
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .get(url)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  

  render() {
    return (
      <div className="post1">
        <div className='heading'>Tutorial for connecting azure database and functions</div>
        <div className="title">Enter a name to add to database</div>
        <form className="post" onSubmit={this.handleSubmit}>
          <input className="input" type="text" 
            placeholder="Title" value={this.state.title}
            onChange={this.onTitleChange} required
          />
          <button type="submit">Create Post</button>
        </form>
      </div>
    );
  }
}

export default App;