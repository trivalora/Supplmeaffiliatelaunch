import { ProductComparisonClient } from '@/components/ProductComparisonClient';

interface ProductComparisonWrapperProps {
  supplementId: string;
}

export function ProductComparisonWrapper({ supplementId }: ProductComparisonWrapperProps) {
  return <ProductComparisonClient supplementId={supplementId} />;
}

// Export individual wrappers for each supplement
export function AshwagandhaComparison() {
  return <ProductComparisonWrapper supplementId="ashwagandha" />;
}

export function CalciumComparison() {
  return <ProductComparisonWrapper supplementId="calcium" />;
}

export function CollagenComparison() {
  return <ProductComparisonWrapper supplementId="collagen" />;
}

export function CreatineComparison() {
  return <ProductComparisonWrapper supplementId="creatine" />;
}

export function IronComparison() {
  return <ProductComparisonWrapper supplementId="iron" />;
}

export function MagnesiumComparison() {
  return <ProductComparisonWrapper supplementId="magnesium" />;
}

export function Omega3Comparison() {
  return <ProductComparisonWrapper supplementId="omega-3" />;
}

export function PrebioticsComparison() {
  return <ProductComparisonWrapper supplementId="prebiotics" />;
}

export function ProbioticsComparison() {
  return <ProductComparisonWrapper supplementId="probiotics" />;
}

export function VitaminCComparison() {
  return <ProductComparisonWrapper supplementId="vitamin-c" />;
}

export function VitaminDComparison() {
  return <ProductComparisonWrapper supplementId="vitamin-d" />;
}

export function BCAAsComparison() {
  return <ProductComparisonWrapper supplementId="bcaa" />;
}

export function CurcuminComparison() {
  return <ProductComparisonWrapper supplementId="curcumin" />;
}

export function MultivitaminComparison() {
  return <ProductComparisonWrapper supplementId="multivitamin" />;
}

export function WheyProteinComparison() {
  return <ProductComparisonWrapper supplementId="whey" />;
}

export function CaseinProteinComparison() {
  return <ProductComparisonWrapper supplementId="casein" />;
}

export function ZincComparison() {
  return <ProductComparisonWrapper supplementId="zinc" />;
}
