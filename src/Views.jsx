import { Route, Routes } from "react-router-dom";
import Account from "./components/Account";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import ProtectedRoutes from "./ProtectedRoutes";

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Route>
    </Routes>
  );
};

export default Views;
