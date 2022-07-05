interface Props {
  children: React.ReactNode;
}

export function SecBackground(props: Props) {
  return (
    <div className="max-w-screen min-h-screen bg-blue-100 lg:p-0 overflow-hidden relative">
      {props.children}
    </div>
  );
}
