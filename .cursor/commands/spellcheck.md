---
description: spellcheck all markdown file changes
---

# Spellcheck Markdown Changes

Look at all the unstaged changes to markdown (.md, .mdx) files, pull out the lines that have changed, and check for spelling and grammar errors.

At the end only report back with a markdown table similar to this example:

| File        | Error       | Correction  |
| ----------- | ----------- | ----------- |
| example.md  | mispelled   | misspelled  |
| another.mdx | bad grammer | bad grammar |

If no errors are found, return: "No spelling or grammar errors found in the unstaged markdown changes."