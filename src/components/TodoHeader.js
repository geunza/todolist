function TodoHeader(props){
    return(
        <div className="todoHeader">
        <h2>투두헤더</h2>
        <p>
            <span>{props.todos.length}</span>개 남음
        </p>
        </div>
    )
}

export default TodoHeader;