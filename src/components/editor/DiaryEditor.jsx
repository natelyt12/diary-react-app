import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Toolbar from "./Toolbar";

const DiaryEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: "",
    editorProps: {
      attributes: {
        class: "tiptap focus:outline-none min-h-[380px]",
      },
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
