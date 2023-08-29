import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import pagos from "./columnas/pagos";
import edicion from "./columnas/modificaciones";
import ingresos from "./columnas/ingresos";

const Tabla = (props) => {
  return (
    <Box m="2vh">
      <Box
        m="0px 0 0 0"
        height="36vh"
        width="67vw"
        sx={{
          boxShadow: "1px 1px 9px rgba(0, 0, 0, 0.1)",
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell:hover": {
            cursor: "pointer",
          },
          "& .MuiDataGrid-cell": {
            border: "none",
            borderBottom: "none",
            backgroundColor: "#243144",
            color: "#c3c4c2",
          },
          "& .name-column--cell": {},
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "secondary.main",
            border: "none",
            borderBottom: "none",
            borderTopRightRadius: "5px",
            borderTopLeftRadius: "5px",
          },
          "& .MuiDataGrid-withBorderColor ": {
            border: "solid transparent 0px",
          },
          "& .MuiDataGrid-row": {
            border: "none",
            borderBottom: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            display: "",
            borderBottomRightRadius: "5px",
            borderBottomLeftRadius: "5px",
            backgroundColor: "secondary.main",
          },
        }}
      >
        {props.kind === "ingresos" ? (
          <DataGrid rows={props.props} columns={ingresos} />
        ) : props.kind === "pagos" ? (
          <DataGrid rows={props.props} columns={pagos} />
        ) : (
          <DataGrid rows={props.props} columns={edicion} />
        )}
      </Box>
    </Box>
  );
};

export default Tabla;
