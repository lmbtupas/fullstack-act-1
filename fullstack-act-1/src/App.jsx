import TableHeader from "./components/TableHeader"
import GradesTable from "./components/GradesTable"
import SearchBar from "./components/SearchBar";
import GradeForm from "./components/Form";
import { useState } from "react";

function App() {

  const [txtValue, setTxtValue] = useState("");

  const [data, setData] = useState([]);

  const [form, setForm] = useState({
    courseNo: "",
    courseName: "",
    courseUnits: 0,
    courseGrade: "",
  });

  const handleForm =(e) => setForm({...form, [e.target.id]: e.target.value})

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, {id: data.length + 1, courseNo: form.courseNo, courseName: form.courseName, courseUnits: form.courseUnits, courseGrade: form.courseGrade}])

  };


  return (
    <div className="app">
      <div className='container mx-auto p-[1rem]'>
        <h1 className='font-bold text-[2.5rem] mb-6'>Parang AdDU SIS but not really emz</h1>
        <div className='flex flex-row items-start justify-center gap-10'>
          <div className='w-3/12'>
            <GradeForm form={form} onChange={handleForm} handleSubmit={handleSubmit} /> 
          </div>

          <div className='flex flex-col items-start w-9/12 gap-2'>
            <SearchBar value={txtValue} onChange={(e)=> {setTxtValue(e.target.value)}}/>
            <table className='w-full border-collapse rounded-[10px]'>
              <thead>
              <TableHeader />
              </thead>

              <tbody>
              <GradesTable items={data} query={txtValue}/>
              </tbody> 
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
