import "../assets/styles/appContainer.css";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const HomeBody = () => {
  const [data1, setData1] = useState({});
  const [data2, setData2] = useState({});
  const [data3, setData3] = useState({});

  const [prevData, setPrevData] = useState({});


  useEffect(() => {
    axios.get('URL_DEL_BACKEND/data1')
      .then(response => {
        setPrevData(data1);
        setData1(response.data);
      })
      .catch(error => console.log(error));

    axios.get('URL_DEL_BACKEND/data2')
      .then(response => {
        setPrevData(data2);
        setData2(response.data);
      })
      .catch(error => console.log(error));

    axios.get('URL_DEL_BACKEND/data3')
      .then(response => {
        setPrevData(data3);
        setData3(response.data);
      })
      .catch(error => console.log(error));
  }, []);


  const getHeadingColor = (prevValue, currValue) => {
    const diff = Math.abs(currValue - prevValue);
    if (diff > 50) {
      return 'red';
    } else if (diff > 25) {
      return 'orange';
    } else {
      return 'white';
    }
  };


  /*
    useEffect(() => {
      axios.get('URL_DEL_BACKEND/data1')
        .then(response => setData1(response.data))
        .catch(error => console.log(error));
  
      axios.get('URL_DEL_BACKEND/data2')
        .then(response => setData2(response.data))
        .catch(error => console.log(error));
  
      axios.get('URL_DEL_BACKEND/data3')
        .then(response => setData3(response.data))
        .catch(error => console.log(error));
    }, []);
  */
  return (
  <body>
       <div className="container" style={{marginTop : "4rem"}}>
      <div className="row" style={{gap : "1rem", marginLeft : "1.5em"}}>
        <div className="col-md-4" style={{background : "#111f0d", textAlign : "center", color : "white", width : "25rem", borderRadius : "1em"}}>
          <h2>Humedad</h2>
          <div className="col-md-4">
            <h2 style={{ color: getHeadingColor(prevData.title, data1.title) }}>{data1.title}</h2>
            <p>{data1.description}</p>
          </div>
        </div>
        <div className="col-md-4"style={{background : "#111f0d", textAlign : "center", color : "white", width : "25rem", borderRadius : "1em"}} >
          <h2>Temperatura</h2>
          <div className="col-md-4">
            <h2 style={{ color: getHeadingColor(prevData.title, data2.title) }}>{data2.title}</h2>
            <p>{data2.description}</p>
          </div>
        </div>
        <div className="col-md-4" style={{background : "#111f0d", textAlign : "center", color : "white", width : "25rem" , borderRadius : "1em"}}>
          <h2>Presión</h2>
          <div className="col-md-4">
            <h2 style={{ color: getHeadingColor(prevData.title, data3.title) }}>{data3.title}</h2>
            <p>{data3.description}</p>
          </div>
        </div>
      </div>
    </div>
  </body>
   
  );
};

export default HomeBody;