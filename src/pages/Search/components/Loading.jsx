import styled from "styled-components"

const LoadingContainer = styled.div`
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

export default function Loading() {
    return(
        <LoadingContainer>
            Loading...
        </LoadingContainer>
    )
}