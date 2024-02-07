import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function TodoItem ({completed, id, title, toggleTodo, deleteTodo}) {
	return (
		<ListGroup.Item className='item'>
			<label>
				<input type='checkbox' className='checkbox' checked={completed} onChange={e => toggleTodo(id, e.target.checked)}/>
				<p className='todoname'>{title}</p>
			</label>
			<Button variant="danger" className='delete' onClick={() => deleteTodo(id)}>Delete</Button>{' '}
		</ListGroup.Item>
	);
}