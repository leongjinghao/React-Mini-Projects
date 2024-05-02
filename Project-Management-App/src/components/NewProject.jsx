import { useRef, useState } from "react";
import LabeledInput from "./LabeledInput.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAddProject, onCancelAddProject }) {
  const modal = useRef();
  const [userInputs, setUserInputs] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  function handleChange(event, inputLabel) {
    setUserInputs((prevUserInputs) => {
      return {
        ...prevUserInputs,
        [inputLabel]: event.target.value,
      };
    });
  }

  function handleSave() {
    // input validation
    if (
      userInputs.title.trim() === "" ||
      userInputs.description.trim() === "" ||
      userInputs.dueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAddProject(userInputs);
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Opps ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancelAddProject}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <LabeledInput
            type="text"
            label="Title"
            onChange={(event) => handleChange(event, "title")}
          />
          <LabeledInput
            label="Description"
            textarea
            onChange={(event) => handleChange(event, "description")}
          />
          <LabeledInput
            type="date"
            label="Due Date"
            onChange={(event) => handleChange(event, "dueDate")}
          />
        </div>
      </div>
    </>
  );
}
