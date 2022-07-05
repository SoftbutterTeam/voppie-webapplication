import { PrimBackground } from "../page-bg";

interface Props {
  children: React.ReactElement;
}
export function FullAuthLayout(props: Props) {
  return (
    <PrimBackground>
      <div className="grid grid-cols-1 sm:grid-cols-10 h-screen w-full">
        <div className=" flex flex-col justify-center items-center sm:col-span-6">
          <h1>fgfddfg</h1>
        </div>
        <div className="hidden sm:block sm:col-span-4">sdfdsf</div>
      </div>
    </PrimBackground>
  );
}
