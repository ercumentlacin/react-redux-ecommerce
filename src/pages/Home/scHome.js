import styled from 'styled-components';

const CharacterList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

export default CharacterList;
