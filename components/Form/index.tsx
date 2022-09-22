import styles from "./Form.module.css";

import { FC, useCallback, useReducer } from "react";
import TextInput from "../Input/Text";
import FormSubmit from "./Submit";

export declare interface FormProps {
  onSubmit: (state: Object) => void;
}

const Form: FC<FormProps> = ({ onSubmit }) => {
  const [formState, setFormState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
    }
  );

  const handleSubmit = useCallback(
    (e: Event) => {
      e.preventDefault();
      if (onSubmit) onSubmit(formState);
      setFormState({ name: "" });
    },
    [formState, onSubmit]
  );

  return (
    <div>
      <p className={styles.title}>
        <b>Add new item</b>
      </p>
      <form>
        <div className={styles.flex}>
          <TextInput
            label="Name"
            name="name"
            updateForm={setFormState}
            value={formState.name}
          />
          <FormSubmit onSubmit={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default Form;
