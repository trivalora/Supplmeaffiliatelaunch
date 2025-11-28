import { Metadata } from "next";
import { LegalNoticePageWrapper } from "../components/LegalNoticePageWrapper";

export const metadata: Metadata = {
  title: "Legal Notice",
  description:
    "Legal notice and disclaimer information for Suppl.me. Important legal terms, limitations of liability, and disclaimers for our supplement research platform.",
};

export default function LegalNoticePage() {
  return <LegalNoticePageWrapper />;
}
