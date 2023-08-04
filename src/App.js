import React from 'react';
import Tab from './components/Tab';
import EmployeesTab from './components/EmployeesTab';
import WorkTab from './components/WorkTab';
import EmployeesData from './EmployeesData';

const App = () => {
  const employeesData = EmployeesData();

  const tabs = [
    {
      key: 'employees',
      label: 'Zaměstnanci',
      content: <EmployeesTab employeesData={employeesData} />,
    },
    {
      key: 'work',
      label: 'Úkol',
      content: <WorkTab employeesData={employeesData} />,
    },
  ];
  return (
    <div>
      <Tab tabs={tabs} />
    </div>
  );
};

export default App;
