import React from "react";
import useStore from "../store";
import { Button } from "@mui/material";

const DeleteItem = ({ id, itemName }) => {
  const deleteItem = useStore((state) => state.deleteItem);

  const handleDeleteItem = () => {
    deleteItem(id);
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
      title={`Eliminar a ${itemName}`}
      onClick={handleDeleteItem}
    >
      Eliminar
    </Button>
  );
};

export default DeleteItem;
