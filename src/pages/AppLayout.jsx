import SideBar from "../Components/SideBar";
import Map from "../Components/Map";
import styles from "./AppLayout.module.css";
import User from "../Components/User";

function AppLayout({ cities, isLoading }) {
  return (
    <div className={styles.app}>
      <SideBar cities={cities} isLoading={isLoading} />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
