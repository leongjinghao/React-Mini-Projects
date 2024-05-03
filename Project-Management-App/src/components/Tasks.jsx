import NewTask from "./NewTask.jsx";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
      {tasks === undefined ? (
        <p className="text-stone-800 my-4">
          This projct does not have any tasks yet.
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.description}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={onDeleteTask}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}