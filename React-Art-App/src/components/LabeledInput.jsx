export default function LabeledInput({ label, $invalid, ...props }) {
  let textColour = $invalid ? "text-red-400" : "text-stone-300";
  let bgColour = $invalid ? "bg-red-100" : "bg-stone-300";
  let borderColour = $invalid ? "border-red-300" : "";
  let inputClassesExtend = `${textColour} ${bgColour} ${borderColour}`;

  return (
    <p>
      <label
        className={`block mb-2 text-xs font-bold tracking-wide uppercase ${textColour}`}
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
