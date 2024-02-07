import './ToDo.css'
import { useEffect, useState } from 'react';
import NewTodoForm from '../components/NewTodoForm';
import TodoList from '../components/TodoList';

export default function ToDo () {

	const [todos, setTodos] = useState(() => {
		const localValue = localStorage.getItem("ITEMS")
		if (localValue == null) return []
		return JSON.parse(localValue)
	})

	useEffect(() => {
		localStorage.setItem("ITEMS", JSON.stringify(todos))
	}, [todos])

	const toggleTodo = (id, completed) => {
		setTodos(currentTodos => {
			return currentTodos.map(todo => {
				if(todo.id === id) {
					return {...todo, completed}
				}
				return todo
			})
		})
	}

	const deleteTodo = (id) => {
		setTodos((currentTodos) => {
			return currentTodos.filter(todo => todo.id !== id)
		})
	}

	const addTodo = (title) => {
		setTodos(currentTodos => {
			return ([...currentTodos, {id: crypto.randomUUID(), title, completed: false}])
		})
	}

	return(
		<div className='todoBackground'>
			<div className='todoContainer'>
				<h1 style={{textAlign: 'center'}}>To Do App</h1>
				<NewTodoForm onSubmit={addTodo}/>
				<h2 style={{textAlign: 'center'}}>List</h2>
				<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
			</div>
		</div>
	);
}

