interface Props {
  children: React.ReactNode;
}

export function PrimBackground(props: Props) {
  return (
    <div className="max-w-screen min-h-screen bg-gray-50  lg:p-0 overflow-hidden relative">
      {props.children}
    </div>
  );
}
