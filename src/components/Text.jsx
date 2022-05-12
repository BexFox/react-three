import styled from 'styled-components';

export default function Text() {
  return (
    <Wrapper>
      <h2 className='h2-color'>Three.js in React</h2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  max-width: 380px;
  display: grid;
  gap: 20px;
  text-align: center;
  margin: 0 auto;
  padding: 140px 20px 100px;

  // Images in Letters
  background: url('../src/images/map4.jpg');
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  h2 {
    text-shadow: 1px 0px 11px #747474;
  }
`;
