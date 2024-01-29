import React, { useEffect } from "react";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import useStore from "./store";
import { Container, Typography, Box, Link } from "@mui/material";

const App = () => {
  const { items, fetchItems } = useStore();

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <Container
      sx={{
        textAlign: "center",
        marginTop: 4,
        backgroundColor: "#d1eef9",
        padding: 2,
        borderRadius: 8,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 2, color: "#145a7e" }}>
          CRUD App para
        </Typography>
        <Typography variant="h3" sx={{ marginBottom: 2 }}>
          <Link
            href="https://synergiart.com/"
            underline="none"
            color="#242b4c"
            target="_blank"
            sx={{
              "&:hover": {
                color: "blue",
              },
            }}
            title="Ir al sitio..."
          >
            Synergiart
          </Link>
        </Typography>
      </Box>
      <AddItem />
      <ItemList items={items} />
    </Container>
  );
};

export default App;
