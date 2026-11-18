import { db } from "../../db";
import { useLiveQuery } from "dexie-react-hooks";
import Button from "../interface/Button";
import { useState } from "react";

const Timeline = () => {
  const list = useLiveQuery(() => db.content.toArray(), []);
  const [count, setCount] = useState(0);
  if (!list) return null;

  async function addData() {
    await db.content.add({
      id: crypto.randomUUID(),
      title: "Test " + count,
      desc: "Thử nghiệm",
    });
    setCount((prev) => prev + 1);
  }
  async function removeData() {
    await db.content.clear();
  }

  return (
    <div className="flex-3">
      <p>Đây là nội dung của Timeline</p>
      <Button variant="primary" onClick={() => addData()}>
        Nút bấm thêm data
      </Button>
      <Button variant="secondary" onClick={() => removeData()}>
        Nút bấm xóa mọi data
      </Button>

      <div>
        {list.map((item, index) => (
          <p key={index}>
            {item.id}-{item.title}-{item.desc}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
