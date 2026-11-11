import Sidebar from "../components/section/Sidebar";
import Timeline from "../components/section/Timeline";

const Dashboard = () => {
  return (
    <div className="dashboard_container max-w-7xl mx-auto px-4 sm:px-6 flex gap-6">
      <Sidebar />
      <Timeline />
    </div>
  );
};

export default Dashboard;
