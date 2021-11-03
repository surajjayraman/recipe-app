import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchLunch(url) {
  const [dinnerData, setDinnerData] = useState(null);
  const [dinnerError, setDinnerError] = useState(null);
  const [dinnerLoading, setDinnerLoading] = useState(true);

  async function init() {
    try {
      const res = await axios.get(url);
      setDinnerData(res.data);
    } catch (e) {
      setDinnerError(e);
    } finally {
      setDinnerLoading(false);
    }
  }
  useEffect(() => {
    init();
  }, [url]);

  const refreshData = () => {
    init();
  };

  return { dinnerData, dinnerError, dinnerLoading, refreshData };
}
