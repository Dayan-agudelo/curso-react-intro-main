import { CiCircleRemove } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import './TodoItems.css';

function TodoItem(props) {
  return (
    // <li className="TodoItem">
    <li className={`TodoItem ${props.completed && "TodoItem--complete"}`}>
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      onClick={props.onComplete}>
        <FaCheck />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <CiCircleRemove/> 
      </span>
    </li>
  );
}

export {TodoItem};