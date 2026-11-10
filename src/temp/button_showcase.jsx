import Button from "../components/Button";
import {
  Plus,
  Trash,
  PencilSimple,
  BookmarkSimple,
  ArrowRight,
  FloppyDisk,
  DotsThree,
  Gear,
} from "@phosphor-icons/react";

export const ButtonShowcase = () => {
  const variants = [
    { key: "primary", label: "Primary" },
    { key: "secondary", label: "Secondary" },
    { key: "danger", label: "Danger" },
    { key: "ghost", label: "Ghost (No Background)" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 p-8 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Button Showcase</h1>
          <p className="text-neutral-500 mt-1">
            Demo: Icon button vuông vắn (1:1), cùng chiều cao (h-9 / 36px) với
            button có label. Bổ sung variant Ghost (không background).
          </p>
        </div>

        {/* Section 1: All Variants Showcase */}
        <section className="bg-white p-6 rounded-2xl shadow-xs border border-neutral-200/80 space-y-6">
          <h2 className="text-lg font-semibold text-neutral-800 pb-2 border-b border-neutral-100">
            Các Variant & Trạng thái nút
          </h2>

          <div className="space-y-6">
            {variants.map(({ key, label }) => (
              <div key={key} className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  {label}
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  {/* Icon + Label */}
                  <Button variant={key} icon={<Plus size={18} weight="bold" />}>
                    Add Entry
                  </Button>

                  {/* Label Only */}
                  <Button variant={key}>Save Changes</Button>

                  {/* Icon Only (Perfect Square: h-9 w-9) */}
                  <Button
                    variant={key}
                    icon={
                      key === "danger" ? (
                        <Trash size={18} />
                      ) : (
                        <BookmarkSimple size={18} />
                      )
                    }
                    aria-label="Bookmark"
                  />

                  {/* Icon Right */}
                  <Button
                    variant={key}
                    icon={<ArrowRight size={18} weight="bold" />}
                    iconPosition="right"
                  >
                    Continue
                  </Button>

                  {/* Additional Icon-only for testing alignment */}
                  <Button
                    variant={key}
                    icon={<Gear size={18} />}
                    aria-label="Settings"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Height & Alignment Comparison */}
        <section className="bg-white p-6 rounded-2xl shadow-xs border border-neutral-200/80 space-y-4">
          <h2 className="text-lg font-semibold text-neutral-800 pb-2 border-b border-neutral-100">
            Kiểm tra độ cao & độ vuông vắn (Hàng ngang cùng baseline)
          </h2>
          <p className="text-sm text-neutral-500">
            Tất cả các nút đều có chiều cao cố định{" "}
            <code className="bg-neutral-100 px-1 py-0.5 rounded text-neutral-700">
              h-9 (36px)
            </code>
            . Nút icon-only có thêm{" "}
            <code className="bg-neutral-100 px-1 py-0.5 rounded text-neutral-700">
              w-9 aspect-square
            </code>{" "}
            đảm bảo hình vuông hoàn hảo.
          </p>

          <div className="flex items-center gap-3 p-4 bg-neutral-100/60 rounded-xl">
            <Button variant="primary" icon={<Plus size={18} weight="bold" />}>
              Create Diary
            </Button>
            <Button
              variant="primary"
              icon={<FloppyDisk size={18} />}
              aria-label="Save"
            />
            <Button
              variant="secondary"
              icon={<PencilSimple size={18} />}
              aria-label="Edit"
            />
            <Button
              variant="ghost"
              icon={<DotsThree size={20} weight="bold" />}
              aria-label="More"
            />
            <Button
              variant="danger"
              icon={<Trash size={18} />}
              aria-label="Delete"
            />
            <Button variant="secondary">Cancel</Button>
          </div>
        </section>

        {/* Section 3: Disabled state */}
        <section className="bg-white p-6 rounded-2xl shadow-xs border border-neutral-200/80 space-y-4">
          <h2 className="text-lg font-semibold text-neutral-800 pb-2 border-b border-neutral-100">
            Disabled State
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <Button disabled variant="primary" icon={<Plus size={18} />}>
              Disabled Primary
            </Button>
            <Button
              disabled
              variant="ghost"
              icon={<BookmarkSimple size={18} />}
            />
            <Button disabled variant="secondary">
              Disabled Secondary
            </Button>
            <Button disabled variant="danger" icon={<Trash size={18} />} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ButtonShowcase;
