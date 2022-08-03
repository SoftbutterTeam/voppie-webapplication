import { OrDivideText } from "./utils/types";

function OrDivide({ text = "or" }: OrDivideText) {
  return (
    <div className="w-full flex py-2 items-center">
      <div className="bg-gray-200 shadow h-[1px] w-full ml-2" />
      <p className="mx-2 text-slate-500 text-sm">{text}</p>
      <div className="bg-gray-200 shadow h-[1px] w-full mr-2" />
    </div>
  );
}

export default OrDivide;
