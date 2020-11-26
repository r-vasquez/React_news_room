import React, { Component } from 'react';
import {
  Card,
  Container,
  Divider,
  Header,
  Icon,
  Button,
  Dimmer,
  Loader,
  Message
} from 'semantic-ui-react';

class Content extends Component {
  componentDidMount() {
    this.props.onGet(this.props.category);
    this.props.setActiveTab(this.props.tabName);
  }

  render() {
    const { news, hasError, isLoading, title, subtitle, iconName } = this.props;

    if (hasError) {
      return (
        <Message negative icon>
          <Icon name='warning' />
          <Message.Content>
            <Message.Header>Error al cargar las noticias</Message.Header>
            Por favor recarga la página o ponte en contacto con el administrador de la
            página
          </Message.Content>
        </Message>
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
            <Icon name={iconName} />
            {title}
            <Header.Subheader>{subtitle}</Header.Subheader>
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

export default Content;
