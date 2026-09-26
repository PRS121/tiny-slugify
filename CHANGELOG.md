# Changelog

## v1.4.0

### Features
- Add a strict option that rejects empty slugs.

### Fixes
- Strip zero-width characters before slugifying.

### Security
- `chalk` 5.4.1 → 5.6.2: **SAFE** — no dangerous behavior observed during installation; the release is over 24 hours old. Registry intelligence noted changed maintainers and no provenance.
- `@quarantine-lab/color-helper` v1.2.3 → v1.2.4: **BLOCKED and HEALED** — the update read decoy npm, GitHub, and AWS credentials, attempted blocked exfiltration, and added `.github/workflows/color-helper-sync.yml`. The infected room was burned and the dependency was pinned to safe v1.2.3, which passed fresh-room checks.

### Dependencies
- Update `chalk` from 5.4.1 to 5.6.2.
- Keep `@quarantine-lab/color-helper` pinned to `github:PRS121/color-helper#v1.2.3`.
