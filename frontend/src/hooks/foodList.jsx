import React, { useEffect, useState } from "react";
function useFoodList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let fetchFoodList = async () => {
    try {
      const result = await fetch("http://localhost:4000/api/food/list");
      const data = await result.json();
      setData(data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFoodList();
  }, []);

  return { data, isLoading };
}

export default useFoodList;
