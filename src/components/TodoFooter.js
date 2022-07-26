import styled from 'styled-components';

let Footer = styled.div`
    background:#fff;
    padding:25px 0;
    p{
      font-size:12px; color:#191919; 
    }
`;

function TodoFooter(){
    return(
        <Footer>
          <p>
            Copyright&copy; 2022 Geunyoung All Right Reserved.
          </p>
        </Footer>
    )
}

export default TodoFooter;