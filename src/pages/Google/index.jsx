import React from 'react';
import styled from 'styled-components';
import SearchBox from '../../components/SearchBox';
import GoogleImg from '../../assets/Google.png';

const Container = styled.section`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 582px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Form = styled.form`
  width: 90%;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ButtonContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Button = styled.button`
  width: fit-content;
  height: 36px;
  padding: 0 16px;
  border: none;
  border-radius: 3px;
  background-color: #f8f9fa;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`;

export default function Google({ query, handleInput }) {
  return (
    <Container>
      <Content>
        <img src={GoogleImg} alt="Google logo" />
        <Form action="/search">
          <SearchBox h="46px" query={query} handleInput={handleInput} />
          <ButtonContainer>
            <Button type="submit">Google Search</Button>
            <Button type="submit">I'm Feeling Lucky</Button>
          </ButtonContainer>
        </Form>
      </Content>
    </Container>
  );
}