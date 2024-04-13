import { useEffect, useState } from "react";
import axios from "axios";
import certificateLogo from "../assets/Whytap course completion certificate-04.png";
import whyLogo from "../assets/Whytap course completion certificate-05.png";
import yglobaliso from "../assets/Whytap course completion certificate-06.png";
import ygloballogo from "../assets/whyglobal-logo-services-02.png";
import ceosign from "../assets/Signature-removebg-preview.png";
import mdsign from "../assets/WhatsApp_Image_2024-04-12_at_11.31.41_AM-removebg-preview.png";
import { useParams } from "react-router-dom";

function Certificate() {
  // const [inputData, SetInputData] = useState({
  //   name: "",
  //   course_name: "",
  //   duration: "",
  //   certificate_no: "",
  // });
  const { id } = useParams();

  const [inputData, SetInputData] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  // const handleForm = (e) => {
  //   const { name, value } = e.target;
  //   SetInputData({ ...inputData, [name]: value });
  // };

  // useEffect(() => {
  //   axios
  //     .get(`${apiUrl}/studentData/entry/${localStorage.getItem("mongoId")}`, inputData)
  //     .then((res) => SetInputData(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    SetInputData(axios.get(`${apiUrl}/studentData/entry`).inputData);
    console.log("error receiving");
  }, []);

  return (
    <>
      <section className="flex justify-center w-full">
        {/* <div> */}
        <div className="bg-image w-3/5">
          <div className="flex flex-col justify-evenly items-center">
            <img
              src={certificateLogo}
              className="w-3/5"
              alt="certificate logo"
            />
            {/* <div className=""> */}
            <h1 className="text-2xl text-cente my-10 text-yellow-600 font-semibold">
              Why Tap
            </h1>
            <div className="bg-pink-700 w-96 p-2 text-white text-3xl text-center uppercase">
              <span className="">{ inputData.name}</span>
            </div>
            
            {/* <div className="text-xl my-6">Certificate Number</div> */}
            {/* <div className="text-xl my-6">6 Months</div> */}
            <div className="text-xl my-6 text-red-800">
              has been awarded the Post Graduate certificate with Merit in
              {inputData.course_name}
            </div>
            <div className="text-xl my-6">Months of awarding date</div>
            {/* <div className="text-xl my-6">FSD-Full Stack Development</div> */}
            {/* </div> */}

            {/* Logos parent */}
            <div className="logo-parent flex justify-evenly items-center">
              {/* MD text */}
              <div className="md-parent">
                {/* <div className="text-2xl text-center">Signature</div> */}
                <img src={mdsign} alt="MDsign" className="w-3/4" />
                <hr className="border border-black" />
                <div className="text">
                  <p className="font-bold text-xl">Bindhu Selvakumar</p>
                  <p className="font-bold text-gray-500 text-center">
                    Managing Director
                  </p>
                </div>
              </div>
              {/*Why logo */}

              <img src={whyLogo} className="w-2/5" alt="why logo" />

              {/* CEO Text */}
              <div className="ceo-parent">
                {/* <div className="text-2xl text-center">Signature</div> */}
                <img src={ceosign} alt="ceosign" className="w-3/4" />
                <hr className="border border-black" />
                <div className="text">
                  <p className="text-xl font-bold">Sathishkumar Kannan</p>
                  <p className="text-center font-bold text-gray-500">CEO</p>
                </div>
              </div>
            </div>
            {/* logos close */}

            {/* iso and global logo */}
            <div className="isoLogo flex items-center justify-center">
              {/* <div className="yGlobal"> */}
              <img src={ygloballogo} alt="yGlobal" className="w-2/5" />
              {/* </div> */}
              {/* <div className="yglobaliso"> */}
              <img src={yglobaliso} alt="isoicon" className="w-1/5" />
              {/* </div> */}
            </div>
          </div>
          <h1 className="text-pink-700 font-semibold">
            REG.No:{inputData.certificate_no}
          </h1>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}

export default Certificate;
