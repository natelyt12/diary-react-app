import { useRef } from "react";
import { useEditorState } from "@tiptap/react";
import {
  TextB,
  TextItalic,
  TextStrikethrough,
  ListBullets,
  ListNumbers,
  Quotes,
  Image as ImageIcon,
  ArrowCounterClockwise,
  ArrowClockwise,
} from "@phosphor-icons/react";

const Toolbar = ({ editor }) => {
  const fileInputRef = useRef(null);
  const state = useEditorState({
    editor,
    selector: (ctx) => {
      let heading = "paragraph";
      if (ctx.editor.isActive("heading", { level: 1 })) heading = "h1";
      else if (ctx.editor.isActive("heading", { level: 2 })) heading = "h2";
      else if (ctx.editor.isActive("heading", { level: 3 })) heading = "h3";

      return {
        heading,
        isBold: ctx.editor.isActive("bold"),
        isItalic: ctx.editor.isActive("italic"),
        isStrike: ctx.editor.isActive("strike"),
        isBulletList: ctx.editor.isActive("bulletList"),
        isOrderedList: ctx.editor.isActive("orderedList"),
        isBlockquote: ctx.editor.isActive("blockquote"),
        canUndo: ctx.editor.can().undo(),
        canRedo: ctx.editor.can().redo(),
      };
    },
  });

  if (!editor) return null;

  const handleHeadingChange = (e) => {
    const value = e.target.value;
    if (value === "paragraph") {
      editor.chain().focus().setParagraph().run();
    } else {
      const level = Number(value.replace("h", ""));
      editor.chain().focus().toggleHeading({ level }).run();
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      editor.chain().focus().setImage({ src: reader.result }).run();
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const tools = [
    {
      label: "In đậm",
      icon: <TextB size={18} />,
      active: state.isBold,
      onClick: () => editor.chain().focus().toggleBold().run(),
    },
    {
      label: "In nghiêng",
      icon: <TextItalic size={18} />,
      active: state.isItalic,
      onClick: () => editor.chain().focus().toggleItalic().run(),
    },
    {
      label: "Gạch ngang",
      icon: <TextStrikethrough size={18} />,
      active: state.isStrike,
      onClick: () => editor.chain().focus().toggleStrike().run(),
    },
    { divider: true },
    {
      label: "Danh sách chấm",
      icon: <ListBullets size={18} />,
      active: state.isBulletList,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
    },
    {
      label: "Danh sách số",
      icon: <ListNumbers size={18} />,
      active: state.isOrderedList,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
    },
    {
      label: "Trích dẫn",
      icon: <Quotes size={18} />,
      active: state.isBlockquote,
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
    },
    { divider: true },
    {
      label: "Hoàn tác",
      icon: <ArrowCounterClockwise size={18} />,
      disabled: !state.canUndo,
      onClick: () => editor.chain().focus().undo().run(),
    },
    {
      label: "Làm lại",
      icon: <ArrowClockwise size={18} />,
      disabled: !state.canRedo,
      onClick: () => editor.chain().focus().redo().run(),
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-1 pb-3 mb-4 border-b border-neutral-200">
      <select
        value={state.heading}
        onChange={handleHeadingChange}
        className="h-8 px-2 rounded-lg text-sm text-neutral-700 bg-neutral-100 hover:bg-neutral-200 focus:outline-none cursor-pointer"
      >
        <option value="paragraph">Văn bản thường</option>
        <option value="h1">Tiêu đề 1</option>
        <option value="h2">Tiêu đề 2</option>
        <option value="h3">Tiêu đề 3</option>
      </select>

      <div className="w-px h-5 bg-neutral-200 mx-1" />

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />

      {tools.map((item, index) => {
        if (item.divider) {
          return <div key={index} className="w-px h-5 bg-neutral-200 mx-1" />;
        }

        return (
          <button
            key={item.label}
            type="button"
            title={item.label}
            disabled={item.disabled}
            onClick={item.onClick}
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${
              item.active
                ? "bg-neutral-800 text-white"
                : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950"
            }`}
          >
            {item.icon}
          </button>
        );
      })}

      <div className="w-px h-5 bg-neutral-200 mx-1" />

      <button
        type="button"
        title="Chèn ảnh"
        onClick={() => fileInputRef.current?.click()}
        className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors cursor-pointer text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950"
      >
        <ImageIcon size={18} />
      </button>
    </div>
  );
};

export default Toolbar;
