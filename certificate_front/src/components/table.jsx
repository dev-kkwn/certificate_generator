import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import axios from "axios";

export function Table() {
  const [data, SetData] = useState([]);

  const url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${url}`)
      .then((res) => SetData(res.data))
      .catch((err) => console.log("error fetching", err));
  }, []);

  return (
    <>
      <section>
        <div>
          <input
            type="text"
            name="filtername"
            placeholder="Search by Name"
            className="border border-black p-1 rounded-lg"
          />
        </div>
        <div>
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
              {data.map((d, i) => (
                <tr key={i} className="border border-black">
                  <td className="border border-black">{d.name}</td>
                  <td className="border border-black">{d.DOB}</td>
                  <td className="border border-black">{d.course_name}</td>
                  <td className="border border-black">{d.duration}</td>
                  <td className="border border-black">{d.mobile_no}</td>
                  <td className="border border-black">{d.certificate_no}</td>
                  <td className="border border-black">{d.file}</td>
                  <td className="border border-black">
                    <span>
                    <FaTrash />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
