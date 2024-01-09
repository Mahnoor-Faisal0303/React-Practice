import React from 'react';
import BasicTable from './App2';

const App: React.FC = () => {
  const data = [
    { id: 1, name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs:24, protein:4.3 },
    { id: 2, name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs:30, protein:3.76 },
    { id: 3, name: 'Eclair', calories: 262, fat: 16.0, carbs:37, protein:5.32 },
    { id: 4, name: 'Cupcake', calories: 305, fat: 3.75, carbs:22, protein:7.23 },
    { id: 5, name: 'Gingerbread', calories: 356, fat: 16.0, carbs:28, protein:2.3 },  
  ];

  return (
    <div>
      <h1 id="textStyle">Materialize Table</h1>
      <BasicTable data={data} />
    </div>
  );
};

export default App;
