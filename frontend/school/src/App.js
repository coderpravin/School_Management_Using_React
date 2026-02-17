import React, {useEffect,  useState} from "react";
import axios from 'axios';
import './App.css';


function App(){
  const [schools, setSchools] = useState([]);

  const fetchSchools = async () => {
    try{
      const res = await axios.get('http://127.0.0.1:8000/');
      setSchools(res.data);

    } catch(error){
      console.error("The error is", error);
    }
};

  useEffect(() =>{
    fetchSchools();
  }, []);

  return(
    <div className="container">
      <h1>School List</h1>

      <table>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>School Name</th>
            <th>School Location</th>
          </tr>
        </thead>

        <tbody>
          {schools.map((school) =>(
            <tr key={school.id}>
              <td>{school.id}</td>
              <td>{school.name}</td>
              <td>{school.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default App;