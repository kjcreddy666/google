import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import searchResult from '../../services/googleSearchAPI';
import Header from './components/Header';
import Results from './components/Results';

const Conatiner = styled.section`
    flex : 1;
    width : 100%;
`;

export default function Search({ query, setQuery, handleInput, apiKEY, apiCX }) {
    const [searchParams] = useSearchParams();
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const q = searchParams.get('q');
                if (q) {
                    setQuery(q);
                    const res = await searchResult(apiKEY, apiCX, q);
                    setResults(res);
                    // console.log(res);
                }
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchSearchResults();
    }, [searchParams, setQuery, apiKEY, apiCX]);

    return (
        <Conatiner>
            <Header query={query} handleInput={handleInput}/>
            <hr />
            <Results results={results}/>
        </Conatiner>
    );
}