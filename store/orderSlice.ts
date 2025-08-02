import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface OrderItem {
  customer: {
    address: string;
    name: string;
    phone: number;
  };
  totalItems: number;
  totalAmount: string;
  orderDate: string;
  orderId: number;
}

interface OrderState {
  items: OrderItem[];
}

const initialState: OrderState = {
  items: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<OrderItem>) => {
      state.items.push(action.payload); 
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
