import React from "react";
import { Button } from "@mui/material";
import useStore from "../store";

const UpdateItem = ({ id }) => {
  const updateItem = useStore((state) => state.updateItem);

  const handleUpdateItem = () => {
    const newName = prompt("Nuevo nombre:");
    if (newName !== null) {
      updateItem(id, newName);
    }
  };

  return (
    <Button
      variant="contained"
      size="small"
      style={{
        backgroundColor: "#001f3f",
        color: "#fff",
        marginLeft: "8px",
        minWidth: "auto",
      }}
      onClick={handleUpdateItem}
    >
      Actualizar
    </Button>
  );
};

export default UpdateItem;
