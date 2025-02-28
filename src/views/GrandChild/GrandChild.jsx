import React from 'react';

const ThirdComponent = ({ users }) => {
  console.log("Child to grand child data :", users);
  
  return (
    <div>
      <h3>Grand Child Component</h3>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>User Age</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ThirdComponent;
