import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "@phosphor-icons/react";
import Button from "../components/interface/Button";
import DiaryEditor from "../components/editor/DiaryEditor";
import { MOOD_LEVELS } from "../constants/moodLevels";
import Popup from "../components/interface/Popup";

const Write = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState(0);
  const [hoveredMood, setHoveredMood] = useState(null);

  const [isMoodSelectedModal, setIsMoodSelectedModal] = useState(false);

  const [content, setContent] = useState(null);

  const getEditorContent = () => {
    const entry = {
      mood: selectedMood,
      content: content,
      createdAt: new Date().toISOString(),
    };
    console.log(entry);
  };

  const handleUploadDiary = () => {
    if (!selectedMood) setIsMoodSelectedModal(true);
  };

  return (
    <div className="min-h-dvh flex flex-col bg-neutral-50">
      <Popup
        isOpen={isMoodSelectedModal}
        onClose={() => setIsMoodSelectedModal(false)}
        title="Lưu ý"
      >
        <p>Bạn chưa chọn cảm xúc cho nhật ký của mình</p>
        <div className="flex justify-end gap-2 mt-6">
          <Button onClick={() => setIsMoodSelectedModal(false)}>OK</Button>
        </div>
      </Popup>

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

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-4 py-4 flex flex-col md:flex-row gap-4">
        <aside className="w-full md:w-72 shrink-0 flex flex-col gap-4">
          <div className="bg-white rounded-xl p-4 shadow-card">
            <h2 className="text-sm font-semibold text-neutral-900 mb-3">
              Cảm xúc của bạn hiện tại
            </h2>

            <div className="flex flex-col gap-2 mb-4">
              {MOOD_LEVELS.map((mood) => {
                // nếu như selectedMood hoặc isHovered = mood.value đang xét trong map thì isActive là true
                const isSelected = selectedMood === mood.value;
                const isHovered = hoveredMood === mood.value;
                const isActive = isSelected || isHovered;

                return (
                  <button
                    key={mood.key}
                    type="button"
                    onClick={() => setSelectedMood(mood.value)}
                    onMouseEnter={() => setHoveredMood(mood.value)}
                    onMouseLeave={() => setHoveredMood(null)}
                    style={{
                      borderColor: isActive ? mood.hex : undefined,
                      backgroundColor: isActive ? `${mood.hex}20` : undefined,
                      color: isSelected ? mood.hex : "black",
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg border border-neutral-200 text-left text-sm font-medium text-neutral-700 transition-colors hover:duration-0 cursor-pointer"
                  >
                    <span
                      className={`shrink-0 rounded-sm transition-all duration-200 ${
                        isActive ? "w-3 h-3" : "w-3 h-0.5"
                      }`}
                      style={{ backgroundColor: mood.hex }}
                    />
                    <span>{mood.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-card flex gap-2 flex-col">
            <Button className="w-full" onClick={() => handleUploadDiary()}>
              Đăng nhật ký
            </Button>
            <Button
              className="w-full"
              variant="secondary"
              onClick={() => getEditorContent()}
            >
              Output đầu ra của nhật ký (test)
            </Button>
          </div>
        </aside>

        <section className="flex-1 bg-white rounded-xl px-4 py-3 shadow-card min-h-105">
          <DiaryEditor onchange={setContent} />
        </section>
      </main>
    </div>
  );
};

export default Write;
