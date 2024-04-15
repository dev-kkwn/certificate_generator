import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
export function Forms() {
  const apiUrl = process.env.REACT_APP_API_URL;

  const initialData = {
    name: "",
    DOB: "",
    course_name: "",
    duration: "",
    mobile_no: "",
    certificate_no: "",
  };
  // const { id } = useParams();
  const [formData, setFormData] = useState(initialData);
 
  const handleChange = (e) => {
    setFormData((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData);
    //localStorage.setItem(formData.certificate_no);
   // console.log(id, "hhhh");
    axios
      .post(`${apiUrl}/studentData/entry`, formData)
      .then((res) => {
        localStorage.setItem("id", res.data.id);
        //console.log(res.dataid);
      })
      .catch((err) => console.log(err, "error posting"));
  };
  const id = localStorage.getItem("id");
  console.log("id", id);
  // const submitForm = (e) => {
  //   try {
  //     e.preventDefault();
  //     const response = axios.post(`${apiUrl}/studentData/entry`, formData)
  //     const mongoId = response.data.id;
  //     localStorage.setItem("mongoId", mongoId)
  //     return mongoId
  //   } catch (error) {
  //     console.error("error",error);
  //   }
  // }

  return (
    <>
      <div className="flex justify-center items-center h-[100vh] w-full">
        <div className="shadow-2xl p-8 w-2/4">
          <form onSubmit>
            <label htmlFor="Name" className="font-bold">
              Student Name:
            </label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              className="border border-black p-1 rounded-md w-full"
              onChange={handleChange}
              value={formData.name}
            />
            <br />
            <label htmlFor="DOB" className="font-bold">
              Date of Birth:
            </label>
            <br />
            <input
              type="date"
              id="DOB"
              name="DOB"
              className="border border-black p-1 rounded-md w-full"
              onChange={handleChange}
              value={formData.DOB}
            />
            <br />
            <label htmlFor="course_name" className="font-bold">
              Course Name:
            </label>
            <br />
            <input
              type="text"
              id="Course_Name"
              name="course_name"
              className="border border-black p-1 rounded-md w-full"
              onChange={handleChange}
              value={formData.course_name}
            />
            <br />
            <label htmlFor="Duration" className="font-bold">
              Duration:
            </label>
            <br />
            <input
              type="text"
              id="Duration"
              name="duration"
              className="border border-black p-1 rounded-md w-full"
              onChange={handleChange}
              value={formData.duration}
            />
            <br />
            <label htmlFor="Number" className="font-bold">
              Mobile Number:
            </label>
            <br />
            <input
              type="number"
              id="Number"
              name="mobile_no"
              className="border border-black p-1 rounded-md w-full"
              onChange={handleChange}
              value={formData.mobile_no}
            />
            <br />
            <label htmlFor="Certificate_Number" className="font-bold">
              Certificate Number:
            </label>
            <br />
            <input
              type="text"
              id="Certificate_Number"
              name="certificate_no"
              className="border border-black p-1 rounded-md w-full"
              onChange={handleChange}
              value={formData.certificate_no}
            />
            <br />
            <div className="text-center mt-5">
              <button
                type="submit"
                onClick={submitForm}
                className="bg-pink-600 rounded-md p-1 text-white"
              >
                Generate Certificate
                {/* <Link to="/certificate/}"> Generate Certificate </Link> */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
