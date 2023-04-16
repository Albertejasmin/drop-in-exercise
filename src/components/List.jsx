import ListItem from "./ListItem";
function List(props) {
  return (
    <section className="List">
      <ul>
        {props.tasks.map((task) => (
          <ListItem completeTask={props.completeTask} {...task} />
        ))}
      </ul>
    </section>
  );
}

export default List;
