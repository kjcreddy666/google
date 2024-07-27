import styled, {keyframes} from "styled-components"

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const LoadingContainer = styled.div`
    width: 692px;
    margin: 10px 0 0 220px;
    padding: 30px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    display : flex;
    justify-content : center;
    align-items : center;

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

const Loader = styled.div`
    width : 50px;
    height : 50px;
    border-radius : 50%;
    border : 5px solid #fff;
    border-top-color : #4285f4;
    animation: ${spin} 1s linear infinite;
`;

export default function Loading() {
    return(
        <LoadingContainer>
            <Loader />
        </LoadingContainer>
    )
}