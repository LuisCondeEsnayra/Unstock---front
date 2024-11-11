import React, { useEffect, useState } from "react";
import {
  CCard,
  CProgress,
  CPagination,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CFormInput,
  CTableRow,
  CButton,
} from "@coreui/react";
import consumablesData from "../../assets/consumables.json";
import Pagination from "../Pagination";

const Consumables = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "ascending",
  });

  useEffect(() => {
    setData(consumablesData);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.provider.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = filteredData.sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const translations = {
    name: "nombre",
    provider: "proveedor",
    brand: "marca",
    quantity: "cantidad",
    price: "precio",
    stock: "stock",
    expirationDate: "fecha de expiración",
    status:"status"
  };
  const getStatus =(item)=>{
      if(item.stock < item.minimumQuantity ){
                    
        return <CButton color="danger"> {item.stock === 0 ? 'Agotado' : 'Insuficiente'} </CButton>
    }else{
                return <CButton color="success">Disponible</CButton>
                
            }
  }

  return (
    <CCard>
      <CFormInput
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-3"
      />
      <CTable align="middle" className="mb-0 border" hover responsive>
        <CTableHead className="text-nowrap">
          <CTableRow>
            {[
              "name",
              "provider",
              "brand",
              "quantity",
              "price",
              "stock",
              "expirationDate",
              "status"
            ].map((header, index) => (
              <CTableHeaderCell
                key={index}
                className="bg-body-tertiary text-center"
                onClick={() => handleSort(header)}
                style={{ cursor: "pointer" }}
              >
                {translations[header].charAt(0).toUpperCase() +
                  translations[header].slice(1)}
                {sortConfig.key === header
                  ? sortConfig.direction === "ascending"
                    ? " 🔼"
                    : " 🔽"
                  : null}
              </CTableHeaderCell>
            ))}
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {currentItems.map((item, index) => (
            <CTableRow key={index}>
              <CTableDataCell className="text-center">
                {item.name}
              </CTableDataCell>
              <CTableDataCell className="text-center">
                {item.provider}
              </CTableDataCell>
              <CTableDataCell className="text-center">
                {item.brand || "Generica"}
              </CTableDataCell>
              <CTableDataCell className="text-center">
                {item.quantity} {item.type || ""}
              </CTableDataCell>
              <CTableDataCell className="text-center">
                ${item.price}
              </CTableDataCell>
              <CTableDataCell className="text-center">
                {item.stock} {item.type || ""}
              </CTableDataCell>
              <CTableDataCell className="text-center">
                {item.expirationDate}
              </CTableDataCell>
              <CTableDataCell className="text-center">
                {getStatus(item)}
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </CCard>
  );
};

export default Consumables;
