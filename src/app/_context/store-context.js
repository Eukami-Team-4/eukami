'use client';
//create a context to store regularly use data so that we don't have to make repeated calls to the database and that way we can update the data in one place and ensure it will propagate to all components that use the data
import { getCollections, getCustomers, getOrders, getProducts } from "@/lib/supabase/actions";
import { createContext, useContext, useEffect, useState } from "react";

export const StoreContext = createContext(undefined);

export const useStore = () => {
  const context = useContext(StoreContext);
  return context;
};
export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [collections, setCollections] = useState([]);
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);

  const store = {
    products,
    setProducts,
    collections,
    setCollections,
    orders,
    setOrders,
    customers,
    setCustomers,
  };

  // fetch data from server action and store it in the context
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts();
        setProducts(res);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    const fetchCollections = async () => {
      try {
        const res = await getCollections();
        setCollections(res);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    const fetchOrders = async () => {
      try {
        const res = await getOrders();
        setOrders(res);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    const fetchCustomers = async () => {
      try {
        const res = await getCustomers();
        setCustomers(res);
      } catch (error) {
        console.error("Failed to fetch customers:", error);
      }
    };

    fetchProducts();
    fetchCollections();
    fetchOrders();
    fetchCustomers();
  }, []);

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
