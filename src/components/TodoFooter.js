import styled from 'styled-components';

let Footer = styled.div`
    padding:50px 0;
    border:1px solid #000;
    border-radius:0 0 10px 10px;
`;

function TodoFooter(){
    return(
        <Footer>
        투두 푸터
        </Footer>
    )
}

export default TodoFooter;