function ListItem(props) {
  return (
    <li className="ListItem">
      <article>
        <p>{props.task}</p>
        <button onClick={() => props.completeTask(props.id)}>Complete</button>
      </article>
    </li>
  );
}

export default ListItem;
