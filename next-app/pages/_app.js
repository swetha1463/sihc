// next-app/pages/_app.js
import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData.entries());
    const response = await axios.post('http://localhost:5000/cybersecurity', jsonData);
    setPrediction(response.data.prediction);
  };

  return (
    <div>
      <Head>
        <title>Cybersecurity</title>
      </Head>
      <h1>Cybersecurity</h1>
      <form onSubmit={handleSubmit}>
        <label>Data:</label>
        <input type="text" name="data" />
        <button type="submit">Submit</button>
      </form>
      {prediction && <p>Prediction: {prediction}</p>}
    </div>
  );
}

export default App;
