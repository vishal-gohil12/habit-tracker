import Sidebar from "../component/Sidebar";
import AllHabit from "../pages/Habit/Habit";

export default function MainLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-gray-100 w-full ml-64">
        <AllHabit />
      </div>
    </div>
  );
}