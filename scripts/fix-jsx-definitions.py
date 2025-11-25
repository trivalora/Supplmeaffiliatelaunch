#!/usr/bin/env python3
"""
Fix JSX definition fields by converting them to plain strings
"""

import re

files_to_fix = {
    "FerricIronPage.tsx": "Ferric iron is the oxidized form of iron (Fe³⁺), also known as ferric iron or iron(III), which is the primary form found in most iron supplements and fortified foods, but requires conversion to ferrous iron for absorption in the intestines.",
    "FerrousIronPage.tsx": "Ferrous iron is the reduced form of iron (Fe²⁺), also known as ferrous iron or iron(II), which is the bioavailable form that can be directly absorbed by intestinal cells and is found in meat, some iron supplements, and results from ferric iron reduction in the gut.",
    "LactobacillusPage.tsx": "Lactobacillus is a genus of beneficial bacteria that naturally inhabit various parts of the human body (primarily the gut, mouth, and urogenital tract) and are widely used as probiotics for supporting digestive health, immune function, and microbial balance.",
    "NFkBPage.tsx": "Nuclear Factor Kappa B (NF-κB) is a protein complex that acts as a master transcription factor regulating the expression of genes involved in inflammation, immune responses, cell survival, and proliferation. It's often called the \"molecular switch\" for inflammation.",
    "Nrf2Page.tsx": "Nuclear factor erythroid 2-related factor 2 (Nrf2) is a transcription factor that regulates the expression of antioxidant and detoxification genes, acting as the body's master regulator of the cellular antioxidant defense system.",
    "VLDLPage.tsx": "Very Low-Density Lipoprotein (VLDL) is a type of lipoprotein produced by the liver that carries triglycerides, cholesterol, and other lipids from the liver to various tissues in the body, serving as the primary transport vehicle for endogenously synthesized triglycerides."
}

base_path = "/Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3/src/components/glossary/"

for filename, plain_def in files_to_fix.items():
    filepath = base_path + filename
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Replace JSX definition with plain string
    content = re.sub(
        r'definition=\{[\s\S]*?^\s*\}',
        f'definition="{plain_def}"',
        content,
        flags=re.MULTILINE
    )
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    print(f"✓ Fixed: {filename}")

print("\n✅ All definition fields converted to plain strings")
