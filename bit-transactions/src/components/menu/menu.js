import React from 'react';

import Item from './menu-item';

export default class Menu extends React.Component {
   render() {
     const menuItems = [
       {
         title: 'Enter',
         link: '/'
       },
       {
         title: 'New transaction',
         link: '/add'
       },
       {
         title: 'All transactions',
         link: '/view-all'
       }
     ];
     
    let items = menuItems.map((item, i) => {
        return <Item data={item} key={i}/>;
      });

    return (
      <div>
        <ul className="main-menu">
          {items}
        </ul>
      </div>
    );
  }
}