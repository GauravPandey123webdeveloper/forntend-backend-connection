import React, { useState } from 'react';

function App() {
  const [firstname, setFirstname] = useState(""); 
  const handleChange = (e) => {
    setFirstname(e.target.value); 
  };
  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8080/test", {
        method: "POST",
        body: JSON.stringify({ firstname }), 
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json(); 
      alert("Test successful");
      console.log(data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  return (
    <div className="App">
      <label htmlFor="fname">First Name:</label>
      <input type="text" id="fname" value={firstname} onChange={handleChange} />
      <button type="button" onClick={handleSubmit}>Submit</button> 
    </div>
  );
}

export default App;
