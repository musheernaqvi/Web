import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../../../assets/assets';

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our Menu</h1>
      <p className='explore-menu-text'>
        We are here to help you live life the ultimate way. Spend more time doing what you love, we will take care of tasty meals, fresh groceries and new flavours.
      </p>
      <div className="explore-menu-list-container">
        {menu_list.map((item, index) => {
            
          return (
            <div onClick= {()=> setCategory(prev => prev===item.menu_name ? "All": item.menu_name)}
             key={index} className="explore-menu-item">
              <img className= {category === item.menu_name ? "active": ""}
              src={item.menu_image} alt="" />
              <p id='P'>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr/>
    </div>
  );
};

export default ExploreMenu;
