import React, { useCallback } from "react";

export default function MyInput() {
  const onBeforeInput = useCallback((e) => {
    e.currentTarget.value += "_";

    console.log(e.currentTarget.value);
  }, []);

  return <input name="myinput" onBeforeInput={onBeforeInput} />;
}
