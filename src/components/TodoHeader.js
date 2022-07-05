import styled from 'styled-components';

let Header = styled.div`
  background:#000;
  padding:20px;
  border:1px solid #000;
  border-radius:10px 10px 0 0;
  color:#fff;
  .title{
    font-size:16px; margin-bottom:5px; font-weight:700;
    + p{
      display:flex; justify-content:flex-end; align-items:center; 
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
        <h2 className="title">TodoList</h2>
        <p className="remain">
            <span>{props.todos.length}</span>개 남음
        </p>
        </Header>
    )
}

export default TodoHeader;