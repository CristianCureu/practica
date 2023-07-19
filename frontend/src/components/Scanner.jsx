import { useState } from "react";
import { useZxing } from "react-zxing";
import Button from "./Button";
import beep from "../assets/beep.mp3";

const Scanner = ({handler}) => {
  const [audio] = useState(new Audio(beep));
  const [result, setResult] = useState("");
  const [results, setResults] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const [error, setError] = useState(null);

  const { ref } = useZxing({
    paused: isPaused,
    timeBetweenDecodingAttempts: 300,
    onResult(result) {
      setResult(result.getText());
      handler(result)
      setResults((prevState) => [...prevState, result]);
      audio.play();
    },
    onError(error) {
      setError(error.text);
    },
  });

  return (
    <div className="flex flex-col items-center">
      <video ref={ref} className="w-5/6" />
      <div>
        <p>Last result:</p>
        <p>{result}</p>
      </div>
      <Button
        text={isPaused ? "Start" : "Stop"}
        onClick={() => setIsPaused(!isPaused)}
      />
      {error && <div>{error}</div>}
    </div>
  );
};

export default Scanner;