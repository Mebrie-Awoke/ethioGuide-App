import React, { createContext, useEffect, useState } from "react";
import { WishlistProducts } from "@/assets/images/categories/asset";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchWishlist = async () => {
    setLoading(true);
    setFavorites(WishlistProducts);
    setLoading(false);
  }

  const toggleFavorite = (item) => {
    const exists = favorites.find((fav) => fav.id === item.id);
    setFavorites((prev) =>{
      if (exists) {
        return prev.filter((fav) => fav.id !== item.id);
      } else {
        return [...prev, item];
      }
    }) 
  };
  
  const isFavorite = (item) => {
    return favorites.some((fav) => fav.id === item.id);
  }

  useEffect(() => {
    fetchWishlist();
  }, []);


  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite , isFavorite, loading}}>
      {children}
    </FavoritesContext.Provider>
  );
};

export function useFavorites() {
  const context = React.useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}