import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { datosFalsos } from "../../data/datosFalsos";
import { useNavigate } from "react-router-dom";

const UserBoard = () => {
  const navigate = useNavigate();

  const click = async (user) => {
    navigate(`/user/id/${user.id}`);
  };

  const columns = [
    { field: "id", headerName: "ID", headerAlign: "center", align: "center" },
    {
      field: "name",
      headerName: "Nombre",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "lastName",
      headerName: "Apellido",
      flex: 1,

      headerAlign: "center",
      align: "center",
    },
    {
      field: "dni",
      headerName: "DNI",
      type: "number",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "born",
      headerAlign: "center",
      align: "center",
      headerName: "Nacimiento",
      flex: 1,
    },
    {
      field: "phone",
      headerAlign: "center",
      align: "center",
      headerName: "Numero celular",
      flex: 1,
    },
    {
      field: "email",
      headerAlign: "center",
      align: "center",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "planStatus",
      headerAlign: "center",
      align: "center",
      headerName: "Plan Activo",
      cellClassName: "name-column--cell",
      type: "boolean",
      flex: 1,
    },
    {
      field: "acces",
      headerAlign: "center",
      align: "center",
      headerName: "Tipo de plan",
      flex: 1,
    },
    {
      field: "vigencia",
      headerAlign: "center",
      align: "center",
      headerName: "Proximo cobro",
      flex: 1,
    },
  ];

  const handleRowClick = (user) => {
    click(user);
  };

  return (
    <Box
      m="4vh 0 0 0 "
      display="flex"
      flexDirection="column"
      sx={{ width: "68vw" }}
    >
      <Box
        m="0"
        height="39vh"
        data-aos="fade-up"
        data-aos-delay="600"
        sx={{
          boxShadow: "0px 7px 9px rgba(0, 0, 0, 0.3)",
          "& .MuiDataGrid-root": {
            border: "none",
            borderRadius: "5px",
          },
          "& .MuiDataGrid-cell:hover": {
            cursor: "pointer",
          },
          "& .MuiDataGrid-cell:focus": {
            outline: "red",
          },
          "& .MuiDataGrid-cell": {
            backgroundColor: "#243144",
            border: "none",
            borderBottom: "none",
            color: "#c3c4c2",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "secondary.main",
            borderTopRightRadius: "5px",
            borderTopLeftRadius: "5px",
            border: "none",
            borderBottom: "none",
          },
          "& .MuiDataGrid-withBorderColor ": {
            border: "solid transparent 0px",
          },
          "& .MuiDataGrid-row": {
            border: "none",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {},
          "& .MuiDataGrid-footerContainer": {
            border: "none",
            borderBottomRightRadius: "5px",
            borderBottomLeftRadius: "5px",
            borderTop: "none",
            backgroundColor: "secondary.main",
          },
        }}
      >
        <DataGrid
          onRowClick={handleRowClick}
          rows={datosFalsos}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default UserBoard;
