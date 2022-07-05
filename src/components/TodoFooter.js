import styled from 'styled-components';

let Footer = styled.div`
    background:#282c34;
    padding:20px 0;
    border:1px solid #000;
    border-radius:0 0 10px 10px;
    p{
      font-size:12px; color:#fff; 
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