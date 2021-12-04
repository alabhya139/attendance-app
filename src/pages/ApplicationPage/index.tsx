import React, { memo, useCallback, useEffect, useState } from "react";
import { useApplicantContext } from "../../providers/ApplicantProvider/context";
import {
  Container,
  Header,
  StyledAccountCircleIcon,
  StyledDataGrid,
  TableContainer,
  Title,
} from "./styles";
import { GridColumns } from "@mui/x-data-grid";
import { columnsData } from "./TableData";
import { getAge } from "../../utils/date.utils";

function ApplicationPage() {
  const { applicantList, isLoading } = useApplicantContext();
  const [columns, setColumns] = useState<GridColumns>([]);
  const [rows, setRows] = useState<any>();

  const renderColumn = useCallback(() => {
    const fetchedColumns: GridColumns = columnsData;
    setColumns(fetchedColumns);
  }, []);

  const renderRows = useCallback(() => {
    let fetchedRows = [];
    if (applicantList.length > 0) {
      fetchedRows = applicantList.map((applicant) => {
        return {
          ...applicant,
          birth_date: getAge(applicant.birth_date),
        };
      });
      setRows(fetchedRows);
    }
  }, [applicantList]);

  useEffect(() => {
    renderColumn();
    renderRows();
  }, [renderColumn, renderRows]);
  return (
    <Container>
      <Header>
        <StyledAccountCircleIcon fontSize="large" />
        <Title>Applications</Title>
      </Header>
      <TableContainer>
        <StyledDataGrid
          columns={columns}
          rows={rows}
          rowsPerPageOptions={[25, 50, 100]}
          loading={isLoading}
          autoPageSize={true}
          disableSelectionOnClick={true}
          disableColumnSelector={true}
        />
      </TableContainer>
    </Container>
  );
}

export default memo(ApplicationPage);
