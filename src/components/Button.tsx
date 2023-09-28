import { ImPlus, ImMinus } from "react-icons/im";
import { ItemType } from "../API/fetch";
import { useReducer } from "react";
import { useState } from "react";
import React from "react";

enum AddRecordActionType {
  INCOME = "INCOME",
  EXPENSE = "EXPENSE",
}

interface AddRecordAction {
  type: AddRecordActionType;
}

function addingReducer(state: ItemType, action: AddRecordAction) {
  const { type } = action;
  switch (type) {
    case AddRecordActionType.EXPENSE:
      return {
        ...state,
        benefit: false,
      };
    case AddRecordActionType.INCOME:
      return {
        ...state,
        benefit: true,
      };
    default:
      return state;
  }
}

const Button = ({ className }: { className?: string }) => {
  const [editMode, setEditMode] = useState(false);

  const [state, dispatch] = useReducer(addingReducer, {
    title: "",
    price: 0,
    category: "",
    benefit: false,
    createdAt: "",
    id: 0,
  });

  return (
    <div className={className}>
      <button
        onClick={() => {
          setEditMode(true);
          dispatch({ type: AddRecordActionType.INCOME });
        }}
      >
        <span>ADD EXPENSE</span>
        <ImPlus className="icon" />
      </button>
      <button
        onClick={() => {
          setEditMode(true);
          dispatch({ type: AddRecordActionType.EXPENSE });
        }}
      >
        <span>ADD INCOME</span>
        <ImMinus className="icon" />
      </button>
      {editMode ? <Form /> : <button>REPORT</button>}
    </div>
  );
};

export default Button;
