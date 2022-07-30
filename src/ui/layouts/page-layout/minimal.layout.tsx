import { FullHeader as PrimHeader } from "../../components/header/prim.header";

interface Props {
  children?: React.ReactElement;
}
export function MinimalLayout({ children: content }: Props) {
  return (
    <>
      <PrimHeader />
      <>{content}</>
    </>
  );
}
