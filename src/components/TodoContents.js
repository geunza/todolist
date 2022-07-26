import styled from 'styled-components';
import { useEffect, useState } from 'react'

let ContentBox = styled.div`
    padding:20px;
    background: #000;
    
    border-width:0 1px;
    flex:1; overflow-y:auto; 
    color:#fff; 
    .inputArea{
      display:flex; flex-flow:column; margin:auto; position:relative;
      input{
        height:24px; width:90%; 
      }
      button{
        position:absolute; right:0; top:0; height:100%; width:10%; 
      }
    }
    ul{
      background:#303030; padding:10px 0; border-radius:5px; 
      &:not(:last-child){
        margin-bottom:15px; 
      }
    }
`;

function TodoContents(props){
  let [title, setTitle] = useState('');
  let [content, setContent] = useState('');
  let id = props.todos[props.todos.length-1].id
  const addOne = () => {
    console.log(id);
    id++;
    let t_text = title;
    let c_text = content;
    if(t_text == ''){
      alert('타이틀을 입력하셈');
      return;
    }
    let obj = {
      "id" : id,
      "title": t_text,
      "content": c_text,
      "check": false
    };
    let copy = [...props.todos];
    copy.push(obj);
    props.setTodos(copy)
  }
    return(
        <ContentBox>
            <div className="inputArea">
              <input type="text" name="" id="ipt_title" placeholder="타이틀" onChange={ (e)=>{
                setTitle(e.target.value);
              } }/>
              <input type="text" name="" id="ipt_cont" placeholder="컨텐츠" onChange={ (e)=>{
                setContent(e.target.value);
              } }/>
              <button onClick={ addOne }>Go!</button>
            </div>
            {
                props.todos.map(function(v, i, arr){
                    return(
                        <ul key={i}>
                            <li>{i+1}</li>
                            <li>{v.title}</li>
                            <li>{v.content}</li>
                            <li><button className="remove" onClick={ ()=>{
                              let copy = [...props.todos];
                              let idx = i;
                              copy.splice(i, 1);
                              props.setTodos(copy);
                            } }>remove</button></li>
                        </ul>
                    )
                })
            }
        </ContentBox>
    )
}

export default TodoContents;