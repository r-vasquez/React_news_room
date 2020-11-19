import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      news: []
    };
  }

  componentDidMount() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();

    fetch(`https://api.canillitapp.com/latest/${year}-${month}-${day}?page=1`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(response => {
        this.setState({
          news: response.slice(0, 10)
        });
      });
  }

  render() {
    return (
      <ol>
        {this.state.news.map(news => (
          <li key={news.news_id}>{news.title}</li>
        ))}
      </ol>
    );
  }
}

export default Home;
