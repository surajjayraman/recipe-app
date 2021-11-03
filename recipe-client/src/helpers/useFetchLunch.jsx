import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchLunch(url) {
  const [lunchData, setLunchData] = useState(null);
  const [lunchError, setLunchError] = useState(null);
  const [lunchLoading, setLunchLoading] = useState(true);

  async function init() {
    try {
      const res = await axios.get(url);
      setLunchData(res.data);
    } catch (e) {
      setLunchError(e);
    } finally {
      setLunchLoading(false);
    }
  }
  useEffect(() => {
    init();
  }, [url]);

  const refreshData = () => {
    init();
  };

  return { lunchData, lunchError, lunchLoading, refreshData };
}
