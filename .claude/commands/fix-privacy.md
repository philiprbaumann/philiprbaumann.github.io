Audit and fix privacy issues in the Jekyll site at the current working directory.

Scan all content files for personally identifiable information that could be used to reconstruct sensitive details (birth year, exact birthday, pet names used as security questions, home address, phone numbers, etc.).

Common locations to check:
- `_thoughts/` — personal reflections often contain dates, names, locations
- `_books/` — may reference personal context
- Any collection referencing family members, pets, or security-question-style details

For each issue found:
1. Show the user the problematic text and explain the risk
2. Propose a specific redaction or obfuscation (e.g. remove exact birth year, generalize "my cat" instead of using the name)
3. Apply the fix after user confirms, or apply all fixes if user says to proceed

Do not remove meaningful content — preserve the tone and story while removing the identifying details.

$ARGUMENTS
