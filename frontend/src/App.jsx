import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [aiTools, setAiTools] = useState([]);
  const NoOfAiTools = aiTools.length;

  useEffect(() => {
    axios.get('/api/aiTools')
      .then((response) => {
        setAiTools(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center text-amber-300">AI Tools Available</h1>
      <p className="text-center mt-2 text-amber-200">Total AI Tools Listed: {NoOfAiTools}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {
          aiTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-gray-800 border border-gray-700 rounded-xl p-4 flex flex-col items-center shadow-md hover:shadow-lg transition-all"
            >
              <img
                src={tool.image}
                alt="Tool logo"
                className="w-36 h-32 object-cover rounded-md mb-4"
              />
              <div className="text-center">
                <h3 className="text-lg font-semibold text-cyan-200">{tool.title}</h3>
                <p className="text-sm text-emerald-400 mt-1">{tool.famousFor}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
