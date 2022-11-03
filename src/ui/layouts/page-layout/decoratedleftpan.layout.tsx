interface Props {
  children: React.ReactNode;
  backgroundContent?: React.ReactNode;
}
export function DecoratedLeftPanalledLayout(props: Props) {
  const { children: mainContent } = props;

  return (
    <div className="grid grid-cols-1 min-w-[400px] lg:grid-cols-10 h-screen w-full ">
      <div className=" sm:hidden md:block w-64 md:w-96 h-96 lg:h-full bg-orange-600 bg-opacity-70 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
      <div className=" flex flex-col justify-center items-center sm:col-span-6 px-2 relative bg-white">
        {mainContent}
      </div>
    </div>
  );
}
