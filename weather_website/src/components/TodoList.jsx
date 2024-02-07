import ListGroup from 'react-bootstrap/ListGroup';
import TodoItem from './TodoItem';

export default function TodoList ({todos, toggleTodo, deleteTodo}) {
	return (
		<ListGroup>
			{todos.length === 0 && <p style={{textAlign: 'center'}}>No todos</p>}
			{todos.map(todo => {
				return (
					<TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
				);
			})}
		</ListGroup>
);
}