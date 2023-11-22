import React, { useEffect, useState } from 'react'
import { ReactDOM } from 'react'
import axios from 'axios';
import  Chart  from "react-apexcharts";
import StudentData from '../SchoolDetail/StudentData';
function Bygender()
{
    const [StudentDetail, setStudentDetail] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/fetch')
            .then(response => {
                setStudentDetail(response.data);  // Update state with fetched data
            })
            .catch(err => console.log("error in table react"));
            console.log(StudentDetail)
    }, [])

    let Male=0,Female=10;

    for(let i=0;i<StudentDetail.length;i++)
    {
        if(StudentDetail.studentGender==5) Male++;
    }

    
//    const [stdudentSubject, setStudentsubject]= useState([]);
//    const [studentMarks, setStudentMarks]= useState([]);

//    useEffect( ()=>{
//        const sSubject=[];
//        const sMarks=[];
//        const getStudentdata= async()=>{
//        const reqData= await fetch("http://localhost/reactgraphtutorial/marks");
//        const resData= await reqData.json();       
//        for(let i=0; i< resData.length; i++)
//        {
//         sSubject.push(resData[i].subject);
//         sMarks.push(parseInt(resData[i].marks));
//        }
//        setStudentsubject(sSubject);
//        setStudentMarks(sMarks);
//         //console.log(resData); 
//        }

//     getStudentdata();

//    },[]);

    return(
        <React.Fragment>
            <div className="container-fluid mb-3">
                <h3 className="mt-3">Welcome to Piechart Gender </h3>
                <Chart 
                type="pie"
                width={500}
                height={750}

                series={ [10,15,68,78,66,67,43,23] }                

                options={{
                        title:{ text:"Dropout according to area"
                        } , 
                       noData:{text:"Empty Data"},                        
                      // colors:["#f90000","#f0f"],
                      labels:['Ahmedabad','Vadodara','Surat','Jamnagar','Rajkot','Ghandinagar','Dang','Dahod']                     

                 }}
                >
                </Chart>
            </div>
            <div className="container-fluid mb-5">
        <h3 className="text-center mt-3 mb-3">Bar Chart in ReactJS</h3>

        <Chart
          type="bar"
          width={1380}
          height={700}
          series={[
            {
              name: "Social Media Subscriber",
              data: [Male,Female],
            },
          ]}
          options={{
            title: {
              text: "BarChar Developed by DevOps Team",
              style: { fontSize: 30 },
            },

            subtitle: {
              text: "This is BarChart Graph",
              style: { fontSize: 18 },
            },

            colors: ["#f90000"],
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: [
                "Male",
                "Female",
                
              ],
              title: {
                text: "Social Media User",
                style: { color: "#f90000", fontSize: 30 },
              },
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: ["#f90000"] },
              },
              title: {
                text: "User In (K)",
                style: { color: "#f90000", fontSize: 15 },
              },
            },

            legend: {
              show: true,
              position: "right",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["#f4f4f4"],
                fontSize: 15,
              },
            },
          }}
        ></Chart>
      </div>
        </React.Fragment>
    );
}
export default Bygender;