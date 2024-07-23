import DilemmaPage from "../pages/DilemmaPage";
import MainPage from "../pages/MainPage";

const RoutePaths = [
  { title: "홈", href: "/", page: <MainPage />, isNavItem: false },
  { title: "딜레마", href: "/dilemma", page: <DilemmaPage />, isNavItem: false },
];

export default RoutePaths;