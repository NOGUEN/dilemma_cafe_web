import RoutePaths from "./RoutePaths";

function getNavBarData() {
  return RoutePaths
  .filter(route => route.isNavItem === true)
  .map(route => ({
    titleText: route.title,
    href: route.href,
  }));
}

export default getNavBarData;