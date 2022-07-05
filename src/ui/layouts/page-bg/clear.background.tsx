interface Props {
  children: React.ReactElement;
}
export function ClearBackground(props: Props) {
  return (
    <div className="max-w-screen min-h-screen lg:p-0 overflow-hidden relative">
      {props.children}
    </div>
  );
}
