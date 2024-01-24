// // import React, { useState } from "react";
// // import Table from "@mui/material/Table";
// // import TableBody from "@mui/material/TableBody";
// // import TableCell from "@mui/material/TableCell";
// // import TableHead from "@mui/material/TableHead";
// // import TableRow from "@mui/material/TableRow";
// // import { TableProps } from "../Interfaces/ItemInterface";
// // import usePagination from "../Hooks/useTablePagination";
// // import PaginationComponents from "./Pagination";
// // import useTableFilter from "../Hooks/useTableFilter";
// // import { useNavigate } from "react-router-dom";
// // import {
// //     TextFieldStyle,
// //     TypographyStyle,
// //     TableContainerStyle,
// //     TableRowStyle,
// //     TableCellStyle,
// //     ButtonStyle
// // } from "./Style";
// // import { generatePath } from './GeneratePath'
// // import APP_ROUTES from "../Constant/Routes";

// // import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// // import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// // import { LocalizationProviderStyle } from "./Style";

// // const CustomTable: React.FC<TableProps> = ({ headers }) => {
// //     const { page, handleChangePage, setCurrentPage } = usePagination();
// //     const { filterData, searchStr, setSearchStr } = useTableFilter();
// //     const navigate = useNavigate();
// //     const [searchDate, setSearchDate] = useState<Date | null>(null);

// //     return (
// //         <React.Fragment>
// //             <TextFieldStyle
// //                 id="standard-basic"
// //                 label="Search By Name"
// //                 variant="standard"
// //                 value={searchStr}
// //                 onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => {
// //                     setSearchStr(e.target.value);
// //                     setCurrentPage(0);
// //                 }}
// //             ></TextFieldStyle>

// //                 <div>
// //                 <LocalizationProviderStyle dateAdapter={AdapterDayjs}>
// //                     <DatePicker value={searchDate}
// //                         onChange={(date) => {
// //                             setSearchDate(date);
// //                             setCurrentPage(0);
// //                         }} />
// //                 </LocalizationProviderStyle>
// //                 </div>

// //             <PaginationComponents
// //                 data={filterData}
// //                 page={page}
// //                 handleChangePage={handleChangePage}
// //             />
// //             <TypographyStyle variant="h2">Table</TypographyStyle>
// //             <TableContainerStyle>
// //                 <Table>
// //                     <TableHead>
// //                         <TableRowStyle>
// //                             {headers.map((header) => (
// //                                 <TableCellStyle key={header}>{header}</TableCellStyle>
// //                             ))}
// //                         </TableRowStyle>
// //                     </TableHead>
// //                     <TableBody>
// //                         {filterData

// //                             .filter((item) => {
// //                                 if (searchDate) {
// //                                     const selectedDateFormatted = new Date(Number(item.date) * 1000);
// //                                     const selectedDate = new Date(searchDate);
// //                                     return (
// //                                         selectedDate.getDate() === selectedDateFormatted.getDate() &&
// //                                         selectedDate.getMonth() === selectedDateFormatted.getMonth() &&
// //                                         selectedDate.getFullYear() === selectedDateFormatted.getFullYear()
// //                                     );
// //                                 }
// //                                 else {
// //                                     return true;
// //                                 }
// //                             })

// //                             .slice(page * 5, page * 5 + 5).map((Data) => (
// //                                 <TableRow key={Data.id}>
// //                                     {Object.keys(Data).map((key) => (
// //                                         <TableCell key={key}>{Data[key]}</TableCell>
// //                                     ))}
// //                                     <ButtonStyle onClick={() => navigate(generatePath(APP_ROUTES.DETAILS_PAGE, { id: Data.id }))}>Description</ButtonStyle>
// //                                 </TableRow>
// //                             ))}
// //                     </TableBody>
// //                 </Table>
// //             </TableContainerStyle>
// //         </React.Fragment>
// //     );
// // };
// // export default CustomTable;
// //.....................................................end

import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableProps } from "../Interfaces/ItemInterface";
import usePagination from "../Hooks/useTablePagination";
import PaginationComponents from "./Pagination";
import useTableFilter from "../Hooks/useTableFilter";
import { useNavigate } from "react-router-dom";
import {
    TextFieldStyle,
    TypographyStyle,
    TableContainerStyle,
    TableRowStyle,
    TableCellStyle,
    ButtonStyle
} from "./Style";
import { generatePath } from "./GeneratePath";
import APP_ROUTES from "../Constant/Routes";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProviderStyle } from "./Style";
import { filterAndSliceData } from "../Hooks/useDateFilter";
import  DatePickerComponent  from "./DateComponent"
const CustomTable: React.FC<TableProps> = ({ headers }) => {
    const { page, handleChangePage, setCurrentPage } = usePagination();
    const { filterData, searchStr, setSearchStr } = useTableFilter();
    const navigate = useNavigate();
    const [searchDate, setSearchDate] = useState<Date | null>(null);
    const filteredAndSlicedData = filterAndSliceData(filterData,searchDate,page);

    return (
        <React.Fragment>
            <TextFieldStyle
                id="standard-basic"
                label="Search By Name"
                variant="standard"
                value={searchStr}
                onChange={(e: { target: { value: React.SetStateAction<string> } }) => {
                    setSearchStr(e.target.value);
                    setCurrentPage(0);
                }}
            ></TextFieldStyle>
            
            {/* <div>
                <LocalizationProviderStyle dateAdapter={AdapterDayjs}>
                    <DatePicker
                        value={searchDate}
                        onChange={(date) => {
                        setSearchDate(date);
                        setCurrentPage(0);
                        }}
                    />
                </LocalizationProviderStyle>
            </div> */}
            <DatePickerComponent
                   searchDate={searchDate}
                   setSearchDate={setSearchDate}
                   setCurrentPage={setCurrentPage}
                  />


            <PaginationComponents
                data={filterData}
                page={page}
                handleChangePage={handleChangePage}
            />
            <TypographyStyle variant="h2">Table</TypographyStyle>
            <TableContainerStyle>
                <Table>
                    <TableHead>
                        <TableRowStyle>
                            {headers.map((header) => (
                                <TableCellStyle key={header}>{header}</TableCellStyle>
                            ))}
                        </TableRowStyle>
                    </TableHead>
                    <TableBody>
                        {filteredAndSlicedData
                        .map((Data) => (
                            <TableRow key={Data.id}>
                                {Object.keys(Data).map((key) => (
                                    <TableCell key={key}>{Data[key]}</TableCell>
                                ))}
                                <ButtonStyle
                                    onClick={() =>
                                        navigate(generatePath(APP_ROUTES.DETAILS_PAGE, { id: Data.id }))
                                    }
                                >
                                    Description
                                </ButtonStyle>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainerStyle>
        </React.Fragment>
    );
};

export default CustomTable;



