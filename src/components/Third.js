import { useContext, useRef, useState } from "react";
import { CountContext } from "./CountProvider";
import { Button, HStack, Input, Stack } from "@chakra-ui/react";

export const Third = () => {
  const [count, setCount] = useContext(CountContext);
  const inputEl = useRef("");

  const handleOnClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleReset = () => {
    setCount(0);
    setDispValue("");
  };
  const handleDecision = () => {
    const inputValue = parseInt(inputEl.current.value);
    setCount(inputValue);
  };
  const [dispValue, setDispValue] = useState("");
  const handleOnFocusValue = () => {
    setDispValue("");
  };
  const handleValue = (e) => {
    setDispValue(e.target.value);
  };
  return (
    <Stack>
      <p>現在のカウント数：{count}</p>
      <HStack>
        <Button onClick={handleOnClick}>+1 ボタン</Button>
        <Button onClick={handleReset}>リセット</Button>
      </HStack>
      <HStack>
        <Input
          value={dispValue}
          ref={inputEl}
          type="number"
          placeholder="数字を入力してください"
          onChange={handleValue}
          onFocus={handleOnFocusValue}
        />
        <Button onClick={handleDecision}>決定</Button>
      </HStack>
    </Stack>
  );
};
