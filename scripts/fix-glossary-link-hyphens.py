#!/usr/bin/env python3
"""
Fix glossary links that use hyphens - glossary keys don't have hyphens.
Example: /glossary/muscle-protein-synthesis → /glossary/muscleproteinsynthesis
"""

import re
from pathlib import Path

# Files with broken glossary links (from link verification)
PROBLEM_FILES = [
    'src/components/BcaaKnowledgebasePage.tsx',
    'src/components/glossary/AnabolicResistancePage.tsx',
    'src/components/glossary/CalciumCarbonatePage.tsx',
    'src/components/glossary/CalciumCitratePage.tsx',
    'src/components/glossary/ChylomicronsPage.tsx',
    'src/components/glossary/FOS_Page.tsx',
    'src/components/glossary/FolicAcidPage.tsx',
    'src/components/glossary/MagnesiumCitratePage.tsx',
    'src/components/glossary/MagnesiumOxidePage.tsx',
    'src/components/glossary/MethylcobalaminPage.tsx',
    'src/components/glossary/MethylfolatePage.tsx',
]

# Map of hyphenated paths to correct no-hyphen keys
LINK_FIXES = {
    '/glossary/amino-acids': '/glossary/aminoacids',
    '/glossary/essential-amino-acids': '/glossary/essentialaminoacids',
    '/glossary/muscle-protein-synthesis': '/glossary/muscleproteinsynthesis',
    '/glossary/creatine-kinase': '/glossary/creatinekinase',
    '/glossary/adverse-effects': '/glossary/adverseeffects',
    '/glossary/hepatic-encephalopathy': '/glossary/hepaticencephalopathy',
    '/glossary/bone-density': '/glossary/bonedensity',
    '/glossary/ldl-cholesterol': '/glossary/ldlcholesterol',
    '/glossary/hdl-cholesterol': '/glossary/hdlcholesterol',
    '/glossary/inulin-type-fructans': '/glossary/inulintypefructans',
    '/glossary/gut-microbiome': '/glossary/gutmicrobiome',
}

def fix_file(file_path: Path) -> int:
    """Fix hyphenated glossary links in a file. Returns count of fixes made."""
    
    if not file_path.exists():
        print(f"Warning: File not found: {file_path}")
        return 0
    
    content = file_path.read_text()
    original_content = content
    fixes_made = 0
    
    for old_link, new_link in LINK_FIXES.items():
        if old_link in content:
            count = content.count(old_link)
            content = content.replace(old_link, new_link)
            fixes_made += count
            print(f"  {file_path.name}: Replaced {count}x {old_link} → {new_link}")
    
    if content != original_content:
        file_path.write_text(content)
        return fixes_made
    
    return 0

def main():
    """Process all problem files."""
    
    print("Fixing hyphenated glossary links...\n")
    
    total_fixes = 0
    for file_path in PROBLEM_FILES:
        path = Path(file_path)
        fixes = fix_file(path)
        total_fixes += fixes
    
    print(f"\nTotal fixes applied: {total_fixes}")
    print("\nNote: Some warnings in the link checker may be false positives:")
    print("  - tel: links (telephone numbers) - these are valid")
    print("  - # anchors (same-page links) - these are valid")
    print("  - Missing pages like /glossary/bcaa - need to verify if these exist")

if __name__ == "__main__":
    main()
