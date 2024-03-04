"use client"
import { useCallback } from "react";
import { useReducer } from "react";

const INITIAL_VALUE = {
  text: "",
  rating: 1,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "setText":
      return {
        ...state,
        text: payload,
      };
    case "setRating":
      return {
        ...state,
        rating: payload,
      };

    default:
      return state;
  }
};

export const useReviewForm = (initialValue = INITIAL_VALUE, userId) => {
  const [form, dispatch] = useReducer(reducer, initialValue);

  const setText = useCallback((event) => {
    dispatch({ type: "setText", payload: event.target.value });
  }, []);

  const setRating = useCallback(
    (event) => dispatch({ type: "setRating", payload: event.target.value }),
    []
  );

  const formWithUserId = {
    ...form,
    userId,
  };

  return {
    form: formWithUserId,
    setText,
    setRating,
  };
};