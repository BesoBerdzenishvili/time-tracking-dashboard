import { useState } from "react";
import { styled } from "./stitches.config";
import Profile from "./components/Profile";

const Wrapper = styled("div", {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
});

function App() {
  const [timeframe, setTimeframe] = useState("daily");
  console.log(timeframe);
  return (
    <Wrapper>
      <Profile setTimeframe={setTimeframe} />
    </Wrapper>
  );
}

export default App;
