export default function LabeledInput({ label, $invalid, ...props }) {
  let labelTextColour = $invalid ? "text-red-400" : "text-stone-300";
  let inputTextColour = $invalid ? "text-red-400" : "text-stone-900";
  let inputBgColour = $invalid ? "bg-red-100" : "bg-stone-300";
  let inputBorderColour = $invalid ? "border-red-300" : "";
  let inputClassesExtend = `${inputTextColour} ${inputBgColour} ${inputBorderColour}`;

  return (
    <p>
      <label
        className={`block mb-2 text-xs font-bold tracking-wide uppercase ${labelTextColour}`}
      >
        {label}
      </label>
      <input
        className={`w-full px-3 py-2 leading-tight border rounded shadow  ${inputClassesExtend}`}
        {...props}
      ></input>
    </p>
  );
}
