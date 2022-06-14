import React, { useState, useEffect } from 'react';

const EditUserForm = (props: any) => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input  aria-label="Search" type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input aria-label="Search" type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Update book</button>
      <button aria-label="Search"  onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
