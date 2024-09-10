import { day, month, monthName } from "../../../../util/calander";
const FeedDate = () => {
  return (
    <div>
      {monthName[month]} {day}
    </div>
  );
};

export default FeedDate;
