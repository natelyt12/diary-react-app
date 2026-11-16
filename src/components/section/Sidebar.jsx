import { useNavigate } from "react-router-dom";
import { PencilSimple } from "@phosphor-icons/react";
import Button from "../interface/Button";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 my-6 h-[calc(100dvh-3rem)] bg-white rounded-2xl p-4 shadow-card flex flex-col justify-between">
      <p>
        Nội dung của Sidebar bao gồm progress năm và các tính năng khác như bảng
        lịch, github map.
      </p>

      <Button
        icon={<PencilSimple size={18} />}
        onClick={() => navigate("/write")}
        className="w-full"
      >
        Viết nhật ký
      </Button>
    </div>
  );
};

export default Sidebar;
