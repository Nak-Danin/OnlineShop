import { createContext, useContext, useReducer, useEffect } from "react";

const WishlistContext = createContext();
export const useWishlist = () => useContext(WishlistContext);

const init = () => {
  const stored = localStorage.getItem("wishlist");
  return stored ? JSON.parse(stored) : [];
};

const WishlistReducer = (state, action) => {
  switch (action.type) {
    case "add":
      const existing = state.find(({ id }) => id === action.payload.id);
      if (existing) {
        return state.filter(({ id }) => id !== action.payload.id);
      } else {
        return [...state, { ...action.payload }];
      }
    case "remove":
      return state.filter(({ id }) => id !== action.payload);
    case "clear":
      return [];
    default:
      return state;
  }
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, dispatch] = useReducer(WishlistReducer, [], init);
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  const addToWishlist = (product) => {
    dispatch({ type: "add", payload: product });
  };
  const removeFromWishlist = (id) => {
    dispatch({ type: "remove", payload: id });
  };
  const clearWishlist = () => {
    dispatch({ type: "clear" });
  };
  const IsInWishlist = (id) => wishlist.some((item) => item.id === id);
  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        IsInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
