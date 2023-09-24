import { CounterText } from "./StudyTest";
import { useCounter } from "./hooks";

export const CounterC = () => {
  const { count, CountAdd, CountSub, CountReset } = useCounter(0);
  return (
    <>
      <CounterText count={count} />
      <button value={count} onClick={CountAdd}>
        ボタン + 1
      </button>
      <button value={count} onClick={CountSub}>
        ボタン - 1
      </button>
      <button value={count} onClick={CountReset}>
        リセット
      </button>
    </>
  );
};
