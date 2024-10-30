import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      const existingProduct = state.items.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const product = action.payload;
      const existingProduct = state.items.find(item => item.id === product.id);
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          state.items = state.items.filter(item => item.id !== product.id);
        } else {
          existingProduct.quantity -= 1;
        }
      }
    },
    updateTotal(state, action) {
      state.total = action.payload;
    },
    clearCart(state){
      state.items = [];
      state.total = 0;
    }
  },
});

export const { addItem, removeItem, updateTotal, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
