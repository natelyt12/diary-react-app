import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Toolbar from "./Toolbar";
import { Placeholder } from "@tiptap/extension-placeholder";

const DiaryEditor = ({ onchange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Placeholder.configure({ placeholder: "Viết nhật ký tại đây..." }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "tiptap focus:outline-none min-h-[380px]",
      },
    },
    onUpdate: ({ editor }) => {
      onchange?.(editor.getJSON());
    },
  });

  if (!editor) return null;

  return (
    <div>
      <Toolbar editor={editor} />
      <EditorContent className="px-2 font-serif" editor={editor} />
    </div>
  );
};

export default DiaryEditor;
