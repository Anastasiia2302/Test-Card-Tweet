import axios from "axios";
import { useEffect, useState } from 'react';



export const Api = () => {
  // const DataLoading =  Loader(Users);
  
  const [apiState, setApiState] = useState(
    {
      loading: false,
      users: null,
      page: 1,
      per_page: 6,
}
  );
  
  useEffect(() => {
    const fetchUsers = async() => {
      setApiState({loading: true})
      const apiUrl = 'https://6454d7f2a74f994b334a82dd.mockapi.io/api/v1/users/';
      axios.get(apiUrl).then((resp) => {
        const allUsers = resp.data;
        setApiState({
          loading: false,
          users: allUsers,
        });
      });
    }
    fetchUsers()
  }, [setApiState]);

 
  return apiState;
}


