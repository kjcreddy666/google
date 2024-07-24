import styled from "styled-components";
import GoogleImg from '../../../assets/Google.png';
import SearchBox from "../../../components/SearchBox";

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 845px) {
    flex-direction: column;
    height: 170px; /* Unified height for mobile */
  }
`;

const Logo = styled.img`
  transform: scale(0.5);
`;

const Form = styled.form`
  width: 90%;
  max-width: 692px;
  height: 46px;
`;

export default function Header({ query, handleInput }) {
  return (
    <HeaderContainer>
      <Logo src={GoogleImg} alt="Google logo" />
      <Form>
        <SearchBox h="44px" query={query} handleInput={handleInput} />
      </Form>
    </HeaderContainer>
  );
}