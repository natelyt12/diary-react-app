
import { useState } from "react";

const Summary = () => {
  const [startDate, setStartDate] = useState("2026-11-01");
  const [endDate, setEndDate] = useState("2026-11-17");
  const [report, setReport] = useState(null);
  const [copied, setCopied] = useState(false);

  
  const handleExtract = () => {
    if (startDate > endDate) {
      alert("Ngày bắt đầu không thể lớn hơn ngày kết thúc!");
      return;
    }

    setReport({
      overview:
        "Đây là phần tổng quan các trải nghiệm và sự kiện nổi bật trong khoảng thời gian được chọn.",

      mood:
        "Tâm trạng của bạn có sự thay đổi qua từng ngày. Hãy tiếp tục ghi lại cảm xúc để hiểu bản thân tốt hơn.",

      events:
        "Đây là nơi tổng hợp những sự kiện, hoạt động và trải nghiệm đáng chú ý từ nhật ký.",

      advice:
        "Hãy dành thời gian nghỉ ngơi, duy trì thói quen viết nhật ký và quan tâm đến cảm xúc của bản thân."
    });

    setCopied(false);
  };

  const handleCopy = async () => {
    if (!report) return;

    const content = `
AI JOURNAL SUMMARY

1. Tổng quan
${report.overview}

2. Phân tích tâm trạng
${report.mood}

3. Sự kiện nổi bật
${report.events}

4. Nhận xét và lời khuyên
${report.advice}
`;

    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
    } catch {
      alert("Không thể sao chép nội dung.");
    }
  };

  return (
    <div className="min-h-dvh bg-neutral-50">

      
      <header className="h-12 bg-white border-b
        flex items-center justify-between px-6">
        <h1 className="text-sm font-semibold text-neutral-800">
          Tóm tắt AI
        </h1>

        <button
          onClick={() => window.history.back()}
          className="text-neutral-500 hover:text-black"
        >
          ✕
        </button>
      </header>

      
      <main className="max-w-5xl mx-auto p-6 space-y-4">

        
        <section className="bg-white border border-neutral-200
          rounded-lg p-5">

          <h2 className="text-sm font-semibold mb-4">
            Phạm vi
          </h2>

          <div className="flex flex-wrap items-end gap-3">

            <div className="flex flex-col gap-2">
              <label className="text-xs text-neutral-500">
                Từ ngày
              </label>

              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border rounded-md px-3 py-2
                  text-sm outline-none focus:border-neutral-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-neutral-500">
                Đến ngày
              </label>

              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border rounded-md px-3 py-2
                  text-sm outline-none focus:border-neutral-500"
              />
            </div>

            <button
              onClick={handleExtract}
              className="bg-neutral-900 text-white
                rounded-full px-6 py-2 text-sm
                hover:bg-neutral-700 transition"
            >
              Trích xuất
            </button>

          </div>
        </section>

        
        <section className="bg-white border border-neutral-200
          rounded-lg p-5">

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold">
              Nội dung trích xuất
            </h2>

            {report && (
              <button
                onClick={handleCopy}
                className="bg-neutral-900 text-white
                  rounded-full px-4 py-2 text-xs
                  hover:bg-neutral-700 transition"
              >
                {copied ? "Đã sao chép ✓" : "Sao chép"}
              </button>
            )}
          </div>

          <div className="min-h-400 bg-neutral-100
            rounded-md p-6">

            {report ? (
              <div className="space-y-6 text-sm
                text-neutral-700 leading-7">

                <div>
                  <h3 className="font-bold text-base mb-2">
                    1. Tổng quan
                  </h3>
                  <p>{report.overview}</p>
                </div>

                <div>
                  <h3 className="font-bold text-base mb-2">
                    2. Phân tích tâm trạng
                  </h3>
                  <p>{report.mood}</p>
                </div>

                <div>
                  <h3 className="font-bold text-base mb-2">
                    3. Sự kiện nổi bật
                  </h3>
                  <p>{report.events}</p>
                </div>

                <div>
                  <h3 className="font-bold text-base mb-2">
                    4. Nhận xét và lời khuyên
                  </h3>
                  <p>{report.advice}</p>
                </div>

              </div>
            ) : (
              <div className="min-h-350px flex
                items-center justify-center text-center">

                <p className="text-neutral-400 text-sm">
                  Chọn khoảng thời gian và nhấn
                  <br />
                  "Trích xuất" để tạo báo cáo AI.
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
