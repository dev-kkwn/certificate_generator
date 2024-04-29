import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { Document, Page } from "react-pdf";

export function Table() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  // const [pdfUrl, SetPdfUrl] = useState("");

  const url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${url}/studentData/find`)
      .then((res) => {
        setData(res.data);
        setFilterData(res.data); // Set filterData initially with fetched data
        //  let file=res.data.profile
        // console.log(data.profile);
      })
      .catch((err) => console.log("error fetching", err));
  }, []);

  let file = data.profile;

  const filteredData = (e) => {
    const searchItem = e.target.value.toLowerCase();
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchItem)
    );
    setFilterData(filtered);
  };

  const PDFViewer = () => {
    const pdfURL = `${file}`;
    console.log("working");
    return (
      <div>
        <Document file={pdfURL}>
          <Page pageNumber={1} />
        </Document>
      </div>
    );
  };
  // const viewCertificate = (certificateId) => {
  //   window.open(`${url}/certificate/${certificateId}`, "_blank");
  // };

  // const downloadPdf = () => {
  //   window.location.href = `${url}/`
  // }

  // const srcPath = data.profile;

  // const viewCertificate = async (certificateno) => {
  //   try {
  //     const response = await axios.get(`${url}/certificate/${certificateno}`, {
  //       responseType: "blob", // Response type set to blob
  //     });
  //     const pdfBlob = new Blob([response.data], { type: "application/pdf" });
  //     const pdfUrl = URL.createObjectURL(pdfBlob);
  //     SetPdfUrl(pdfUrl);
  //   } catch (error) {
  //     console.error("Error fetching PDF:", error);
  //   }
  // };

  return (
    <>
      <section>
        <div className="flex justify-center items-center">
          <div className="mt-5">
            <div className="flex justify-start">
              <input
                type="text"
                name="filtername"
                onChange={filteredData} 
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
                        <span
                          className="bg-pink-700 p-2 text-white"
                          onClick={PDFViewer}
                        >
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
