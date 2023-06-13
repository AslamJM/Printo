import React, { createContext, useContext, useReducer } from "react";

interface FormAction {
  type: "SET_CATEGORY" | "SET_FILE_URLS" | "SET_ADDRESS" | "SET_DESCRIPTION";
  payload: any;
}

interface FormState {
  category: string;
  fileUrls: string[];
  address: string;
  description: string;
  setCategory: (value: string) => void;
  setFileUrls: (value: string[]) => void;
  setAddress: (value: string) => void;
  setDescription: (value: string) => void;
}

const initialState: FormState = {
  category: "",
  fileUrls: [],
  address: "",
  description: "",
  setAddress: () => {},
  setCategory: () => {},
  setFileUrls: () => {},
  setDescription: () => {},
};

const formContext = createContext(initialState);

export const useFormContext = () => {
  const formState = useContext(formContext);
  return formState;
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_FILE_URLS":
      return { ...state, fileUrls: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    default:
      return state;
  }
};

function useFormReducer() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const setCategory = (value: string) => {
    dispatch({ type: "SET_CATEGORY", payload: value });
  };
  const setFileUrls = (value: string[]) => {
    dispatch({ type: "SET_FILE_URLS", payload: value });
  };
  const setAddress = (value: string) => {
    dispatch({ type: "SET_ADDRESS", payload: value });
  };
  const setDescription = (value: string) => {
    dispatch({ type: "SET_DESCRIPTION", payload: value });
  };
  return {
    ...state,
    setAddress,
    setCategory,
    setFileUrls,
    setDescription,
  };
}

const FormContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const formState = useFormReducer();
  return (
    <formContext.Provider value={formState}>{children}</formContext.Provider>
  );
};

export default FormContextProvider;
