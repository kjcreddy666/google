import React from 'react';
import styled from 'styled-components';
import SearchBox from '../../components/SearchBox';
import GoogleImg from '../../assets/Google.png';

const GoogleSec = styled.section`
  flex: 1;
  width : 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GoogleCtn = styled.div`
  width : 100%;
  height : 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Img = styled.img``;

const SrchForm = styled.form`
  width : 90%;
  max-width : 582px;
  height : 170px;
  display : flex;
  flex-direction : column;
  justify-content : space-evenly;
  align-items : center;
`;

const BtnCtn = styled.div`
  width : 300px;
  display : flex;
  justify-content : space-evenly;
  align-items : center;
`;

const Btn = styled.button`
  width : fit-content;
  height : 36px;
  padding : 0px 16px;
  border : none;
  border-radius : 3px;
  background-color : #f8f9fa;
  font-size : 14px;
  color : rgba(0,0,0,0.8);
  cursor : pointer;
`;

function Google({ query, handleInput }) {
  return (
    <GoogleSec>
      <GoogleCtn>
        <Img src={GoogleImg} />
        <SrchForm action="/search">
          <SearchBox h={"46px"} query={query} handleInput={handleInput} />
          <BtnCtn>
            <Btn>Google Search</Btn>
            <Btn>I'm Feeling Lucky</Btn>
          </BtnCtn>
        </SrchForm>
      </GoogleCtn>
    </GoogleSec>
  );
}

export default Google;