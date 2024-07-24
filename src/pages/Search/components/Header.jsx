import styled from "styled-components";
import GoogleImg from '../../../assets/Google.png';
import SearchBox from "../../../components/SearchBox";

const StyledHeader = styled.div`
    width : 100%;
    max-width : 900px;
    height : 100px;
    display : flex;
    justify-content : space-evenly;
    align-items : center;

    @media(max-width : 845px) {
        flex-direction : column;
        height : 120px;
        height : 170px;
    }
`;

const Img = styled.img`
    transform : scale(0.5);
`;

const SrchForm = styled.form`
    width : 90%;
    height : 46px;
    max-width : 692px;
`;

export default function Header({query, handleInput}) {
    return(
        <StyledHeader>
            <Img src={GoogleImg}/>
            <SrchForm>
                <SearchBox h={"44px"} query={query} handleInput={handleInput} />
            </SrchForm>
        </StyledHeader>
    )
}