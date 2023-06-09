function Form(props) {
  function submit(e) {
    // sikre at siden ikke refresher
    e.preventDefault();
    // .value gør at den læser dens value
    console.log(e.target.elements.task.value);
    props.addTask(e.target.elements.task.value);
    e.target.elements.task.value = "";
    //completed: false, generated by app
    //task: form
    //id: generated by app
  }
  return (
    <form onSubmit={submit}>
      <label htmlFor="form_task">Task</label>
      <input required type="text" name="task" id="form_task" />
      <button>Add Task</button>
    </form>
  );
}

export default Form;
