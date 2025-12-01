#!/usr/bin/env python3
"""
Fix excessive bold tag usage in glossary terms
SEO best practice: Use bold sparingly (5-15 times per page maximum)

Strategy:
1. Remove ALL bold tags first
2. Add back bold ONLY for:
   - Main section headings (H3-level content like "Mechanisms of action:")
   - First mention of the main term in body
   - Critical 2-3 word scientific terms (not full sentences)
"""

import os
import re
from supabase import create_client, Client

# Terms flagged by SEObility for "Many tags"
AFFECTED_TERMS = [
    'polyphenols', 'flavonoids', 'carotenoids', 'glutathioneperoxidase',
    'resveratrol', 'mtor', 'superoxidedismutase', 'metabolicsyndrome',
    'aminoacids', 'essentialaminoacids', 'observationalstudy', 'systematicreview',
    'pancreatitis', 'ulcerativecolitis', 'prediabetes', 'hyperglycemia',
    'rickets', 'akkermansia', 'arachidonicacid', 'bacteroides',
    'colonocytes', 'doms', 'esr', 'eightohdg', 'endothelium',
    'enterocytes', 'fos', 'faecalibacterium', 'freeradicals',
    'glucagon', 'hepaticencephalopathy', 'insulin', 'lipidperoxidation',
    'lycopene', 'nitricoxide', 'nonhemeiron', 'oxidizedldl', 'serum25ohd'
]

def init_supabase() -> Client:
    """Initialize Supabase client"""
    url = os.environ.get("NEXT_PUBLIC_SUPABASE_URL")
    key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
    
    if not url or not key:
        raise ValueError("Missing Supabase credentials in environment")
    
    return create_client(url, key)

def count_bold_tags(text: str) -> int:
    """Count markdown bold tags (**text**)"""
    return len(re.findall(r'\*\*[^*]+\*\*', text))

def remove_all_bold(text: str) -> str:
    """Remove all markdown bold formatting"""
    return re.sub(r'\*\*([^*]+)\*\*', r'\1', text)

def add_selective_bold(text: str, term_name: str) -> str:
    """
    Add back bold ONLY for:
    1. Section headings (lines ending with :)
    2. First mention of main term
    3. Key multi-word scientific terms at start of bullet points
    """
    lines = text.split('\n')
    result_lines = []
    term_bolded = False
    
    for line in lines:
        # Bold section headings (standalone lines ending with :)
        if line.strip() and line.strip().endswith(':') and not line.strip().startswith('-'):
            # Only if it's a short heading (< 50 chars)
            if len(line.strip()) < 50:
                line = f"**{line.strip()}**"
        
        # Bold first mention of main term (case-insensitive)
        if not term_bolded and term_name.lower() in line.lower():
            # Find the term and bold just that word/phrase
            pattern = re.compile(re.escape(term_name), re.IGNORECASE)
            line = pattern.sub(f"**{term_name.title()}**", line, count=1)
            term_bolded = True
        
        # Bold key terms at start of bullet points (but not full sentences)
        if line.strip().startswith('- **') or line.strip().startswith('* **'):
            # Already has bold at start, keep only the first 2-3 words
            match = re.match(r'^(\s*[-*]\s+)(.+)$', line)
            if match:
                prefix = match.group(1)
                content = match.group(2)
                # Keep bold only for first 2-4 words
                words = content.split()
                if len(words) > 4:
                    # Extract first term (usually in bold already)
                    bold_match = re.match(r'\*\*([^*]+)\*\*', content)
                    if bold_match:
                        term = bold_match.group(1)
                        # If term is more than 4 words, reduce it
                        term_words = term.split()
                        if len(term_words) > 4:
                            term = ' '.join(term_words[:3])
                        rest = content.replace(f"**{bold_match.group(1)}**", term, 1)
                        line = f"{prefix}**{term}** — {rest.lstrip('— - ').lstrip()}"
        
        result_lines.append(line)
    
    return '\n'.join(result_lines)

def fix_term(supabase: Client, slug: str, dry_run: bool = True):
    """Fix a single glossary term"""
    print(f"\n{'='*60}")
    print(f"Processing: {slug}")
    print('='*60)
    
    # Fetch term
    response = supabase.table('glossary_terms').select('*').eq('slug', slug).execute()
    
    if not response.data:
        print(f"❌ Term not found: {slug}")
        return
    
    term = response.data[0]
    original_text = term.get('expanded_explanation', '')
    
    if not original_text:
        print(f"⚠️  No expanded_explanation for: {slug}")
        return
    
    # Count current bold tags
    original_count = count_bold_tags(original_text)
    print(f"Original bold tags: {original_count}")
    
    if original_count < 15:
        print(f"✓ Already compliant (< 15 bold tags), skipping")
        return
    
    # Remove all bold
    clean_text = remove_all_bold(original_text)
    
    # Add selective bold back
    fixed_text = add_selective_bold(clean_text, term['term'])
    
    # Count new bold tags
    new_count = count_bold_tags(fixed_text)
    print(f"New bold tags: {new_count}")
    print(f"Reduction: {original_count - new_count} tags removed ({100 - (new_count/original_count*100):.1f}% reduction)")
    
    if dry_run:
        print("\n📝 Preview of changes (first 500 chars):")
        print("-" * 60)
        print(fixed_text[:500] + "...")
        print("-" * 60)
    else:
        # Update database
        supabase.table('glossary_terms').update({
            'expanded_explanation': fixed_text
        }).eq('slug', slug).execute()
        print("✅ Updated in database")

def main():
    """Main execution"""
    import sys
    
    dry_run = '--apply' not in sys.argv
    
    print("🔧 Glossary Bold Tag Fixer")
    print("=" * 60)
    print(f"Mode: {'DRY RUN (preview only)' if dry_run else 'APPLY CHANGES'}")
    print(f"Terms to process: {len(AFFECTED_TERMS)}")
    print("=" * 60)
    
    if dry_run:
        print("\n💡 Running in DRY RUN mode. Use --apply to make changes.\n")
    
    supabase = init_supabase()
    
    for slug in AFFECTED_TERMS:
        try:
            fix_term(supabase, slug, dry_run=dry_run)
        except Exception as e:
            print(f"❌ Error processing {slug}: {e}")
            continue
    
    print("\n" + "="*60)
    print("✅ Processing complete!")
    if dry_run:
        print("\n💡 To apply changes, run: python scripts/fix-glossary-bold-overuse.py --apply")
    print("="*60)

if __name__ == '__main__':
    main()
