import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Copy, Check } from "@phosphor-icons/react";
import Button from "../components/interface/Button";

const Summary = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("2026-11-01");
  const [endDate, setEndDate] = useState("2026-11-17");
  const [report, setReport] = useState("");
  const [copied, setCopied] = useState(false);

  const handleExtract = () => {
    if (startDate > endDate) {
      alert("Ngày bắt đầu không thể lớn hơn ngày kết thúc!");
      return;
    }

    // TODO: Thay bằng dữ liệu trích xuất từ DB theo startDate - endDate
    setReport("");
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!report) return;

    try {
      await navigator.clipboard.writeText(report);
      setCopied(true);
    } catch {
      alert("Không thể sao chép nội dung.");
    }
  };

  return (
    <div className="min-h-dvh flex flex-col bg-neutral-50">
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between px-6 h-16">
          <h1 className="text-base font-semibold text-neutral-900">
            Tóm tắt AI
          </h1>
          <Button
            variant="ghost"
            icon={<X size={20} />}
            onClick={() => navigate("/")}
            aria-label="Đóng"
          />
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row gap-4">
        <aside className="w-full md:w-72 shrink-0 flex flex-col gap-4">
          <div className="bg-white rounded-xl p-4 shadow-card">
            <h2 className="text-sm font-semibold text-neutral-900 mb-3">
              Phạm vi thời gian
            </h2>

            <div className="flex flex-col gap-3 mb-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-neutral-500">
                  Từ ngày
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm text-neutral-700 outline-none focus:border-neutral-400 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-neutral-500">
                  Đến ngày
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm text-neutral-700 outline-none focus:border-neutral-400 transition-colors"
                />
              </div>
            </div>

            <Button className="w-full" onClick={handleExtract}>
              Trích xuất
            </Button>
          </div>
        </aside>

        <section className="flex-1 bg-white rounded-xl p-5 shadow-card min-h-[420px] flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold text-neutral-900">
              Nội dung trích xuất
            </h2>

            {report && (
              <Button
                variant="secondary"
                size="sm"
                icon={copied ? <Check size={16} /> : <Copy size={16} />}
                onClick={handleCopy}
              >
                {copied ? "Đã sao chép" : "Sao chép"}
              </Button>
            )}
          </div>

          <div className="flex-1 bg-neutral-50 rounded-xl p-6">
            {report ? (
              <pre className="whitespace-pre-wrap font-mono text-sm text-neutral-700 leading-6">
                {report}
              </pre>
            ) : (
              <div className="h-full min-h-[320px] flex items-center justify-center text-center">
                <p className="text-neutral-400 text-sm">
                  Chọn khoảng thời gian và nhấn
                  <br />
                  &ldquo;Trích xuất&rdquo; để tạo báo cáo AI.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Summary;
