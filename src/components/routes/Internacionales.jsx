import React, { Component } from 'react';

class Internacionales extends Component {
  constructor() {
    super();

    this.state = {
      news: []
    };
  }

  componentDidMount() {
    fetch('https://api.canillitapp.com/news/category/2')
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

export default Internacionales;
