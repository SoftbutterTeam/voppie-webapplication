import { DecoratedLeftPanalledLayout } from "../../../layouts/page-layout/decoratedleftpan.layout";
import { TermsandconditionText, LoginPanel } from "../../../components/login";

export function LoginPage() {
  return (
    <DecoratedLeftPanalledLayout>
      <LoginPanel />
      <TermsandconditionText />
    </DecoratedLeftPanalledLayout>
  );
}
