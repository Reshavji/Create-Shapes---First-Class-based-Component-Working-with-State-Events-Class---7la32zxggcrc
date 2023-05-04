import React, { useState } from 'react';
import '../styles/App.css';
const App = () => {
 const [selectedShape, setSelectedShape] = useState('Square');
  const [shapes, setShapes] = useState([]);

  const handleSelectChange = (event) => {
    setSelectedShape(event.target.value);
  };

  const handleAddShapeClick = () => {
    if (selectedShape === 'Square') {
      setShapes([...shapes, <div key={shapes.length} className="square"></div>]);
    } else if (selectedShape === 'Circle') {
      setShapes([...shapes, <div key={shapes.length} className="circle"></div>]);
    }
  };

  return (
    <div>
      <div id="shape-creator">
        <select value={selectedShape} onChange={handleSelectChange}>
          <option value="Square">Square</option>
          <option value="Circle">Circle</option>
        </select>
        <button onClick={handleAddShapeClick}>Add shape</button>
      </div>
      <div id="shapes-holder">
        {shapes.map((shape) => shape)}
      </div>
    </div>
  );
}

export default App;
