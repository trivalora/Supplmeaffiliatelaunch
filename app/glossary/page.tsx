import { Metadata } from "next";
import { GlossaryPageWrapper } from "../components/GlossaryPageWrapper";
import { PageViewTracker } from "../components/PageViewTracker";

export const metadata: Metadata = {
  title: "Supplement Research Glossary",
  description:
    "Scientific and medical terms used in supplement research. Comprehensive glossary of clinical trial terminology, biomarkers, study designs, and nutrition concepts.",
};

export default function GlossaryIndexPage() {
  return (
    <>
      <PageViewTracker pageName="Glossary Index" pageCategory="glossary" />
      <GlossaryPageWrapper />
    </>
  );
}
