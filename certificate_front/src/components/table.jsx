import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

export function Table() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${url}/studentData/find`)
      .then((res) => {
        setData(res.data);
        setFilterData(res.data); // Set filterData initially with fetched data
      })
      .catch((err) => console.log("error fetching", err));
  }, []);

  const filteredData = (e) => {
    const searchItem = e.target.value.toLowerCase();
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchItem)
    );
    setFilterData(filtered);
  };

  return (
    <>
      <section>
        <div className="flex justify-center items-center">
          <div className="mt-5">
            <div className="flex justify-start">
              <input
                type="text"
                name="filtername"
                onChange={filteredData} // onChange with capital "C"
                placeholder="Search by Name"
                className="border border-black p-1 rounded-lg my-5"
              />
            </div>
            <div className="">
              <table className="border border-black">
                <thead className="">
                  <tr>
                    <th className="border border-black py-4 px-4 bg-pink-700 text-white">
                      Serial No
                    </th>
                    <th className="border border-black py-4 px-4 bg-pink-700 text-white">
                      Student Name
                    </th>
                    <th className="border border-black py-4 px-4 bg-pink-700 text-white">
                      Date of Birth
                    </th>
                    <th className="border border-black py-4 px-4 bg-pink-700 text-white">
                      Course Name
                    </th>
                    <th className="border border-black py-4 px-4 bg-pink-700 text-white">
                      Duration
                    </th>
                    <th className="border border-black py-4 px-4 bg-pink-700 text-white">
                      Mobile Number
                    </th>
                    <th className="border border-black py-4 px-4 bg-pink-700 text-white">
                      Certificate Number
                    </th>
                    <th className="border border-black py-4 px-4 bg-pink-700 text-white">
                      Certificate File
                    </th>
                    <th className="border border-black py-4 px-4 bg-pink-700 text-white">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filterData.map((d, i) => (
                    <tr key={i} className="border border-black">
                      <td className="border border-black p-4">{i + 1}</td>
                      <td className="border border-black p-4">{d.name}</td>
                      <td className="border border-black p-4">{d.DOB}</td>
                      <td className="border border-black p-4">
                        {d.course_name}
                      </td>
                      <td className="border border-black p-4">{d.duration}</td>
                      <td className="border border-black p-4">{d.mobile_no}</td>
                      <td className="border border-black p-4">
                        {d.certificate_no}
                      </td>
                      <td className="border border-black p-4">
                        <span className="bg-pink-700 p-2 text-white">
                          <Link to="">View Certificate</Link>
                        </span>
                      </td>
                      <td className="border border-black p-4 text-center">
                        <span className="bg-pink-700">
                          <FaTrash />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
