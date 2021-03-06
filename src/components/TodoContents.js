import styled from 'styled-components';
import { useEffect, useState } from 'react'

let ContentBox = styled.div`
    padding:20px;
    background: #000;
    
    border-width:0 1px;
    flex:1; overflow-y:auto; 
    color:#fff; 
    .inputArea{
      display:flex; flex-flow:column; margin:auto; position:relative; margin-bottom:20px; 
      > *{
        color:#fff; background:transparent; border-color:#e6e6e6;
      }
      input{
        height:36px; width:80%; padding:0 10px; font-family:inherit; box-sizing:border-box;
        border-width:0 0 1px 0; font-size:14px; 
      }
      button{
        position:absolute; right:0; top:0; height:100%; width:15%; 
        background:transparent; border-width:1px; 
      }
    }
    .list-item{
      background:#303030; padding:10px; border-radius:5px; 
      position:relative; display:flex; text-align:left; 
      &:not(:last-child){
        margin-bottom:15px; 
      }
      li{
        font-size:14px; line-height:1.5;
        &.numb{
          width:20px; text-align:right;
        }
        &.cont{
          flex:1; padding:0 10px; 
        }
        &.btn{
          width:20px;right:0;
          display:flex; justify-content:center; align-items:center; 
          button{
            font-size:0; width:100%; height:20px; box-sizing:border-box;
            background:none; border:none; position:relative; 
            &:before,
            &:after{
              content:''; display:block; width:90%; height:2px; background:#fff; 
              position:absolute; left:50%; top:50%;
            }
            &:before{transform:translate(-50%, -50%) rotate(45deg);}
            &:after{transform:translate(-50%, -50%) rotate(-45deg);}
          }
        }
      }
    }
`;

function TodoContents(props){
  let [title, setTitle] = useState('');
  let [content, setContent] = useState('');
  let id=0;
  useEffect(()=>{
    localStorage.setItem('todoList', JSON.stringify(props.todos));
  },[props.todos]);
  if(props.todos.length != 0){
    id = props.todos[props.todos.length-1].id
  }else{
    id = 0;
  }
  const addOne = () => {
    let t_text = title;
    let c_text = content;
    if(t_text == ''){
      alert('???????????? ????????????');
      return false;
    }
    id++;
    let obj = {
      "id" : id,
      "title": t_text,
      "content": c_text,
    };
    let copy = [...props.todos];
    copy.push(obj);
    props.setTodos(copy)
  }
    return(
        <ContentBox>
            <div className="inputArea">
              <input type="text" name="" id="ipt_title" placeholder="??? ???" onChange={ (e)=>{
                setTitle(e.target.value);
              } }/>
              <input type="text" name="" id="ipt_cont" placeholder="????????????" onChange={ (e)=>{
                setContent(e.target.value);
              } }/>
              <button onClick={ addOne }>??????!</button>
            </div>
            <Cont todos={props.todos} setTodos={props.setTodos}/>
        </ContentBox>
    )
}
function Cont(props){
  if(props.todos.length == 0){
    return(
      <div>?????????!</div>
    )
  }else{
    return(
      <div className="todo-list">
        {
          props.todos.map(function(v, i, arr){
            return(
              <ul key={i} className="list-item">
                <li className="numb">{i+1}</li>
                <li className="cont">
                  <p>{v.title}</p>
                  <p>{v.content}</p>
                </li>
                <li className="btn"><button onClick={ ()=>{
                  let copy = [...props.todos];
                  let idx = i;
                  copy.splice(idx, 1);
                  props.setTodos(copy);
                } }>remove</button></li>
              </ul>
            )
          })
        }
      </div>
    )
  }
}
export default TodoContents;