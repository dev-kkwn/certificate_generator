import { useEffect, useState } from "react";
import { Axios } from "axios";
export function Forms() {
  const initialData = {
    Name: "",
    Date: "",
    Course_Name: "",
  };

    const handleChange = (e) => {
    setFormData((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value
    }));
  };

  const [formData, setFormData] = useState(initialData);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialData);
    // const url = "http://localhost:3000/student"
    // Axios.post(`${url}`,formData).then((res) => console.log(res.formData)).catch((error) => console.error("error", error));
  };
  useEffect(() => {
    // const url = "http://localhost:3000/student"
    // Axios.post(`${url}`,formData).then((res) => console.log(res.formData)).catch((error) => console.error("error", error));
},[formData])


  return (
    <>
      <form onSubmit={submitForm}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          name="Name"
          className="border border-green-600 p-1"
          onChange={handleChange}
          value={formData.Name}
        />
        <br />
        <label htmlFor="name">Date</label>
        <input
          type="date"
          id="date"
          name="Date"
          className="border border-green-600 p-1"
          onChange={handleChange}
          value={formData.Date}
        />
        <br />
        <label htmlFor="name">Course Name</label>
        <input
          type="text"
          id="course_name"
          name="Course_Name"
          className="border border-green-600 p-1"
          onChange={handleChange}
          value={formData.Course_Name}
        />
        <br />
        <button type="submit" className="bg-blue-600">submit</button>
      </form>
    </>
  );
}
