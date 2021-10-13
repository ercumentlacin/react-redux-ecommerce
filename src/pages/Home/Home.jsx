import { getCartAction } from 'actions/cart';
import fetchCharacters from 'actions/characters';
import Character from 'components/Character';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CharacterList from './scHome';

const Home = () => {
  const dispatch = useDispatch();
  const { charactersData, isError, isFetching } = useSelector(
    (state) => state.characters
  );

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      dispatch(fetchCharacters());
      dispatch(getCartAction());
    }

    return () => {
      mounted = false;
    };
  }, [dispatch]);

  if (isError) return <h1>Fetchin error </h1>;
  if (isFetching) return <h1>Loading </h1>;

  const renderCharacterList = () =>
    charactersData.length > 0 &&
    charactersData.map((character) => (
      <Character key={character.id} {...character} />
    ));

  return (
    <>
      <h1>Home</h1>

      <CharacterList>{renderCharacterList()}</CharacterList>
    </>
  );
};

export default Home;
