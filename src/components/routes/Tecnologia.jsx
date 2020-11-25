import React, { Component } from 'react';
import { Card, Container, Divider, Header, Icon, Button, Dimmer, Loader } from 'semantic-ui-react';
import { getNewsByCategory } from '../../redux/actions';
import { connect } from 'react-redux';

class Tecnologia extends Component {
  componentDidMount() {
    this.props.onGet(3);
  }

  render() {
    const { news, hasError, isLoading } = this.props;

    if (hasError) {
      return (
        <div>
          <h6>Error al buscar las noticias.</h6>
        </div>
      );
    }

    if (isLoading) {
      return (
        <Container>
          <Dimmer active inverted>
            <Loader size='large'>Loading</Loader>
          </Dimmer>
        </Container>
      );
    }
    if (!isLoading) {
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
            <Header.Subheader>
              Enterate de lo que pasa en el mundo de la tecnología
            </Header.Subheader>
          </Header>
          <Divider section />

          <Card.Group centered stackable textAlign='center' itemsPerRow={3}>
            {news.map(news => (
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
}

const mapStateToProps = state => {
  return {
    news: state.news,
    hasError: state.loadingError,
    isLoading: state.loadingInProgress
  };
};

const mapDispatchToProps = dispatch => ({
  onGet: category => dispatch(getNewsByCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tecnologia);
