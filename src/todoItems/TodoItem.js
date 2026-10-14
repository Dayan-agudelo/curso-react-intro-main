
function TodoItem({completed, text}){
  return(
    <li>
      <span>{completed ? 'V' : 'X'}</span>
      <p>{text}</p>
      <span>{completed ? 'Complete' : 'Incomplete'}</span>
    </li>
  )
}


export {TodoItem};