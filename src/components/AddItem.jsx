import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import useStore from '../store';

const AddItem = () => {
  const [newItem, setNewItem] = useState('');
  const addItem = useStore((state) => state.addItem);

  const handleAddItem = () => {
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div>
      <TextField
        label="Nuevo item"
        variant="outlined"
        size="small"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <Button variant="contained" color="primary" style={{marginLeft:"1rem"}} onClick={handleAddItem} title="Agregar un nuevo elemento">
        Agregar
      </Button>
    </div>
  );
};

export default AddItem;
