import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class Header extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item
          as={Link}
          to='/'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}>
          Home
        </Menu.Item>
        <Menu.Item
          as={Link}
          to='/tecnologia'
          name='tecnologia'
          active={activeItem === 'tecnologia'}
          onClick={this.handleItemClick}>
          Tecnología
        </Menu.Item>
        <Menu.Item
          as={Link}
          to='/politica'
          name='politica'
          active={activeItem === 'politica'}
          onClick={this.handleItemClick}>
          Política
        </Menu.Item>
        <Menu.Item
          as={Link}
          to='/deportes'
          name='deportes'
          active={activeItem === 'deportes'}
          onClick={this.handleItemClick}>
          Deportes
        </Menu.Item>
        <Menu.Item
          as={Link}
          to='/diseno'
          name='diseno'
          active={activeItem === 'diseno'}
          onClick={this.handleItemClick}>
          Diseño
        </Menu.Item>
        <Menu.Item
          as={Link}
          to='/internacionales'
          name='internacionales'
          active={activeItem === 'internacionales'}
          onClick={this.handleItemClick}>
          Internacionales
        </Menu.Item>
        <Menu.Menu position='right'>
          <div className='ui right aligned category search item'>
            <div className='ui transparent icon input'>
              <input className='prompt' type='text' placeholder='Buscar noticias...' />
              <i className='search link icon' />
            </div>
            <div className='results' />
          </div>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Header;
