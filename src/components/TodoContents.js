import styled from 'styled-components';

let ContentBox = styled.div`
    padding:20px 0;
    border:1px solid #000;
    border-width:0 1px;
`;

function TodoContents(props){

    return(
        <ContentBox>
            {
                props.todos.map(function(v, i, arr){
                    return(
                        <ul key={i}>
                            <li>{v.id}</li>
                            <li>{v.title}</li>
                            <li>{v.content}</li>
                        </ul>
                    )
                })
            }
        </ContentBox>
    )
}

export default TodoContents;