import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";

const RoutePaths = [
  { title: "홈", href: "/", page: <MainPage />, isNavItem: false },
  { title: "회원가입/로그인", href: "/login", page: <LoginPage />, isNavItem: true },
];

export default RoutePaths;