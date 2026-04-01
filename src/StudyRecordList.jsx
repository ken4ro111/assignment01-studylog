import { useState } from "react";
import { TextInput } from "./components/TextInput";
import { StudyRecordPreview } from "./components/StudyRecordPreview";
import { Button } from "./components/Button";

export const StudyRecordList = () => {

  const [studyRecords, setStudyRecords] = useState(
    [
      { title: "勉強の記録1", time: 1},
      { title: "勉強の記録2", time: 3},
      { title: "勉強の記録3", time: 5},
    ]
  );

  const [studyRecord, setStudyRecord] = useState({
    title: "",
    time: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudyRecord((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onClickAdd = () => {
    setStudyRecords([...studyRecords, { title: studyRecord.title, time: studyRecord.time }]);

    setStudyRecord({ title: "", time: 0});
  };

  return (
    <>
      <h1>学習記録一覧</h1>
      <div>
        <TextInput
          name="title"
          placeholder="学習内容"
          type="text"
          value={studyRecord.title}
          onChange={handleChange}
        />
        <TextInput
          name="time"
          placeholder="学習時間 (h)"
          type="number"
          value={studyRecord.time}
          onChange={handleChange}
        />
        <Button
          title="登録"
          onClick={onClickAdd}
        />
        <StudyRecordPreview
          text="入力されている学習内容"
          value={studyRecord.title}
        />
        <StudyRecordPreview
          text="入力されている学習時間"
          value={`${studyRecord.time}時間`}
        />
        <ul>
          {studyRecords.map((record, index) => <li key={index}>{record.title}：{record.time}</li>)}
        </ul>
      </div>
    </>
  );
};