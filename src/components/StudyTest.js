import { First } from "./First";
import { CountProvider } from "./CountProvider";

export const StudyTest = () => {
  return (
    <>
      <CountProvider>
        <First />
      </CountProvider>
    </>
  );
};
