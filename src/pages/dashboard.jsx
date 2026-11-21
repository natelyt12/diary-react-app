import Sidebar from "../components/section/Sidebar";
import Timeline from "../components/section/Timeline";

const Dashboard = () => {
  return (
    <div className="dashboard_container max-w-7xl mx-auto px-4 py-4 md:py-0 flex flex-col md:flex-row gap-4 md:gap-6">
      <Sidebar />
      <Timeline />
    </div>
  );
};

export default Dashboard;
