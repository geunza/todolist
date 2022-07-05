import styled from 'styled-components';
import { useEffect, useState } from 'react'

let ContentBox = styled.div`
    padding:20px;
    border:1px solid #000;
    border-width:0 1px;
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
      &:not(:last-child){
        padding-bottom:15px; margin-bottom:15px; border-bottom:1px solid #e6e6e6; 
      }
    }
`;

function TodoContents(props){
  let [title, setTitle] = useState('');
  let [content, setContent] = useState('');
  const onReset = () => {
    let id = props.todos[props.todos.length-1].id + 1;
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
              <button onClick={ onReset }>Go!</button>
            </div>
            {
                props.todos.map(function(v, i, arr){
                    return(
                        <ul key={i} className={`Hi ${v.check ? 'checked' : ''}`} onClick={ ()=>{ 
                            let copy = [...props.todos];
                            copy[i].check = !copy[i].check
                            props.setTodos(copy);
                          } }>
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