import { create } from 'zustand';
import axios from 'axios';

const URL_BASE = "https://nodejs-production-249a.up.railway.app"

const useStore = create((set) => ({
  items: [],
  fetchItems: async () => {
    try {
      const response = await axios.get(`${URL_BASE}/api/items`);
      set({ items: response.data });
    } catch (error) {
      console.error('Error al obtener elementos:', error);
    }
  },
  addItem: async (newItem) => {
    try {
      const response = await axios.post(`${URL_BASE}/api/items`, { name: newItem });
      set((state) => ({ items: [...state.items, response.data] }));
    } catch (error) {
      console.error('Error al agregar elemento:', error);
    }
  },
  updateItem: async (id, newName) => {
    try {
      const response = await axios.put(`${URL_BASE}/api/items/${id}`, { name: newName });
      set((state) => ({
        items: state.items.map((item) => (item.id === id ? { ...item, name: response.data.name } : item)),
      }));
    } catch (error) {
      console.error('Error al actualizar elemento:', error);
    }
  },
  deleteItem: async (id) => {
    try {
      await axios.delete(`${URL_BASE}/api/items/${id}`);
      set((state) => ({ items: state.items.filter((item) => item.id !== id) }));
    } catch (error) {
      console.error('Error al eliminar elemento:', error);
    }
  },
}));

export default useStore;
