import { useState } from "react";
import LabeledInput from "./LabeledInput.jsx";

export default function NewProject({ onAddProject }) {
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
    onAddProject(userInputs);
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
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
  );
}
