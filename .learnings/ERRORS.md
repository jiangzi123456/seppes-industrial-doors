## [ERR-20261117-001] powershell-home-variable-collision

**Logged**: 2026-11-17T18:00:00+08:00
**Priority**: medium
**Status**: resolved
**Area**: infra

### Summary
A production verification command used `$home`, which PowerShell treated as the read-only `$HOME` variable.

### Error
```text
Cannot overwrite variable HOME because it is read-only or constant.
```

### Context
- Task attempted: Verify the production homepage after deployment.
- Command/tool/API: PowerShell `Invoke-WebRequest`.
- Inputs: `https://www.seppesde.com/`.
- Environment: Windows PowerShell, where variable names are case-insensitive.

### Suspected Cause
PowerShell treated `$home` and `$HOME` as the same variable.

### Suggested Fix
Use a task-specific variable such as `$productionHomepageResponse` and never use `$home` in PowerShell scripts.

### Metadata
- Reproducible: yes
- Related files: none
- Tags: powershell, deployment, variable-naming
