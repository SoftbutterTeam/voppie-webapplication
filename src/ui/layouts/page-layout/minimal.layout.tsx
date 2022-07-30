import { FullHeader } from "../../components/header/main.header";

interface Props {
  children?: React.ReactElement;
}
export function MinimalLayout({ children: content }: Props) {
  return (
    <>
      <FullHeader />
      <>{content}</>
    </>
  );
}
