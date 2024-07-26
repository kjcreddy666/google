import styled from "styled-components"

const LoadingContainer = styled.div`
    width: 692px;
    margin: 10px 0 0 220px;
    padding: 30px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 20px;
`;

export default function Loading() {
    return(
        <LoadingContainer>
            Loading...
        </LoadingContainer>
    )
}