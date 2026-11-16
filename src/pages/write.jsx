import { useNavigate } from "react-router-dom";
import { X } from "@phosphor-icons/react";
import Button from "../components/interface/Button";
import DiaryEditor from "../components/editor/DiaryEditor";

const Write = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-dvh flex flex-col bg-neutral-50">
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between px-6 h-16">
          <h1 className="text-base font-semibold text-neutral-900">
            Viết nhật ký mới
          </h1>
          <Button
            variant="ghost"
            icon={<X size={20} />}
            onClick={() => navigate("/")}
            aria-label="Đóng"
          />
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row gap-6">
        <aside className="w-full md:w-72 shrink-0 flex flex-col gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-card">
            <h2 className="text-sm font-semibold text-neutral-900 mb-3">
              Chọn cảm xúc của bạn
            </h2>
            <div className="h-64 rounded-xl bg-neutral-100 flex items-center justify-center text-center px-4 text-xs text-neutral-500">
              danh sách cảm xúc dạng checkbox
            </div>
          </div>

          <Button className="w-full">Đăng nhật ký</Button>
        </aside>

        <section className="flex-1 bg-white rounded-2xl px-4 py-3 shadow-card min-h-105">
          <DiaryEditor />
        </section>
      </main>
    </div>
  );
};

export default Write;
