import React, { useState, useEffect } from 'react';

const WorkTab = ({ employeesData }) => {
  const { employees } = employeesData;
  const [meters, setMeters] = useState(0);
  const [hours, setHours] = useState(0);
  const [enoughWorkers, setEnoughWorkers] = useState(false);

  useEffect(() => {
    // Recalculate enoughWorkers whenever employees, meters, or hours change
    const maleWorkersPerHour = 1; // 1 meter per hour
    const femaleWorkersPerHour = 0.5; // 0.5 meters per hour

    const totalMetersRequired = meters;
    const totalMetersPerHour = employees.reduce(
      (acc, worker) =>
        acc + (worker.gender === 'male' ? maleWorkersPerHour : femaleWorkersPerHour),
      0
    );

    const totalHoursAvailable = hours;
    const totalMetersCompleted = totalMetersPerHour * totalHoursAvailable;

    setEnoughWorkers(totalMetersCompleted >= totalMetersRequired && totalMetersPerHour > 0);
  }, [employees, meters, hours]);

  const handleMetersChange = (e) => {
    setMeters(Math.max(0, parseFloat(e.target.value)));
  };

  const handleHoursChange = (e) => {
    setHours(Math.max(0, parseFloat(e.target.value)));
  };

  const handlePlanWork = () => {
    if (enoughWorkers) {
      // Implement your planning logic here...
      alert('Práce naplánována!');
    } else {
      alert('Nemáte dostatek pracovníků na dokončení práce v termínu.');
    }
  };

  const enoughWorkersColor = enoughWorkers ? 'green' : 'red';

  return (
    <div>
      <h2>Úkol</h2>
      <div>
        <label>Požadované metry:</label>
        <input type="number" value={meters} onChange={handleMetersChange} min="0" />
      </div>
      <div>
        <label>Časový limit v hodinách:</label>
        <input type="number" value={hours} onChange={handleHoursChange} min="0" />
      </div>
      <div>
        <p>Počet mužů: {employeesData.countWorkers.maleCount}</p>
        <p>Počet žen: {employeesData.countWorkers.femaleCount}</p>
      </div>
      <button onClick={handlePlanWork} disabled={!enoughWorkers} style={{ backgroundColor: enoughWorkersColor }}>
        Naplánovat práci
      </button>
    </div>
  );
};

export default WorkTab;
