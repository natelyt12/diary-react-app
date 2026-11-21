import { useNavigate } from "react-router-dom";
import { GearIcon, PencilSimple, SparkleIcon } from "@phosphor-icons/react";
import Button from "../interface/Button";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full md:flex-1 md:min-w-70 md:my-6 md:h-[calc(100dvh-3rem)] flex flex-col gap-4">
      <div className="bg-white rounded-2xl p-4 shadow-card">
        <p>
          Nội dung của Sidebar bao gồm progress năm và các tính năng khác như
          bảng lịch, github map.
        </p>
      </div>
      <div className="bg-white rounded-2xl p-4 shadow-card grid grid-cols-2 md:flex md:flex-col gap-2">
        <Button
          icon={<PencilSimple size={18} />}
          onClick={() => navigate("/write")}
          className="w-full col-span-2 md:col-span-1"
        >
          Viết nhật ký
        </Button>
        <Button
          icon={<GearIcon size={18} />}
          onClick={() => navigate("/settings")}
          className="w-full"
          variant="secondary"
        >
          Cài đặt
        </Button>
        <Button
          icon={<SparkleIcon size={18} />}
          onClick={() => navigate("/summary")}
          className="w-full"
          variant="secondary"
        >
          Tóm tắt AI
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
