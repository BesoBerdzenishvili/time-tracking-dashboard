import React from "react";
import jeremyPic from "../assets/image-jeremy.png";
import { styled } from "../stitches.config";

const Wrapper = styled("div", {
  backgroundColor: "$DarkBlue",
  color: "$DesaturatedBlue",
  maxWidth: 231,
  width: "100%",
  paddingBottom: 29,
  wordBreak: "break-all",
  borderRadius: 17,
  "& ul": {
    listStyleType: "none",
    "& li": {
      margin: "19px 0 0 27px",
      cursor: "pointer",
    },
    "& li:hover": {
      color: "white",
    },
  },
});

const Person = styled("div", {
  backgroundColor: "$Blue",
  color: "white",
  padding: "27px 42px 74px 27px",
  borderRadius: 17,
  "& img": {
    width: 77,
    maxWidth: "100%",
    border: "2.5px solid white",
    borderRadius: 999,
  },
  "& p": {
    fontWeight: 300,
    fontSize: 38,
  },
  "& span": {
    color: "$PaleBlue",
    fontSize: 14,
  },
});

export default function Profile({ setTimeframe }) {
  return (
    <Wrapper>
      <Person>
        <img src={jeremyPic} alt="Jeremy Robson" />
        <p>
          <span>Report for</span>
        </p>
        <p>Jeremy Robson</p>
      </Person>
      <ul>
        <li onClick={() => setTimeframe("daily")}>Daily</li>
        <li onClick={() => setTimeframe("weekly")}>Weekly</li>
        <li onClick={() => setTimeframe("monthly")}>Monthly</li>
      </ul>
    </Wrapper>
  );
}
