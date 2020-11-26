import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setActiveItem, getNewsByWord } from '../redux/actions';

class Header extends Component {
  state = { word: '' };
  handleChange = e => this.setState({ word: e.target.value });
  handleClick = () => {
    this.props.searchNews(this.state.word);
    this.setState({ word: '' });
  };
  render() {
    const { activeItem } = this.props;

    return (
      <Menu stackable>
        <Menu.Item
          as={Link}
          to='/'
          name='home'
          active={activeItem === 'home'}
          onClick={this.props.setActive}>
          Home
        </Menu.Item>
        <Menu.Item
          as={Link}
          to='/tecnologia'
          name='tecnologia'
          active={activeItem === 'tecnologia'}
          onClick={this.props.setActive}>
          Tecnología
        </Menu.Item>
        <Menu.Item
          as={Link}
          to='/politica'
          name='politica'
          active={activeItem === 'politica'}
          onClick={this.props.setActive}>
          Política
        </Menu.Item>
        <Menu.Item
          as={Link}
          to='/deportes'
          name='deportes'
          active={activeItem === 'deportes'}
          onClick={this.props.setActive}>
          Deportes
        </Menu.Item>
        <Menu.Item
          as={Link}
          to='/diseno'
          name='diseno'
          active={activeItem === 'diseno'}
          onClick={this.props.setActive}>
          Diseño
        </Menu.Item>
        <Menu.Item
          as={Link}
          to='/internacionales'
          name='internacionales'
          active={activeItem === 'internacionales'}
          onClick={this.props.setActive}>
          Internacionales
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input
              value={this.state.word}
              onChange={this.handleChange}
              onKeyPress={e => e.key === 'Enter' && this.handleClick()}
              action={{
                icon: 'search',
                onClick: () => this.handleClick()
              }}
              placeholder='Buscar Noticias...'
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeItem: state.activeItem
  };
};

const mapDispatchToProps = dispatch => ({
  setActive: (e, { name }) => dispatch(setActiveItem(name)),
  searchNews: word => dispatch(getNewsByWord(word))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
