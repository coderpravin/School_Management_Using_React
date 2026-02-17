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

  const deleteSchool = async (id) =>{
    try{
      await axios.delete(`http://127.0.0.1:8000/${id}/`);

      setSchools((prev)=> prev.filter((school) => school.id !== id));

    } catch(error){
      console.error("The error is ", error)
    }
  };

  const editSchool = async (id) =>{
    try{

      const newName = prompt("Enter your School name :")
      const newCity = prompt("Enter your City name :")

      if (!newName || !newCity) return;

      await axios.put(`http://127.0.0.1:8000/edit/${id}/`,{
        name : newName,
        city : newCity
      });

      //Frontend update UI
      setSchools((prev) =>
        prev.map((school) =>
          school.id === id? {...school, name:newName, city:newCity} : school
        ));

    }catch(error){
      console.error("The error is ", error)
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
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {schools.map((school) =>(
            <tr key={school.id}>
              <td>{school.id}</td>
              <td>{school.name}</td>
              <td>{school.city}</td>
              <td>
                <button onClick={()=> {
                  const ok = window.confirm(`Delete School id ${school.id}`);
                  if (ok) deleteSchool(school.id)
                }
                }>Delete</button>

                <button onClick={()=> 
                  editSchool(school.id)
                }>
                  Edit
                </button>

                <button>Add</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default App;