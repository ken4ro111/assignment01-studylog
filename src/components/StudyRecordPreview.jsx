export const StudyRecordPreview = (props) => {
  const {text, value} = props;
  return (
    <p>{text}: {value}</p>
  )
}