import React, { useState, useEffect } from "react";
import { List, ListItem, Typography, Box } from "@mui/material";
import axios from "axios";
import UpdateItem from "./UpdateItem";
import DeleteItem from "./DeleteItem";
import useStore from "../store";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateItem = useStore((state) => state.updateItem);
  const deleteItem = useStore((state) => state.deleteItem);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://nodejs-production-249a.up.railway.app/");
        setItems(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Typography>Cargando...</Typography>;
  }

  return (
    <Box sx={{ margin: "auto", marginTop: "1rem", maxWidth: 400 }}>
      <List>
        {items.map((item) => (
          <ListItem key={item.id}>
            <Typography
              key={`typography-${item.id}`}
              sx={{
                fontSize: "1.2rem",
                fontFamily: "Arial, sans-serif",
                color: "#001f3f",
                minWidth: "20rem",
              }}
            >
              🧷{item.name}
            </Typography>
            <UpdateItem
              key={`update-${item.id}`}
              id={item.id}
              onUpdate={(newName) => updateItem(item.id, newName)}
            />
            <DeleteItem
              key={`delete-${item.id}`}
              id={item.id}
              onDelete={() => deleteItem(item.id)}
              itemName={item.name}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ItemList;
