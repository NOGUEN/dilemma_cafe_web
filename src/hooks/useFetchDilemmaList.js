import { useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "./reducer";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const useFetchDilemmaList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        const res = await axios.get("https://cfqdnaomjctsvpoczwcm.supabase.co/rest/v1/Dilemma", {
          headers: {
            apikey: process.env.REACT_APP_API_KEY,
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
          },
        });

        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      } catch (err) {
        console.error("Failed to fetch data:", err);
        dispatch({ type: "FETCH_FAILURE", payload: err });
      }
    };

    fetchData();
  }, []);

  console.log("Fetched data:", state.data);
  console.log("Error:", state.error);

  return state;
};

export default useFetchDilemmaList;