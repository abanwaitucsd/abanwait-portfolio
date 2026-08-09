import CA1 from "../assets/CA1.svg";
import CA2 from "../assets/CA2.svg";
import CA3 from "../assets/CA3.svg";
import OR1 from "../assets/OR1.svg";
import WA1 from "../assets/WA1.svg";
import WA2 from "../assets/WA2.svg";
import WA3 from "../assets/WA3.svg";

export type StateConsts = {
  name: string;
  framePaths: Array<string>;
  top: string;
  left: string;
  width: string;
};

export const STATE_CONSTS: StateConsts[] = [
  {
    name: "Washington",
    framePaths: [WA1, WA2, WA3],
    top: "13.5%",
    left: "38%",
    width: "62%",
  },
  {
    name: "Oregon",
    framePaths: [OR1],
    top: "33%",
    left: "35%",
    width: "48%",
  },
  {
    name: "California",
    framePaths: [CA1, CA2, CA3],
    top: "69.5%",
    left: "50%",
    width: "94%",
  },
];
