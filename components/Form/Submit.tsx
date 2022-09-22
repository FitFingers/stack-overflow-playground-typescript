import { FC } from "react";

export declare interface FormSubmitProps {
  onSubmit: (e: Event) => void;
}

const FormSubmit: FC<FormSubmitProps> = ({ onSubmit }) => {
  return (
    <button className="submit" onClick={onSubmit}>
      <span className="submit-text">Submit</span>
    </button>
  );
};

export default FormSubmit;
