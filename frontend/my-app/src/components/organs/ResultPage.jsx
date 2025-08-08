import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import DateNavigator from '../atoms/DateNavigator';
import { SmallCard, BigCard } from '../molecules/Card';
import Graph from '../molecules/Graph';
import axios from 'axios';
import "../../styles/ResultPage.css";
import logo from "../../../public/goindigo-img.png";

const ResultPage = () => {
  const { code } = useParams(); // dynamically get airport code like 'DEL'
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [stationData, setStationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const formattedDate = selectedDate.toISOString().split('T')[0];

        // This will fail gracefully if your backend isn't ready
        const res = await axios.get(`/api/station-data?airport=${code}&date=${formattedDate}`);
        setStationData(res.data);
      } catch (err) {
        console.warn('No data found or backend not ready yet.');
        setStationData(null); // fallback to null
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedDate, code]);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <div className="result-page-container">
      <div className="heading">
        <Link to="/">
          <img src={logo} alt="IndiGo Logo" />
        </Link>
        <h2>Station: {code?.toUpperCase()}</h2>
      </div>
        

        {loading ? (
          <p>Loading data...</p>
        ) : stationData ? (
          <div className="main-layout">
            <div className="left-section">
              <Graph title="Flight Overview" />
              <Graph title="AME Deployment" />
            </div>

            <div className="right-section">
              <DateNavigator selectedDate={selectedDate} onChange={handleDateChange} />

              <BigCard title="No. of Flights" value={stationData?.flights || '-'} />
              <BigCard title="Total AMEs" value={stationData?.totalAMEs || '-'} />
              <BigCard title="Total Technician" value={stationData?.totalTechnicians || '-'} />

              <SmallCard
                title1="Requested AMEs"
                value1={stationData?.requestedAMEs || '-'}
                title2="Required AMEs"
                value2={stationData?.requiredAMEs || '-'}
              />
            </div>
          </div>
        ) : (
          <div style={{ marginTop: "2rem" }}>
            <p>No data available for this station or date.</p>
          </div>
        )}
    </div>
  );
}

export default ResultPage;
