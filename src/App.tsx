import React, { useState, Fragment, useEffect } from 'react';
import { idText } from 'typescript';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import UserTable from './tables/UserTable';

const App = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'Literature', username: 'Van Gogh the life' },
		{ id: 2, name: 'History', username: 'Guns, Germs, and Steel' },
		{ id: 3, name: 'History', username: 'The guns of August'},
	]

	const initialFormState = { id: null, name: '', username: ''}

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)
	const [myFilterBook, setMyFilterBook]=useState(users)
	const [text,setText]=useState('');
	const handleChange=()=>{
		setMyFilterBook(text=""? [...users]:users.filter(id=>id.name.includes(text)))
	}
		useEffect(()=>{
			handleChange();
		},[text])
	// CRUD operations
	const addUser = (user: { id: number; name: string; username: string; }) => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = (id: number) => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id: number, updatedUser: any) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = (user: { id: any; name: any; username: any; }) => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
		<div className="container">
			<div className="topnav">
				<input type="text" placeholder="Search.."/>
				</div>
				<h1>CRUD</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit book</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add book</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>Book view</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
			
        </div>
		
	)
}

export default App
