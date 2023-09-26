import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import '../styles.css'

const TodoList: React.FC = () => {
    const {page, todos, loading, limit, error} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions()

    const pages = [1, 2, 3];

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page]);

    if (loading) {
        return <h1>Загрузка постов.</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div className='pages-container'>
            {todos.map(todo =>
                <div key={todo.id}>{todo.id} | {todo.title}</div>
            )}
            <div className='pages-block'>
                {pages.map(p =>
                    <div onClick={() => setTodoPage(p)}
                         className={p === page ? 'page_number-active' : 'page_number-disable'}>
                        {p}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoList;