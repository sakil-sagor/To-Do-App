import React, { useCallback, useEffect, useReducer, useRef } from 'react';



const getLocalItems = () => {

    let todo = localStorage.getItem('todos');
    console.log(todo);

    // if (todo) {
    //     JSON.parse(localStorage.getItem('todos'))
    // } else {
    //     return []
    // }

}

interface Todo {
    id: number;
    text: string;
}
type ActionType = { type: "ADD"; text: string } | { type: "REMOVE"; id: number }
const Todo = () => {
    const reducer = (state: Todo[], action: ActionType) => {
        switch (action.type) {
            case "ADD":
                return [
                    ...state,
                    {
                        id: state.length,
                        text: action.text,
                    },
                ];
            case "REMOVE":
                return state.filter(({ id }) => id !== action.id)
        }
    }
    const [todos, dispatch] = useReducer(reducer, [])


    const newTodoRef = useRef<HTMLInputElement>(null);
    const onAddTodo = useCallback(() => {
        if (newTodoRef.current) {
            dispatch({
                type: "ADD",
                text: newTodoRef.current.value,
            })
            newTodoRef.current.value = "";
        }
    }, [])
    // const onRemoveTodo = (todoId: number) => {
    //     dispatch({
    //         type: "REMOVE",
    //         id: todoId
    //     })
    // }
    const onRemoveTodo = useCallback((todoId) => {
        dispatch({
            type: "REMOVE",
            id: todoId
        })
    }, [])

    // add item to localstorage 
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);
    return (
        <div>
            <h1>Todo list </h1>
            <div>
                <input type="text" ref={newTodoRef} />
                <button onClick={onAddTodo}>Add</button>
            </div>
            <div>
                {
                    todos.map((todo) => (
                        <div key={todo.id}>{todo.text}
                            <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
                        </div>

                    ))
                }

            </div>
        </div>
    );
};

export default Todo;
