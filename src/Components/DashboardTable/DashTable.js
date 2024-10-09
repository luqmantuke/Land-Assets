import React, { useState } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Checkbox, Button } from "@chakra-ui/react";

const DashTable = ({ data, onRowClick }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxChange = (rowIndex) => {
    setSelectedRows((prevSelectedRows) => {
      const updatedSelectedRows = [...prevSelectedRows];
      if (updatedSelectedRows.includes(rowIndex)) {
        // If already selected, remove from the list
        const index = updatedSelectedRows.indexOf(rowIndex);
        updatedSelectedRows.splice(index, 1);
      } else {
        // If not selected, add to the list
        updatedSelectedRows.push(rowIndex);
      }
      return updatedSelectedRows;
    });
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedRows([]);
  };

  const handleRowClick = (rowData) => {
    if (onRowClick) {
      const plotData = data[0].reduce((obj, key, i) => ({ ...obj, [key]: rowData[i] }), {});
      onRowClick(plotData);
    }
  };

  return (
    <Box overflowX="auto" >
      <Table  variant='simple'  >
        <Thead>
          <Tr bg="#e3e3e3" borderBottom="0.1rem solid #aba9a9" borderTop="0.1rem solid #aba9a9">
            <Th>
              {/* Checkbox for selecting all rows */}
              <Checkbox bg='white' colorScheme="green" borderRadius='5px'  border='1px solid white' isChecked={selectAll} onChange={handleSelectAll} />
            </Th>
            {data[0].map((col, colIndex) => (
              <Th key={colIndex} color='black'>{col.toUpperCase()}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.slice(1).map((row, rowIndex) => (
            <Tr
              key={rowIndex}
              bg={"white"}
               color='black'
               fontWeight='bold'
              borderBottom="0.1rem solid #aba9a9"
              borderTop={rowIndex === 0 ? "1px" : "0px"}
              onClick={() => handleRowClick(row)}
              cursor="pointer"
            >
              <Td>
                {/* Checkbox for each data row */}
                <Checkbox
                  bg='#e3e3e3'
                  border='1px solid #e3e3e3'
                  borderRadius='5px'
                  colorScheme="green"
                  
                  isChecked={selectAll || selectedRows.includes(rowIndex)}
                  onChange={() => handleCheckboxChange(rowIndex)}
                />
              </Td>
              {row.map((col, colIndex) => (
                <Td key={colIndex} color={selectAll || selectedRows.includes(rowIndex) ? "primary" : "font_gray"} fontWeight='normal' p='15px' pl='20px' fontSize='13px'>
                  {/* If the column is specified as "status" */}
                  {data[0][colIndex].toLowerCase() === "status" ? (
                    <Button
                      variant="outline"
                      size="sm"
                      fontSize='12px'
                      fontWeight='normal'
                      width='80px'
                      borderWidth='2px'
                      borderRadius='0px'
                      borderColor={
                        col.toLowerCase().includes("pending")
                          ? "orange.500"
                          : col.toLowerCase().includes("overdue") || col.toLowerCase().includes("sold")
                          ? "red.500"
                          : "green.500"
                      }
                      color='font_gray'
                    >
                      {col}
                    </Button>
                  ) :
                   (
                    // If the column is specified as "details"
                     data[0][colIndex].toLowerCase() === "details" ? (
                      <Box bg="gray.200" p='2px' textAlign='center' borderRadius="5px">
                        {col}
                      </Box>
                    ) :  (
                    // Otherwise, just display the text
                    col

                  ))}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default DashTable;
