import { FullHeader as PrimHeader } from "../../components/header/prim.header";
import { PrimBackground } from "../page-bg";

interface Props {
  children: React.ReactElement;
}
export default function MinimalLayout(props: Props) {
  return (
    <PrimBackground>
      <></>
    </PrimBackground>
  );
}
