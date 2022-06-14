import React, { useState } from 'react';

const AddUserForm = (props: { addUser: (arg0: { id: any; name: string; username: string; }) => void; }) => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Book type</label>
			<input aria-label="Search" type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Book name</label>
			<input aria-label="Search" type="text" name="username" value={user.username} onChange={handleInputChange} />
			<button>Add new book</button>
		</form>
	)
}

export default AddUserForm
