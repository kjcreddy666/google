import styled from "styled-components";
// import Result from "./Result";

const StyledResults = styled.div`
    width : 692px;
    margin : 10px 0px 0px 220px;
    padding : 30px;
    border : 1px solid rgba(0,0,0,0.1);
    border-radius : 20px;

    @media(max-width : 1290px) {
        margin-left : 100px;
    }

    @media(max-width : 956px) {
        max-width : 70%;
        display : flex;
        flex-direction : column;
        margin : 10px auto;
    }
`;

const Result = styled.div`
    margin : 0px 10px 30px 10px;
`;

const Title = styled.a`
    font-size : 20px;
    margin-bottom : 20px;
    &:hover{
        text-decoration : underline;
    }
`;

export default function Results({results}) {
    return (
        <StyledResults>
            {results.length > 0 ? (
                results.map((result, index) => (
                    <Result key={index} >
                        <Title href={result.link}>{result.title}</Title>
                        <p>{result.snippet}</p>
                    </Result>
                ))
            ) : (
                <p>No results found</p>
            )}
        </StyledResults>
    )
}