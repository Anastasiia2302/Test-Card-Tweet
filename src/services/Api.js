import axios from "axios";
import { useEffect, useState } from "react";

export const Api = () => {
  const [page, setPage] = useState(1);
  const [user, setUser] = useState([]);
 

  useEffect(() => {
    const controller = new AbortController();
    const fetchUsers = async () => {
      const apiUrl = `https://6454d7f2a74f994b334a82dd.mockapi.io/api/v1/users/?limit=3&page=${page}`;

      axios
        .get(apiUrl, {
          signal: controller.signal,
        })
        .then((resp) => {
          const allUsers = resp.data;

          setUser((prev) => [...prev, ...allUsers]);
          
         
        });
       
        
    };
   
    fetchUsers();
    return () => {
      controller.abort();
    };
    
  }, [page]);

  return [user, setPage];
};
