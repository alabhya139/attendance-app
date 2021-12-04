import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Chip from "@mui/material/Chip";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TableContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
`;

export const StyledDataGrid = styled(DataGrid)`
  .MuiDataGrid-columnHeaderTitle {
    font-weight: 600;
    color: #616161;
  }
`;

export const StyledAccountCircleIcon = styled(AccountCircleIcon)`
  margin-right: 8px;
`;

export const Header = styled.div`
  padding: 16px;
  width: 80%;
  display: flex;
  justify-self: center;
  align-items: center;
`;

export const Title = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 24px;
`;

export const StyledChip = styled(Chip)``;
