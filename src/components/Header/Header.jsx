import { useSelector } from 'react-redux';

import WrapperHeader from './scHeader';

const Header = () => {
  const cart = useSelector((state) => state.cart);
  console.log('cart :>> ', cart);
  return (
    <WrapperHeader>
      <span>
        Basket : <strong>{cart.cart.length}</strong>
      </span>
    </WrapperHeader>
  );
};

export default Header;
