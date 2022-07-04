function TodoContents(props){
    
    return(
        <div>
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
        </div>
    )
}

export default TodoContents;