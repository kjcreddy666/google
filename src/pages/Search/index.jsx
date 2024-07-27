import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import searchResult from '../../services/googleSearchAPI';
import Header from './components/Header';
import Loading from './components/Loading';
import Results from './components/Results';

const Conatiner = styled.section`
    flex : 1;
    width : 100%;
`;

export default function Search({ query, setQuery, handleInput, apiKEY, apiCX }) {
    const [searchParams] = useSearchParams();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const q = searchParams.get('q');
                if (q) {
                    setQuery(q);
                    const res = await searchResult(apiKEY, apiCX, q);
                    setTimeout(() => {
                        setLoading(false)
                        setResults(res);
                    }, 100)
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
            {loading ? <Loading /> : <Results results={results}/>}
        </Conatiner>
    );
}