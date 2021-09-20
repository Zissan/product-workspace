import { FC } from 'react';

import logo from '../../images/logo.svg';

const Products: FC = () => {
  return (
    <div className='products'>
      <div className='products-header flex bg-blue-500'>
        <img src={logo} />
      </div>
    </div>
  );
};

export default Products;
