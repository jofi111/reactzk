import { useState, useEffect } from 'react';

const EmployeesData = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Your code to fetch data or initialize employees from storage could go here
  }, []);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const removeEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  const countWorkers = {
    maleCount: employees.filter((employee) => employee.gender === 'male').length,
    femaleCount: employees.filter((employee) => employee.gender === 'female').length,
  };

  return { employees, addEmployee, removeEmployee, countWorkers };
};

export default EmployeesData;
