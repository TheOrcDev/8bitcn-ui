---
description: Remove AI code slop
agent: build
---

Check the diff against the "main" branch including staged, unstaged, untracked and commited code, and remove all AI generated slop introduced in this branch.

This includes:

- Extra comments that a human would not add or is inconsistent with the rest of the file even when the same pattern is present in the codebase
- Extra defensive checks or try/catch blocks that are abnormal for that area of the codebase (especially if called by trusted / validated codepaths)
- Extra indentations added in the components that does not fit with the rest of files styling
- Casts to any to get around type issues
- Any other style that is inconsistent with the file
- Unnecessary emoji usage

Report at the end with only a 1-3 sentence summary of what you changed
