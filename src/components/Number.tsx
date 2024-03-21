/* eslint-disable react-refresh/only-export-components */
interface NumberProps {
  number: string;
  display: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}

let num1: number;
let operator: string;

export function Number(props: NumberProps) {
  function changeDisplay() {
    if (
      props.display == "+" ||
      props.display == "-" ||
      props.display == "X" ||
      props.display == "/" ||
      props.display == "^"
    ) {
      num1 = parseInt(props.number);
      props.setDisplay(props.number);
    } else {
      num1 = parseInt(props.display) * 10 + parseInt(props.number);
      console.log(num1);
      props.setDisplay(num1.toString());
    }
  }

  return (
    <div className="cursor-pointer size-20 rounded-full bg-zinc-300 hover:bg-zinc-600">
      <div className="text-5xl text-center pt-3" onClick={changeDisplay}>
        {props.number}
      </div>
    </div>
  );
}

export { num1, operator };
