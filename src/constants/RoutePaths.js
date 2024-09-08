import DilemmaPage from "../components/pages/DilemmaPage";
import MainPage from "../components/pages/MainPage";
import DilemmaListPage from "../components/pages/DilemmaListPage";

const RoutePaths = [
  { title: "홈", href: "/", page: <MainPage />, isNavItem: false },
  { title: "딜레마", href: "/dilemma/:dilemmaId", page: <DilemmaPage />, isNavItem: false },
  { title: "전체 딜레마", href: "/dilemma", page: <DilemmaListPage />, isNavItem: false },
];

export default RoutePaths;