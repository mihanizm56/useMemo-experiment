import React, { useCallback, useState } from "react";
import { TestComponent } from "./component";

const ONE_ELEMENT = 1;
const TEN_ELEMENTS = 10;
const HUNDRED_ELEMENTS = 100;
const THOUSAND_ELEMENTS = 1000;

export const App = () => {
  const [state, setState] = useState(0);

  const handleCallback = useCallback(() => setState(state + 1), [state]);

  const testArray = useCallback([...Array(THOUSAND_ELEMENTS).keys()], []);
  // const testArray = [...Array(THOUSAND_ELEMENTS).keys()];

  return <TestComponent handleCallback={handleCallback} array={testArray} />;
};
