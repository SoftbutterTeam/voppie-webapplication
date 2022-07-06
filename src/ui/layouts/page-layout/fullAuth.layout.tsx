import { PrimBackground } from "../page-bg";

interface Props {
  children: React.ReactElement;
}
export function FullAuthLayout(props: Props) {
  const { children: mainContent } = props;

  return (
    <PrimBackground>
      <div
        id="fullathlayout-01"
        className="grid grid-cols-1 md:grid-cols-10 h-screen w-full"
      >
        <div
          id="fullathlayout-01"
          className=" flex flex-col  justify-center items-center md:col-span-6"
        >
          {mainContent}
        </div>
        <div className="hidden md:block md:col-span-4">sdfdsf</div>
      </div>
    </PrimBackground>
  );
}
