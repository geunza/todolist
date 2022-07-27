import styled from 'styled-components';
import logo from '../'
let Header = styled.div`
  background:#fff;
  padding:20px 0 10px;
  color:#191919;
  position:relative; 
  .title{
    font-size:20px; margin-bottom:5px; font-weight:700;
    .logo{width:70px; display:block; margin:auto; }
    + p{
      position:absolute; right:20px; top:50%; transform:translateY(-50%);
      font-size:14px;
      span{
        margin-right:5px; 
      }
    }
  }

`;

function TodoHeader(props){
    return(
        <Header>
        <h2 className="title">
          <img className="logo" src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="todolist logo" />
        </h2>
        <p className="remain">
            <span>{props.todos.length}</span>개 남음
        </p>
        </Header>
    )
}

export default TodoHeader;