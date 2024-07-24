import React from 'react';
import styled from 'styled-components';
import { IoSearchOutline } from "react-icons/io5";

const SrchBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid rgba(0,0,0,0.2);
    width: 100%;
    height: ${props => props.$h}; /* Use $h for transient prop */
    border-radius: 50px;
    padding-left: 15px;
    box-sizing: border-box;
`;

const SrchInput = styled.input`
    width: 80%;
    height: 95%;
    border: none;
    outline: none;
    font-size: 16px;
    margin-left: 15px;

    &::-webkit-search-cancel-button {
        -webkit-appearance: none;
    }
    
    &::selection {
        background: transparent;
    }
`;

export default function SearchBox({ h, query, handleInput }) {
    return (
        <SrchBox $h={h}>
            <IoSearchOutline />
            <SrchInput 
                type="search" 
                name="q" 
                value={query} 
                onInput={handleInput} 
                required 
            />
        </SrchBox>
    );
}