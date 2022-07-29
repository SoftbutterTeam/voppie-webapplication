interface Props {
  children: React.ReactNode;
  backgroundContent?: React.ReactNode;
}
export function CenteredLayout(props: Props) {
  const { children: mainContent, backgroundContent } = props;

  return (
    <div className="grid grid-cols-1 min-w-[300px] md:grid-cols-10 h-screen w-full ">
      <div className=" sm:hidden md:block w-64 md:w-96 h-96 md:h-full bg-orange-600 bg-opacity-60 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
      <div className=" flex flex-col justify-center items-center sm:col-span-6 px-2 relative bg-white">
        {mainContent}
      </div>
    </div>
  );
}
//todo pre-draft even, not accurate at all.
