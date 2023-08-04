import {useState} from 'react'

function App() {

  const courses = [
    { id: 1, name: "HTML,CSS", price: 100 },
    { id: 2, name: "JavaScript", price: 120 },
    { id: 3, name: "ReactJS", price: 150 }
  ];   
  
    const [checked, setChecked] = useState([]);
    console.log({ ids: checked });
    const handleCheck = (id) => {
      const isChecked = checked.includes(id);
      setChecked((prev) => {
        if (isChecked) {
          return checked.filter((item) => item !== id);
        } else {
          return [...prev, id];
        }
      });
    };
    const handleSubmit = () => {
      //Call API
    };
    return (
      <div className="App">
        {courses.map((course) => (
          <div key={course.id}>
            <input
              type="checkbox"
              checked={checked.includes(course.id)}
              onChange={() => handleCheck(course.id)}
            />
            {course.name}
          </div>
        ))}
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  
  
}

export default App;
