import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userReducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export const useSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const signup = async (name, email, password) => {
    setLoading(true);
    setError(false);

    try {
      const res = await axios.post(
        import.meta.env.VITE_API_URL + "/user/signup",
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));

        dispatch(setUser(res.data));

        setLoading(false);
        setError(false);

        toast.success("Signup successful!");

        if (!loading && !error) {
          navigate("/");
        }
      }
    } catch (error) {
      setLoading(false);
      setError(error);
      toast.error(error.response.data.error || "An error occurred!");
    }
  };
  return { signup, loading, error };
};
