# Agent Instructions

## Commit Workflow

When preparing a commit, follow these steps in order:
1. **Stage changes**: Stage all code/configuration changes first.
2. **Update package version**: Bump the package version in `package.json` appropriately.
3. **Create and update changelog**: Document the changes under a new version entry in `changelog.md`.
4. **Stage package.json & changelog.md**: Stage the updated `package.json` and `changelog.md` files.
5. **Commit with a descriptive message**: Write a commit message that highlights the most important change specifically (e.g., upgrading to a major version or resolving a specific type error) instead of using vague or generic wording (e.g., "dependency updates").
