import { Metadata } from "next";
import { TermsOfServicePageWrapper } from "../components/TermsOfServicePageWrapper";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using Suppl.me. User agreements, disclaimers, and legal terms for accessing evidence-based supplement information and price comparisons.",
};

export default function TermsOfServicePage() {
  return <TermsOfServicePageWrapper />;
}
