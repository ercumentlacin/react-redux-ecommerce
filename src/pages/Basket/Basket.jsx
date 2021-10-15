import { getCartAction } from 'actions/cart';
import Spinner from 'components/Spinner/Spinner';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BasketSc from './scBasket';

const Basket = () => {
  console.log('hello :>> ', 'basket page');
  // eslint-disable-next-line no-unused-vars
  const { cart, error, pending, user } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true;

    if (mounted && !cart.length) {
      dispatch(getCartAction());
    }

    return () => {
      mounted = false;
    };
  }, [cart.length, dispatch]);

  const renderBasketItems = () =>
    cart.map((item) => (
      <BasketSc.Item key={item.id}>
        <div className="left">
          <img src={item.image} alt={item.name} />
        </div>

        <BasketSc.Right>
          <div className="top">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>

          <BasketSc.Bottom>
            <div className="left">
              <button type="button">
                <i className="fas fa-minus" />
              </button>
              <p>{item.quantity}</p>
              <button type="button">
                <i className="fas fa-plus" />
              </button>
            </div>

            <div className="trash">
              <button type="button">
                <i className="fas fa-trash-alt" />
              </button>
            </div>
          </BasketSc.Bottom>
        </BasketSc.Right>
      </BasketSc.Item>
    ));

  if (pending) return <Spinner />;

  return (
    <BasketSc.Wrapper>
      <h1>My Cart</h1>

      <div>{renderBasketItems()}</div>
    </BasketSc.Wrapper>
  );
};

export default Basket;
