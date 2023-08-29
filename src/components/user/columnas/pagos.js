const pagos = [
  {
    field: "id",
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    width:140,
  },
  {
    field: "fecha",
    headerName: "Fecha de pago",
    headerAlign: "center",
    align: "center",
    width:200,
  },
  {
    field: "tarjeta",
    headerName: "Tarjeta",
    headerAlign: "center",
    align: "center",
    width:400,
  },
  {
    field: "cantidad",
    headerName: "Cantidad",
    headerAlign: "center",
    align: "center",
    width:200,
  },
  {
    field: "aceptado",
    headerName: "Estado del pago",
    type: "boolean",
    headerAlign: "right",
    align: "right",
    width:200,
  },
];
export default pagos;
