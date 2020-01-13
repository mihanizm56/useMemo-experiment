import React, { useMemo, memo } from "react";
import { ListComponent } from "./list-component";

export const TestComponent = memo(({ handleCallback, array }) => {
  const memoizedList = useMemo(
    () =>
      console.log("rerender list") ||
      array.map(item => <ListComponent key={item} item={item} />),
    [array]
  );

  const notMemoizedList = array.map(item => (
    <ListComponent key={item} item={item} />
  ));

  return (
    <>
      <button onClick={handleCallback}>Click</button>
      <ul>{notMemoizedList}</ul>
    </>
  );
});
