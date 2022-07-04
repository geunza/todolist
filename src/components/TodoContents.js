import styled from 'styled-components';
import { useEffect, useState } from 'react'

let ContentBox = styled.div`
    padding:20px 0;
    border:1px solid #000;
    border-width:0 1px;
`;

function TodoContents(props){
  let [title, setTitle] = useState('');
  let [content, setContent] = useState('');
    return(
        <ContentBox>
            <div className="inputArea">
              <input type="text" name="" id="" placeholder="타이틀" onChange={ (e)=>{
                setTitle(e.target.value);
              } }/>
              <input type="text" name="" id="" placeholder="컨텐츠" onChange={ (e)=>{
                setContent(e.target.value);
              } }/>
              <button onClick={ ()=>{
                let length = props.todos.length;
                let t_text = title;
                let c_text = content;
                let obj = {
                  "id" : length,
                  "title": t_text,
                  "content": c_text,
                  "check": false
                };
                let copy = [...props.todos];
                copy.push(obj);
                props.setTodos(copy)
              } }>입력하기</button>
            </div>
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