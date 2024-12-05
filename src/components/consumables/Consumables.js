import React, { useEffect, useState } from "react";
import {
  CCard,
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

const ExpirationButton = {
  good: {
    label: "Buen estado",
    color: { backgroundColor: "#198754" },
  },
  expired: {
    label: "Expirado",
    color: { backgroundColor: "#bb2d3b" },
  },
  aboutToExpire: {
    label: "Expira Pronto",
    color: { backgroundColor: "#ffca2c" },
  },
};

const Consumables = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "name", direction: "ascending" });
  const today = Date.now();

  // Load consumables data on component mount
  useEffect(() => {
    setData(consumablesData);
  }, []);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  // Filter data based on the search term
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.provider.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Helper function to compare status
  const getStatusSortValue = (item) => {
    const { stock, minimumQuantity } = item;
    if (stock === 0) return 0; // "Agotado"
    if (stock < minimumQuantity) return 1; // "Insuficiente"
    return 2; // "Disponible"
  };

  // Handle sorting
  const handleSort = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === "ascending" ? "descending" : "ascending";
    setSortConfig({ key, direction });
  };

  // Sort filtered data based on the sort config
  const getSortedData = () => {
    return filteredData.sort((a, b) => {
      if (sortConfig.key === "expiration" ) {
        if (a["expirationDate"] < b["expirationDate"]) return sortConfig.direction === "ascending" ? -1 : 1;
        if (a["expirationDate"] > b["expirationDate"]) return sortConfig.direction === "ascending" ? 1 : -1;}
      if (sortConfig.key === "status" ) {
        return (getStatusSortValue(a) - getStatusSortValue(b)) * (sortConfig.direction === "ascending" ? 1 : -1);
      }
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "ascending" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "ascending" ? 1 : -1;
      return 0;
    });
  };

  const sortedData = getSortedData();

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Translations for table headers
  const translations = {
    label: "nombre",
    provider: "proveedor",
    brand: "marca",
    quantity: "cantidad",
    price: "precio",
    stock: "stock",
    expirationDate: "fecha de expiración",
    status: "status",
    expiration: "caducidad",
  };

  // Get the status button based on stock quantity
  const getStatus = (item) => {
    const { stock, minimumQuantity } = item;
    if (stock === 0) return <CButton style={{ backgroundColor: "#bb2d3b" }} className="text-white">Agotado</CButton>;
    return stock < minimumQuantity
      ? <CButton color="danger">Insuficiente</CButton>
      : <CButton style={{ backgroundColor: "#198754" }} className="text-white">Disponible</CButton>;
  };

  const getExpiration = (item) => {
    const date = new Date(item.expirationDate).getTime() - today;
    let expirationStatus = "good";

    // Expired if date < 0
    if (date < 0) {
      expirationStatus = "expired";
    }
    // Expiring soon if less than 7 days
    else if (date < 604800000) { // 7 days in milliseconds
      expirationStatus = "aboutToExpire";
    }

    return (
      <CButton
        style={ExpirationButton[expirationStatus].color}
        className={expirationStatus !== "aboutToExpire" && "text-white"}
      >
        {ExpirationButton[expirationStatus].label}
      </CButton>
    );
  };

  return (
    <CCard className="p-3">
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
            {Object.keys(translations).map((header) => (
              <CTableHeaderCell
                key={header}
                className="bg-body-tertiary text-center"
                onClick={() => handleSort(header)}
                style={{ cursor: "pointer" }}
              >
                {translations[header].charAt(0).toUpperCase() + translations[header].slice(1)}
                {sortConfig.key === header && (sortConfig.direction === "ascending" ? " 🔼" : " 🔽")}
              </CTableHeaderCell>
            ))}
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {currentItems.map((item, index) => (
            <CTableRow key={index}>
              <CTableDataCell className="text-center">{item.label}</CTableDataCell>
              <CTableDataCell className="text-center">{item.provider}</CTableDataCell>
              <CTableDataCell className="text-center">{item.brand || "Generica"}</CTableDataCell>
              <CTableDataCell className="text-center">{item.quantity} {item.type || ""}</CTableDataCell>
              <CTableDataCell className="text-center">${item.price}</CTableDataCell>
              <CTableDataCell className="text-center">{item.stock} {item.type || ""}</CTableDataCell>
              <CTableDataCell className="text-center">{item.expirationDate}</CTableDataCell>
              <CTableDataCell className="text-center">{getStatus(item)}</CTableDataCell>
              <CTableDataCell className="text-center">{getExpiration(item)}</CTableDataCell>
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
