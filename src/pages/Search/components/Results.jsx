import styled from "styled-components";

const ResultsContainer = styled.div`
  width: 692px;
  margin: 10px 0 0 220px;
  padding: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  @media (max-width: 1290px) {
    margin-left: 100px;
  }

  @media (max-width: 956px) {
    width: 70%;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
  }
`;

const ResultItem = styled.div`
  margin: 0 10px 30px;
`;

const ResultTitle = styled.a`
  font-size: 20px;
  margin-bottom: 20px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Results({ results }) {
  return (
    <ResultsContainer>
      {results.length > 0 ? (
        results.map((result, index) => (
          <ResultItem key={index}>
            <ResultTitle href={result.link}>{result.title}</ResultTitle>
            <p>{result.snippet}</p>
          </ResultItem>
        ))
      ) : (
        <p>No results found</p>
      )}
    </ResultsContainer>
  );
}