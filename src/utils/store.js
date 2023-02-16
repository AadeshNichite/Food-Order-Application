import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

/*
1. Create store - using configureStore(import form rtk)
2. Provide store to any component using Provider (Provider from react-redux)
    -   <Provider store={store}></Provider>
3.create slice
    - create slice using 
        cardslice = createSlice({
            name:"",
            initialState:
            reducers: {
                addAction = (state,action) =>{
                state.items = action.payload
            }
            
        })

        export const { addAction,removeItem } = cardslice.actions;
        export default cardslice.reducer;

4. Put that slice in store
      import cartSlice from "./cartSlice";
      
      const store = configureStore({
            reducer: {
                cart: cartSlice,
                user: userSlice
            },
       });
       
5. To just see store data we have to use subscribe hook as given below
    --Import below at top--
    import { useSelector } from "react-redux";
    import store from "../utils/store";

    --use useSelector hook and subscribe the data and use it--
    const cartItems = useSelector((store) => store.cart.items);


6. to modify store we have to call addItme action call
    --Import below at top--
    import { useDispatch } from "react-redux";
    import { addItem } from "../utils/cartSlice";

    --Use like this in component--
    const dispatch = useDispatch();
    const handleAddItem = (restourant) => {
        dispatch(addItem(restourant));
    };

    --handleAddItem function call--
    <button
        className="bg-orange-500"
        onClick={() => handleAddItem(restourant)}
    >
        Add Item
    </button>
*/
