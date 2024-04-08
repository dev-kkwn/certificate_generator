import { useState } from "react";
export function Forms() {
  const initialData = {
    name: "",
    Date: "",
    Course_Name: "",
  };

  const handleChange = (e) => {
    setFormData((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };
  const [formData, setFormData] = useState(initialData);

  const submitForm = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData(initialData);
  };
  return (
    <>
      <form action="" onSubmit={submitForm}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="border border-green-600 p-5"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="name">Date</label>
        <input
          type="text"
          id="date"
          name="date"
          className="border border-green-600 p-5"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="name">Course Name</label>
        <input
          type="text"
          id="course_name"
          name="course_name"
          className="border border-green-600 p-5"
          onChange={handleChange}
        />
        <br />
      </form>
    </>
  );
}
