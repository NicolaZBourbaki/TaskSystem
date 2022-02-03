import React from "react";
import { Link } from "react-router-dom";
import Task from "../../Models/task";

// function Del(Id?: string) {
//   BaseService.delete("/person/del/", {
//     id: Id,
//   }).then((rp) => {
//     if (rp.Status) {
//       toastr.success("Member saved.");
//       window.location.reload();
//     } else {
//       toastr.error(rp.Messages);
//       console.log("Messages: " + rp.Messages);
//       console.log("Exception: " + rp.Exception);
//     }
//   });
// }

interface IProps {
  task: Task;
  index: Number;
}

const TableRow: React.FunctionComponent<IProps> = (props) => { 
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.task.Title}</td>
      <td>{props.task.Status}</td>
      <td>{props.task.Priority}</td>
      <td>
        <Link to={"/edit/" + props.task.Id} className="btn btn-primary">
          Edit
        </Link>
      </td>
      {/* <td>
        <button onClick={() => Del(props.person.Id)} className="btn btn-danger">
          Delete
        </button>
      </td> */}
    </tr>
  );
};
export default TableRow;
