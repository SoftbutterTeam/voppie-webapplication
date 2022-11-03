interface Props {
  children: React.ReactNode;
}

export function AppContainer(props: Props) {
  return (
    <div className="  bg-white  lg:p-0 overflow-scroll relative">
      <div className="min-w-[400]">{props.children}</div>
    </div>
  );
}

// eslint-disable-next-line no-lone-blocks
{
  /*
  <div className=" max-w-screen min-h-screen bg-gray-50  lg:p-0 overflow-scroll relative">
  
  secondary background
  <div className="max-w-screen min-h-screen bg-blue-100 lg:p-0 overflow-hidden relative">
  */
}
