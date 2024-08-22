import React from 'react';
import ReactDOM from 'react-dom';
import Content from './contents/content';

function ShoppingCart(){
  return(
    <div>
      <Content />
    </div>
  )
}

ReactDOM.render(<ShoppingCart />,document.getElementById("root"));