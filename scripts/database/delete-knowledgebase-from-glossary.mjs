#!/usr/bin/env node
/**
 * Delete knowledgebase pages from glossary_terms table
 * These 4 supplements have full knowledgebase pages, not glossary entries
 */

import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: resolve(__dirname, "../.env.local") });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing Supabase credentials");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function deleteKnowledgebasePages() {
  const slugsToDelete = ["creatine", "bcaa", "prebiotics", "probiotics"];

  console.log(
    `🗑️  Deleting ${slugsToDelete.length} knowledgebase pages from glossary_terms...`,
  );

  const { data, error } = await supabase
    .schema("api")
    .from("glossary_terms")
    .delete()
    .in("slug", slugsToDelete)
    .select();

  if (error) {
    console.error("❌ Error deleting records:", error);
    process.exit(1);
  }

  console.log(
    `✅ Deleted ${data?.length || 0} records:`,
    data?.map((r) => r.slug),
  );
  console.log("✅ Done!");
}

deleteKnowledgebasePages();
