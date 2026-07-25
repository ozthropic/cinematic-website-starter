# Security Policy

## Reporting a Vulnerability

Please do not include credentials, personal data, or exploit details in a public issue.
Report a suspected vulnerability privately to the repository owner through GitHub's
private vulnerability reporting feature.

## Secret Handling

- Never commit `.env`, `.env.local`, tokens, passwords, or private keys.
- Treat every `VITE_*` variable as public because Vite exposes it to the browser.
- Put private integrations behind a server-side endpoint.
- Revoke or rotate an exposed credential before rewriting Git history.
- Scan the current tree and complete Git history before changing the repository to public.
