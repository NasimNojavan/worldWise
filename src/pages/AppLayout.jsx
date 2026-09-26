import SideBar from "../Components/SideBar";
import Map from "../Components/Map";
import styles from "./AppLayout.module.css";

function AppLayout({ cities, isLoading }) {
  return (
    <div className={styles.app}>
      <SideBar cities={cities} isLoading={isLoading} />
      <Map />
    </div>
  );
}

export default AppLayout;
