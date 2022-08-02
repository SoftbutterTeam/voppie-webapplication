import { FullHeader } from "../../components/header/main.header";

interface Props {
  children?: React.ReactNode;
  withHeader?: boolean;
}
export function SingleLayout({ children: content, withHeader = true }: Props) {
  return (
    <div className="min-h-screen">
      {withHeader && <FullHeader />}
      <div className="flex justify-center items-center px-2 relative bg-orange    w-full">
        {content}
      </div>
    </div>
  );
}
