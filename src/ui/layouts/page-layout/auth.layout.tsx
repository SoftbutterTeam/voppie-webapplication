interface Props {
  children: React.ReactNode;
}
export function AuthLayout(props: Props) {
  const { children: mainContent } = props;

  return (
    <div className="grid grid-cols-1 min-w-[300px] sm:grid-cols-10 h-screen w-full">
      <div className=" flex flex-col justify-center items-center sm:col-span-6 px-2 relative">
        {mainContent}
      </div>
      <div className="hidden md:block md:col-span-4 bg-slate-50"></div>
    </div>
  );
}
