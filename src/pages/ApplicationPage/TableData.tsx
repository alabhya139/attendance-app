import React from "react";
import { GridColumns, GridRenderCellParams } from "@mui/x-data-grid";
import { StyledChip } from "./styles";

export const columnsData: GridColumns = [
  {
    field: "name",
    headerName: "Name",
    width: 180,
  },
  {
    field: "email",
    headerName: "Email",
    width: 180,
  },
  {
    field: "birth_date",
    headerName: "Age",
    width: 80,
  },
  {
    field: "year_of_experience",
    headerName: "Years of Experience",
    width: 180,
  },
  {
    field: "position_applied",
    headerName: "Position Applied",
    width: 180,
  },
  {
    field: "application_date",
    headerName: "Applied",
    width: 180,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params: GridRenderCellParams<any, any, any>) => {
      if (params.field === "status") {
        return renderChip(params.value);
      }
    },
  },
];

const renderChip = (status: string) => {
  switch (status) {
    case "rejected": {
      return <StyledChip label="Rejected" color="error" size="small" />;
    }
    case "approved": {
      return <StyledChip label="Approved" color="success" size="small" />;
    }
    case "waiting": {
      return <StyledChip label="Waiting" color="warning" size="small" />;
    }
    default:
      return status;
  }
};
