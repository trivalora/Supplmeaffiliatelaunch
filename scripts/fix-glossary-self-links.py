#!/usr/bin/env python3
"""
Fix glossary self-linking issues by adding currentPage prop to all glossary pages.
This prevents terms from linking to their own pages.
"""

import os
import re
from pathlib import Path

# Map of filename patterns to their glossary keys
GLOSSARY_DIR = Path("src/components/glossary")

def extract_key_from_filename(filename: str) -> str:
    """Extract glossary key from filename (e.g., 'ORPage.tsx' -> 'or')"""
    # Remove 'Page.tsx' suffix
    key = filename.replace('Page.tsx', '')
    
    # Convert PascalCase to lowercase
    # Handle special cases first
    special_cases = {
        'MetaAnalysis': 'metaanalysis',
        'EmpiricalEvidence': 'empiricalevidence',
        'AnecdotalEvidence': 'anecdotalevidence',
        'PeerReviewed': 'peerreviewed',
        'StatisticalSignificance': 'statisticalsignificance',
        'ClinicalSignificance': 'clinicalsignificance',
        'SubgroupAnalysis': 'subgroupanalysis',
        'SingleBlinded': 'singleblinded',
        'DoubleBlinded': 'doubleblinded',
        'OxidativeStress': 'oxidativestress',
        'InsulinResistance': 'insulinresistance',
        'DoseDependent': 'dosedependent',
        'BoneDensity': 'bonedensity',
        'GlycemicControl': 'glycemiccontrol',
        'CognitiveFunction': 'cognitivefunction',
        'ThyroidFunction': 'thyroidfunction',
        'GutMicrobiome': 'gutmicrobiome',
        'ImmuneSystem': 'immunesystem',
        'MusclePro teinSynthesis': 'muscleproteinsynthesis',
        'ProteinSynthesis': 'proteinsynthesis',
        'JointHealth': 'jointhealth',
        'SleepQuality': 'sleepquality',
        'VitaminDeficiency': 'vitamindeficiency',
        'BloodGlucose': 'bloodglucose',
        'BloodPressure': 'bloodpressure',
        'GlucoseMetabolism': 'glucosemetabolism',
        'InulinTypeFructans': 'inulintypefructans',
        'UlcerativeColitis': 'ulcerativecolitis',
        'InflammatoryBowelDisease': 'inflammatoryboweldisease',
        'LDLCholesterol': 'ldlcholesterol',
        'HDLCholesterol': 'hdlcholesterol',
        'BetaCarotene': 'betacarotene',
        'OxidizedLDL': 'oxidizedldl',
        'EightOHdG': 'eightohdg',
        'LipidPeroxidation': 'lipidperoxidation',
        'HemeIron': 'hemeiron',
        'NonHemeIron': 'nonhemeiron',
        'TNFAlpha': 'tnfalpha',
        'TolerableUpperIntakeLevel': 'tolerableupperintakelevel',
        'RheumatoidArthritis': 'rheumatoidarthritis',
    }
    
    if key in special_cases:
        return special_cases[key]
    
    # Default: convert to lowercase
    return key.lower()

def add_current_page_prop(file_path: Path) -> bool:
    """Add currentPage prop to a glossary page file. Returns True if modified."""
    
    # Extract key from filename
    glossary_key = extract_key_from_filename(file_path.name)
    
    # Read file content
    content = file_path.read_text()
    
    # Check if currentPage is already present
    if 'currentPage=' in content:
        return False  # Already has it
    
    # Find the last prop before /> or relatedTerms (whichever comes last)
    # Look for either /> at end of GlossaryTemplate or the last prop before it
    
    # Try to find relatedTerms prop (common last prop)
    if 'relatedTerms=' in content:
        # Add currentPage before relatedTerms
        pattern = r'(\s+)(relatedTerms=)'
        replacement = r'\1currentPage="' + glossary_key + r'"\n\1\2'
        new_content = re.sub(pattern, replacement, content)
    elif '/>' in content and '<GlossaryTemplate' in content:
        # Find the /> that closes GlossaryTemplate
        # Match: any whitespace before />, add currentPage with proper indentation
        pattern = r'(\n\s+)(/>)'
        
        # Find all matches to get the one that closes GlossaryTemplate
        matches = list(re.finditer(pattern, content))
        if matches:
            # Get the first /> after <GlossaryTemplate (usually the right one)
            template_start = content.find('<GlossaryTemplate')
            for match in matches:
                if match.start() > template_start:
                    # This is likely our target
                    indent = match.group(1)
                    new_content = (
                        content[:match.start()] +
                        f'{indent}currentPage="{glossary_key}"\n' +
                        content[match.start():]
                    )
                    break
            else:
                new_content = content
        else:
            return False
    else:
        print(f"Warning: Could not find suitable insertion point in {file_path.name}")
        return False
    
    # Write back only if changed
    if new_content != content:
        file_path.write_text(new_content)
        return True
    
    return False

def main():
    """Process all glossary page files."""
    
    if not GLOSSARY_DIR.exists():
        print(f"Error: {GLOSSARY_DIR} not found!")
        return
    
    # Get all .tsx files in glossary directory
    files = list(GLOSSARY_DIR.glob("*.tsx"))
    
    print(f"Found {len(files)} glossary page files")
    print("Processing...")
    
    modified_count = 0
    for file_path in sorted(files):
        if add_current_page_prop(file_path):
            modified_count += 1
            print(f"✓ {file_path.name}")
    
    print(f"\nModified {modified_count} files")
    print(f"Skipped {len(files) - modified_count} files (already had currentPage prop)")

if __name__ == "__main__":
    main()
