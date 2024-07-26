import { useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "./reducer";

const initialState = {
  data: null,
  loading: true,
  error: null,
  isVisible: false,
};

const useFetchDilemma = (dilemmaId) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const res = await axios.get(
          `https://cfqdnaomjctsvpoczwcm.supabase.co/rest/v1/rpc/get_dilemma_by_id?input_dilemma_id=${dilemmaId}`,
          {
            headers: {
              apikey: process.env.REACT_APP_API_KEY,
              Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            }
          }
        );
        
        console.log("API Response:", res.data[0]);

        if (res.data && Array.isArray(res.data)) {
          dispatch({ type: 'FETCH_SUCCESS', payload: res.data[0] });
        } else {
          dispatch({ type: 'FETCH_FAILURE', payload: "Invalid data format" });
        }
      } catch (err) {
        console.error("Fetch Error:", err);
        dispatch({ type: 'FETCH_FAILURE', payload: err.message });
      }
    };

    if (dilemmaId) {
      fetchData();
    }
  }, [dilemmaId]);

  return state;
};

export default useFetchDilemma;