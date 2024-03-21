interface DisplayProps {
  display: string;
}

export function Display(props: DisplayProps) {
  return (
    <>
      <div className="relative w-96 h-24 bg-slate-700 rounded-t-2xl">
        <div className="absolute bottom-0 right-0 mr-2 mb-3 text-6xl text-white">
          {props.display}
        </div>
      </div>
    </>
  );
}
