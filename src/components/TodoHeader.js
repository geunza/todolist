import styled from 'styled-components';

let Header = styled.div`
    padding:20px 0;
    border:1px solid #000;
    border-radius:10px 10px 0 0;
    h2{
        color:red;
    }
`;

function TodoHeader(props){
    return(
        <Header>
        <h2>투두헤더</h2>
        <p>
            <span>{props.todos.length}</span>개 남음
        </p>
        </Header>
    )
}

export default TodoHeader;