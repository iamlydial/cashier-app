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
        // If the existing product is Green Tea, add 2 to the quantity
        if (existingProduct.id === 4) {
          existingProduct.quantity += 2; // Always add 2 for Green Tea
        } else {
          existingProduct.quantity += 1; // Add 1 for other products
        }
      } else {
        // For Green Tea, set initial quantity to 2; for other products, set to 1
        const initialQuantity = product.id === 4 ? 2 : 1;
        state.items.push({ ...product, quantity: initialQuantity });
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
