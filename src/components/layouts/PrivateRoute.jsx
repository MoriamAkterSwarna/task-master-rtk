import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { setUser, toggleLoading } from "../../redux/features/user/userSlice";
import auth from "../../utils/firebase.config";
import Loading from "./Loading";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();

  // const isLoading = false;
  // const email = 'test@gmail.com';
  const { email, isLoading } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        dispatch(
          setUser({
            name: user.displayName,
            email: user.email,
          })
        );
        dispatch(toggleLoading(false));
      } else {
        dispatch(toggleLoading(false));
      }
    });
  }, []);
  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
