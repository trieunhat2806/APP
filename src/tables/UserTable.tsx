import React from 'react';

const UserTable = (props: { users: any[]; editRow: (arg0: any) => void; deleteUser: (arg0: any) => void }) => (
  <table>
    <thead>
      <tr>
        <th>book type</th>
        <th>Book name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user: { id: React.Key; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; username: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal }) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button type="button"
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>NO BOOKS ADDED</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
