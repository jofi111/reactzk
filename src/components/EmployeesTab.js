import React, { useState } from 'react';

const EmployeesTab = ({ employeesData }) => {
  const { employees, addEmployee, removeEmployee } = employeesData;

  const [newEmployee, setNewEmployee] = useState({ name: '', gender: 'male' });

  const handleNameChange = (e) => {
    setNewEmployee({ ...newEmployee, name: e.target.value });
  };

  const handleGenderChange = (e) => {
    setNewEmployee({ ...newEmployee, gender: e.target.value });
  };

  const handleAddEmployee = () => {
    if (newEmployee.name.trim() !== '') {
      addEmployee(newEmployee);
      setNewEmployee({ name: '', gender: 'male' });
    }
  };

  const handleRemoveEmployee = (index) => {
    removeEmployee(index);
  };

  return (
    <div>
      <h2>Zaměstnanci</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            {employee.name} - {employee.gender}
            <button onClick={() => handleRemoveEmployee(index)}>Odebrat</button>
          </li>
        ))}
      </ul>
      <div>
        <input type="text" value={newEmployee.name} onChange={handleNameChange} placeholder="Celé jméno" />
        <select value={newEmployee.gender} onChange={handleGenderChange}>
          <option value="male">Muž</option>
          <option value="female">Žena</option>
        </select>
        <button onClick={handleAddEmployee}>Přidat zaměstnance</button>
      </div>
    </div>
  );
};

export default EmployeesTab;
