import { UseFormRegister, FieldErrors } from "react-hook-form";

export interface Candidate {
  fullNameParent: string;
  fullNameChild: string;
  phoneParent: string;
  email: string;
  school: number;
  grade: number;
  mark: number;
  comment: string;
}

export interface InputItemProps {
  label: string;
  required?: boolean | string;
  name:
    | "fullNameParent"
    | "fullNameChild"
    | "email"
    | "phoneParent"
    | "school"
    | "grade"
    | "mark"
    | "comment";
  register: UseFormRegister<Candidate>;
  errors: FieldErrors<Candidate>;
  type?: "text" | "number" | "email" | "password" | "date" | "textarea";
  minLength?: number;
  maxLength?: number;
  max?: number;
  min?: number;
  placeholder?: string;
  textarea?: boolean;
}
