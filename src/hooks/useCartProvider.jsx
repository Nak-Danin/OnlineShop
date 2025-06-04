import { createContext, useContext, useReducer } from 'react'

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const cartReducer = (state, action) => {
    switch(action.type){
        case 'add': 
            const existing = state.find(({id}) => id == action.payload.id)
            if(existing){
                return state.map((item) => 
                    item.id === action.payload.id? {...item, quantity: item.quantity + 1} : item
                )
            }else{
                return [...state, {...action.payload, quantity: 1}];
            }
        case 'remove': 
            return state.filter(({id}) => id !== action.payload);
        case 'clear': 
            return [];
        case 'increase':
            return state.map((item) =>
                item.id === action.payload ? {...item, quantity: item.quantity + 1} : item 
            )
        case 'decrease':
            return state.map((item) => 
                item.id === action.payload && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item
            )
        default: 
            return state;
    }
}

export const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer, []);
    const addToCart = (product) => {
        dispatch({type: "add", payload: product})
    }
    const removeFromCart = (id) => {
        dispatch({type: "remove", payload: id})
    }
    const clearCart = () => {
        dispatch({type: "clear"})
    }
    const increaseQty = (id) => {
        dispatch({type: "increase", payload: id})
    }
    const decreaseQty = (id) => {
        dispatch({type: "decrease", payload: id})
    }
  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, increaseQty, decreaseQty}}>
        {children}
    </CartContext.Provider>
  )
}