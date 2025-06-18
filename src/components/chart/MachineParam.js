import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { Spin, Typography } from "antd";
import axios from "axios";
import { baseURL } from "../../API/API";

function MachineParam() {
  const { Title } = Typography;
  const [totalData, setTotalData] = useState([]);
  const [chartOptions, setChartOptions] = useState({});
  const [chartSeries, setChartSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const localItems = localStorage.getItem("PlantData");
  const localPlantData = JSON.parse(localItems);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${baseURL}params_graph/?plant_id=${localPlantData?.id}`);
        if (res?.data?.results?.length > 0) {
          const modifiedData = res.data.results.map(item => ({
            ...item,
            date_time: item.date_time.split("T")[0]
          }));
          setTotalData(modifiedData);
        } else {
          setTotalData([]);
        }
      } catch (error) {
        console.error("Error fetching machine parameters:", error);
        setTotalData([]);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    if (totalData?.length === 0) return;

    const groupedData = {};
    totalData.forEach(item => {
      const date = item.date_time;
      if (!groupedData[date]) {
        groupedData[date] = {};
      }
      if (!groupedData[date][item.parameter]) {
        groupedData[date][item.parameter] = 0;
      }
      groupedData[date][item.parameter] += parseFloat(item.defect_percentage);
    });

    const categories = Object.keys(groupedData);
    const allParameters = new Set(totalData.map(item => item.parameter));

    const seriesData = Array.from(allParameters).map(parameter => ({
      name: parameter,
      data: categories.map(date => Math.round(groupedData[date][parameter] || 0))
    })).filter(series => series.data.some(count => count > 0));
    

    setChartSeries(seriesData);

    const chartOptions = {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: { show: false },
        zoom: { enabled: true }
        
      },
      grid: {
        show: false,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        }
      }
      ,
      
      xaxis: {
        categories: categories
      },
      colors: ['#5190dd'], // all bars will be blue
      yaxis: {
        labels: {
          formatter: val => Math.round(val)
        }
      },
      legend: {
        position: "bottom",
        offsetY: 0
      },
      fill: { opacity: 1 }
    };
    
    setChartOptions(chartOptions);
  }, [totalData]);

  return (
    <div>
      <h4>Real-Time Manufacturing DPMU</h4>
      {loading ? (
        <div style={{ textAlign: "center", padding: "40px" , justifyContent:"center", alignItems:"center" }}>
          <Spin size="large" tip="Loading data..." />
        </div>
      ) : (
        <div style={{ overflowX: "auto" }}>
        <div style={{ width: totalData.length > 15 ? `${totalData.length * 60}px` : "100%" }}>
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height={350}
          />
        </div>
      </div>
    
      )}
    </div>
  );
}


export default MachineParam;
