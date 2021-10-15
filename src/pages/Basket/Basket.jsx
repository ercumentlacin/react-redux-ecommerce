import { getCartAction, updateCartAction } from 'actions/cart';
import Spinner from 'components/Spinner/Spinner';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BasketSc from './scBasket';

const Basket = () => {
  const { cart, pending } = useSelector((state) => state.cart);
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

  const handleItemQuantity = (id, type) => {
    const productIncreaseOrDescrease = cart.map((item) => {
      if (item.characterId === id) {
        if (type === 'plus') {
          item.quantity += 1;
        } else if (type === 'minus') {
          item.quantity -= 1;
        }
      }
      return item;
    });

    const productRemove = cart.filter((item) => item.characterId !== id);

    const newCart =
      type === 'remove' ? productRemove : productIncreaseOrDescrease;

    dispatch(updateCartAction(newCart));
  };

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
              <button
                onClick={() => handleItemQuantity(item.characterId, 'minus')}
                type="button"
                disabled={item.quantity === 1}
              >
                <i className="fas fa-minus" />
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => handleItemQuantity(item.characterId, 'plus')}
                type="button"
              >
                <i className="fas fa-plus" />
              </button>
            </div>

            <div className="trash">
              <button
                onClick={() => handleItemQuantity(item.characterId, 'remove')}
                type="button"
              >
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
