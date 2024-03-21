import { useState } from "react";
import { Number } from "./Number";
import { Display } from "./Display";
import { Operator } from "./Operator";

export function Calculator() {
  const [display, setDisplay] = useState<string>("0");

  return (
    <>
      <div className="relative w-96 h-[610px] bg-slate-900 rounded-2xl shadow-2xl shadow-zinc-900">
        <div className="absolute">
          <Display display={display}></Display>
        </div>

        <div className="absolute top-[100px] m-3">
            <div className="flex flex-col gap-5">
                <div className="flex gap-3">
                    <Operator operator="AC" display={display} setDisplay={setDisplay}></Operator>
                    <Operator operator="%" display={display} setDisplay={setDisplay}></Operator>
                    <Operator operator="^" display={display} setDisplay={setDisplay}></Operator>
                    <Operator operator="/" display={display} setDisplay={setDisplay}></Operator>
                </div>

                <div className="flex gap-3">
                    <Number number="7" display={display} setDisplay={setDisplay}></Number>
                    <Number number="8" display={display} setDisplay={setDisplay}></Number>
                    <Number number="9" display={display} setDisplay={setDisplay}></Number>
                    <Operator operator="X" display={display} setDisplay={setDisplay}></Operator>
                </div>

                <div className="flex gap-3">
                    <Number number="4" display={display} setDisplay={setDisplay}></Number>
                    <Number number="5" display={display} setDisplay={setDisplay}></Number>
                    <Number number="6" display={display} setDisplay={setDisplay}></Number>
                    <Operator operator="-" display={display} setDisplay={setDisplay}></Operator>
                </div>

                <div className="flex gap-3">
                    <Number number="1" display={display} setDisplay={setDisplay}></Number>
                    <Number number="2" display={display} setDisplay={setDisplay}></Number>
                    <Number number="3" display={display} setDisplay={setDisplay}></Number>
                    <Operator operator="+" display={display} setDisplay={setDisplay}></Operator>
                </div>

                <div className="flex gap-3">
                    <Number number="00" display={display} setDisplay={setDisplay}></Number>
                    <Number number="0" display={display} setDisplay={setDisplay}></Number>
                    <Number number="." display={display} setDisplay={setDisplay}></Number>
                    <Operator operator="=" display={display} setDisplay={setDisplay}></Operator>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
