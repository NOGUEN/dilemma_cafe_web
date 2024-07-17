import NavigationBar from "../components/NavigationBar";
import getNavBarData from "../constants/NavBarData";

function LoginPage() {
  return (
    <NavigationBar data={getNavBarData()}></NavigationBar>
  );
}

export default LoginPage;