import { FC } from "react";

export declare interface TextInputProps {
  label: string;
  name: string;
  value: string;
  updateForm: (state: Object) => void;
}

const TextInput: FC<TextInputProps> = (props) => {
  const { label, name, value, updateForm } = props;

  const handleUpdate = (e: Event) => {
    const target = e.target as HTMLInputElement;
    updateForm({ [name]: target.value });
  };

  return (
    <div className="flex">
      <label htmlFor={name}>{label}</label>
      <input
        className="border border-gray-300 rounded-md"
        type="text"
        name={name}
        value={value}
        onChange={handleUpdate}
      />
    </div>
  );
};

export default TextInput;
