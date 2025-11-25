#!/usr/bin/env python3
"""
Remove callback props from all glossary components
Handles multiple patterns:
1. Props with TypeScript interfaces
2. Props with inline types
3. Props being passed to GlossaryTemplate
"""

import os
import re
from pathlib import Path

GLOSSARY_DIR = Path("/Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3/src/components/glossary")

def clean_glossary_component(file_path):
    """Remove callback props from a single glossary component"""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Pattern 1: Remove interface definitions for props
    content = re.sub(
        r'interface \w+PageProps \{[^}]*\}\n\n?',
        '',
        content,
        flags=re.MULTILINE
    )
    
    # Pattern 2: Remove props from function signature (with interface)
    content = re.sub(
        r'(export function \w+)\(\{\s*onNavigate[^}]*\}\s*:\s*\w+PageProps\)',
        r'\1()',
        content
    )
    
    # Pattern 3: Remove props from function signature (inline)
    content = re.sub(
        r'(export function \w+)\(\{[^}]*onNavigate[^}]*\}\s*:\s*\{[^}]*\}\)',
        r'\1()',
        content
    )
    
    # Pattern 4: Remove props being passed to GlossaryTemplate
    lines_to_remove = [
        'onNavigate={onNavigate}',
        'onContactClick={onContactClick}',
        'onLegalClick={onLegalClick}',
        'currentPage='
    ]
    
    for line_pattern in lines_to_remove:
        # Remove entire lines containing these patterns
        content = re.sub(
            r'^\s*' + re.escape(line_pattern) + r'[^\n]*\n',
            '',
            content,
            flags=re.MULTILINE
        )
    
    # Only write if content changed
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    
    return False

def main():
    print("🔄 Cleaning callback props from glossary components...")
    
    count = 0
    tsx_files = sorted(GLOSSARY_DIR.glob("*.tsx"))
    
    for file_path in tsx_files:
        if clean_glossary_component(file_path):
            count += 1
            print(f"  ✓ Updated: {file_path.name}")
    
    print(f"\n✅ Updated {count} glossary component files")
    print(f"🎯 All glossary components now have no props (Next.js compatible)")

if __name__ == "__main__":
    main()
