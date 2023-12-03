import * as React from "react";

interface Props {
  id: string;
  label: string;
  checked?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Checkbox({ label, ...props }: Props) {
  return (
    <>
      <input
        id={props.id}
        name={props.id}
        type="checkbox"
        checked={props.checked || false}
        onChange={props.onChange}
        className="h-5 w-5 rounded border-2 border-gray-200 text-green-500 focus:outline-0 focus:ring-0"
      />
      <label htmlFor={label} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
    </>
  );
}
