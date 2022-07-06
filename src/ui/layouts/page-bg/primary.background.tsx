interface Props {
  children: React.ReactNode;
}

export function PrimBackground(props: Props) {
  return (
    <div className="  max-w-screen min-h-screen bg-gray-50  lg:p-0 overflow-scroll relative">
      <div className="min-w-[270] max-w-screen w-full">{props.children}</div>
    </div>
  );
}

// eslint-disable-next-line no-lone-blocks
{
  /*
  <div className=" max-w-screen min-h-screen bg-gray-50  lg:p-0 overflow-scroll relative">
  */
}
