import { DecoratedLeftPanalledLayout } from "../../../layouts/page-layout/decoratedleftpan.layout";
import { TermsandconditionText } from "../shared";
import { LoginPanel } from "./components";

export function LoginPage() {
  return (
    <DecoratedLeftPanalledLayout>
      <LoginPanel />
      <TermsandconditionText />
    </DecoratedLeftPanalledLayout>
  );
}
