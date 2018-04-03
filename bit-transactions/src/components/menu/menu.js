import React from 'react';

import Item from './menu-item';

export default class Menu extends React.Component {
  render() {
    const menuItems = [
      {
        title: 'All transactions',
        link: '/'
      },
      {
        title: 'New transaction',
        link: '/add'
      }
    ];

    let items = menuItems.map((item, i) => {
      return <Item data={item} key={i}/>;
    });

    return (
      <div>
        <ul className="main-menu">
          {items}
          <a href="#" onClick={(e) => {
            e.preventDefault();
            localStorage.clear();
            location.reload();
          }}>
            <li>Logout</li>
          </a>
        </ul>
      </div>
    );
  }
}