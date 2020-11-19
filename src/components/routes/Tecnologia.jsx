import React, { Component } from 'react';
import { Card, Container, Divider, Header, Icon, Button } from 'semantic-ui-react';

class Tecnologia extends Component {
  constructor() {
    super();

    this.state = {
      news: []
    };
  }

  componentDidMount() {
    fetch('https://api.canillitapp.com/news/category/3')
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
    const extraButton = link => (
      <Button animated as='a' href={link} target='_blank' rel='noreferrer'>
        <Button.Content visible>Ver más</Button.Content>
        <Button.Content hidden>
          <Icon name='arrow right' />
        </Button.Content>
      </Button>
    );

    return (
      <Container>
        <Divider hidden />
        <Header as='h2' icon textAlign='center'>
          <Icon name='computer' />
          Tecnología
          <Header.Subheader>Enterate de lo que pasa en el mundo de la tecnología</Header.Subheader>
        </Header>
        <Divider section />

        <Card.Group centered stackable textAlign='center' itemsPerRow={3}>
          {this.state.news.map(news => (
            <Card
              image={news.img_url}
              header={news.title}
              description={news.source_name}
              key={news.news_id}
              extra={extraButton(news.url)}
            />
          ))}
        </Card.Group>
      </Container>
    );
  }
}

export default Tecnologia;
