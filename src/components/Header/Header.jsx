import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import WrapperHeader from './scHeader';

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const { pathname } = useLocation();

  if (pathname === '/basket') {
    return (
      <WrapperHeader>
        <Link to="/">Home</Link>
      </WrapperHeader>
    );
  }

  return (
    <WrapperHeader>
      <Link to="/basket">
        Basket : <strong>{cart.cart.length}</strong>
      </Link>
    </WrapperHeader>
  );
};

export default Header;
