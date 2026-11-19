import { X } from "@phosphor-icons/react";
import Button from "./Button";

/**
 * Component hiển thị hộp thoại nổi (modal/popup) ở giữa màn hình.
 *
 * @param {object} props
 * @param {boolean} props.isOpen - Trạng thái đóng/mở của popup.
 * @param {() => void} props.onClose - Hàm được gọi khi bấm nút đóng hoặc bấm ra ngoài nền tối.
 * @param {string} [props.title] - Tiêu đề hiển thị ở đầu popup.
 * @param {import("react").ReactNode} props.children - Nội dung bên trong popup.
 */
const Popup = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white rounded-2xl shadow-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4 py-2 pr-2 pl-5 border-b border-neutral-300">
          <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
          <Button
            variant="ghost"
            icon={<X size={18} />}
            onClick={onClose}
            aria-label="Đóng"
          />
        </div>

        <div className="px-5 pb-5">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
