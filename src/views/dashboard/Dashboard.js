import React from "react";   
import Banner from "../../components/Banner.js";
import { CCard, CCardBody, CCardHeader, CRow } from '@coreui/react'
import { CChartBar } from '@coreui/react-chartjs' 
import consumablesData from "../../assets/consumables.json"

const Dashboard = () => {  
  // Filter the consumables data by type (liquids, pieces, weight)
  const liquids = consumablesData.filter(item => item.type === "ml");
  const pieces = consumablesData.filter(item => item.type === "piezas");
  const weight = consumablesData.filter(item => item.type === "gr");

  // Function to get stock data for the filtered consumables
  const getStockData = (filteredConsumables) => {
    return filteredConsumables.map(item => item.stock);
  };

  // Predefined colors for bars
  const liquidsColors = ['#FF6384', '#4BC0C0', '#FFCE56', '#41B883', '#E46651', '#00D8FF', '#DD1B16', '#36A2EB'];
  const piecesColors =  ['#FF6384', '#4BC0C0', '#FFCE56', '#41B883', '#E46651', '#00D8FF', '#DD1B16', '#36A2EB']; 
  const weightColors =  ['#FF6384', '#4BC0C0', '#FFCE56', '#41B883', '#E46651', '#00D8FF', '#DD1B16', '#36A2EB']; 

  // Function to return enough colors, repeating the array if necessary
  const getColors = (count, colors) => {
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(colors[i % colors.length]); // Repeats colors if count exceeds available colors
    }
    return result;
  };

  return (
    <CCard className="p-3"> 
      <Banner text="Dashboard"/> 
      <CRow>
        {/* Graph for Liquids (ml) */}
        <div>
          <CCard className="mb-4">
            <CCardHeader>Liquidos</CCardHeader>
            <CCardBody>
              <CChartBar
                data={{
                  labels: liquids.map(item => item.label),
                  datasets: [
                    {
                      label: 'Liquidos',
                      backgroundColor: getColors(liquids.length, liquidsColors), // Dynamically assigned colors
                      data: getStockData(liquids),
                    },
                  ],
                }}
                labels="consumablesData"
              />
            </CCardBody>
          </CCard>
        </div>

        {/* Graph for Pieces (piezas) */}
        <div>
          <CCard className="mb-4">
            <CCardHeader>Piezas</CCardHeader>
            <CCardBody>
              <CChartBar
                data={{
                  labels: pieces.map(item => item.label),
                  datasets: [
                    {
                      label: 'Pieza',
                      backgroundColor: getColors(pieces.length, piecesColors), // Dynamically assigned colors
                      data: getStockData(pieces),
                    },
                  ],
                }}
                labels="consumablesData"
              />
            </CCardBody>
          </CCard>
        </div>

        {/* Graph for Weight (gr) */}
        <div>
          <CCard className="mb-4">
            <CCardHeader>Peso</CCardHeader>
            <CCardBody>
              <CChartBar
                data={{
                  labels: weight.map(item => item.label),
                  datasets: [
                    {
                      label: 'Peso',
                      backgroundColor: getColors(weight.length, weightColors), // Dynamically assigned colors
                      data: getStockData(weight),
                    },
                  ],
                }}
                labels="consumablesData"
              />
            </CCardBody>
          </CCard>
        </div>
      </CRow>
    </CCard>
  );
};

export default Dashboard;
