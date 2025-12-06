import { Metadata } from "next";
import { PageViewTracker } from "../components/PageViewTracker";
import { GlossaryIndexServer } from "./GlossaryIndexServer";

export const metadata: Metadata = {
  title: "Supplement Research Glossary",
  description:
    "Scientific and medical terms used in supplement research. Comprehensive glossary of clinical trial terminology, biomarkers, study designs, and nutrition concepts.",
};

export default function GlossaryIndexPage() {
  return (
    <>
      <PageViewTracker pageName="Glossary Index" pageCategory="glossary" />
      <GlossaryIndexServer />
    </>
  );
}
