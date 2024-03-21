import { num1 } from "./Number";

interface NumberProps {
  operator: string;
  display: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}

let num: number, operator: string;
export function Operator(props: NumberProps) {
  function changeDisplay() {
    if (props.operator == "AC") {
      props.setDisplay("0");
    } else if (props.operator != "AC" && props.operator != "=") {
      num = parseInt(props.display);
      operator = props.operator;
      console.log(num);
      console.log(operator);
      props.setDisplay(props.operator);
    } else if (props.operator == "=") {
      console.log(num1);
      if (operator == "+") {
        console.log(num + num1);
        props.setDisplay((num + num1).toString());
      } else if (operator == "-") {
        console.log(num - num1);
        props.setDisplay((num - num1).toString());
      } else if (operator == "X") {
        console.log(num * num1);
        props.setDisplay((num * num1).toString());
      } else if (operator == "/") {
        console.log(num / num1);
        props.setDisplay((num / num1).toString());
      } else if (operator == "^") {
        console.log(Math.pow(num, num1));
        props.setDisplay((Math.pow(num, num1)).toString());
      }
    }
  }

  if (props.operator == "="){
    return (
        <div className="cursor-pointer size-20 rounded-full bg-red-500 text-white hover:bg-red-700">
          <p className="text-4xl text-center pt-4" onClick={changeDisplay}>
            {props.operator}
          </p>
        </div>
      );
  }

  return (
    <div className="cursor-pointer size-20 rounded-full bg-zinc-500 hover:bg-zinc-700">
      <p className="text-4xl text-center pt-4" onClick={changeDisplay}>
        {props.operator}
      </p>
    </div>
  );
}
