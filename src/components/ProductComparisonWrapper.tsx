import { ProductComparison } from './ProductComparison';
import { PageKey } from '../routes.config';

interface ProductComparisonWrapperProps {
  supplementId: string;
  onNavigate: (page: PageKey) => void;
}

export function ProductComparisonWrapper({ supplementId, onNavigate }: ProductComparisonWrapperProps) {
  return <ProductComparison initialSupplement={supplementId} onNavigate={onNavigate} />;
}

// Export individual wrappers for each supplement
export function AshwagandhaComparison({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  return <ProductComparisonWrapper supplementId="ashwagandha" onNavigate={onNavigate} />;
}

export function CalciumComparison({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  return <ProductComparisonWrapper supplementId="calcium" onNavigate={onNavigate} />;
}

export function CollagenComparison({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  return <ProductComparisonWrapper supplementId="collagen" onNavigate={onNavigate} />;
}

export function CreatineComparison({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  return <ProductComparisonWrapper supplementId="creatine" onNavigate={onNavigate} />;
}

export function IronComparison({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  return <ProductComparisonWrapper supplementId="iron" onNavigate={onNavigate} />;
}

export function MagnesiumComparison({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  return <ProductComparisonWrapper supplementId="magnesium" onNavigate={onNavigate} />;
}

export function Omega3Comparison({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  return <ProductComparisonWrapper supplementId="omega-3" onNavigate={onNavigate} />;
}

export function PrebioticsComparison({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  return <ProductComparisonWrapper supplementId="prebiotics" onNavigate={onNavigate} />;
}

export function ProbioticsComparison({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  const supplementId = "probiotics"; // Explicit variable to force rebuild
  return <ProductComparisonWrapper supplementId={supplementId} onNavigate={onNavigate} />;
}

export function VitaminCComparison({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  return <ProductComparisonWrapper supplementId="vitamin-c" onNavigate={onNavigate} />;
}

export function VitaminDComparison({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  return <ProductComparisonWrapper supplementId="vitamin-d" onNavigate={onNavigate} />;
}

export function BCAAsComparison({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  return <ProductComparisonWrapper supplementId="bcaa" onNavigate={onNavigate} />;
}

export function CurcuminComparison({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  return <ProductComparisonWrapper supplementId="curcumin" onNavigate={onNavigate} />;
}

export function MultivitaminComparison({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  return <ProductComparisonWrapper supplementId="multivitamin" onNavigate={onNavigate} />;
}

export function WheyProteinComparison({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  return <ProductComparisonWrapper supplementId="whey" onNavigate={onNavigate} />;
}

export function CaseinProteinComparison({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  return <ProductComparisonWrapper supplementId="casein" onNavigate={onNavigate} />;
}

export function ZincComparison({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  return <ProductComparisonWrapper supplementId="zinc" onNavigate={onNavigate} />;
}
