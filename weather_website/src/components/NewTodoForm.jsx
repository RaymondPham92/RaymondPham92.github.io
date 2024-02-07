import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function NewTodoForm ( {onSubmit}) {

	const [newItem, setNewItem] = useState("")
	

	const handleSubmit = (e) => {
		e.preventDefault()
		if (newItem === "") return
		onSubmit(newItem)
		setNewItem("")
	}


	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className="mb-3">
				<Form.Control type="text" placeholder="Your Task" value={newItem} onChange={e => setNewItem(e.target.value)}/>
				<Form.Text className="text-muted">
					Enter a task
				</Form.Text>
			</Form.Group>
			<Button variant="primary" type="submit">
				Add
			</Button>
		</Form>
	);
}