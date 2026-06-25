# Cert PDFs (preview-site copy)

Drop the current certificate PDF for each accreditation here, then set the
matching `pdf:` field in `g-data.jsx` (the `ACCREDS` array) to
`"assets/certs/<filename>.pdf"`. The tile becomes a clickable link with a
"View certificate ↗" affordance.

Canonical store + expiry register lives at:
`04-collateral/accreditations/REGISTER.md`

Filename convention here is name-stable (no date suffix) so the `pdf:`
field doesn't churn at every renewal — just overwrite the file. The
date-stamped copy lives in `04-collateral/accreditations/pdfs/`.

Expected filenames (set in `g-data.jsx` once present):

```
bafe.pdf
nsi-gold.pdf
firas.pdf
chas.pdf
constructionline.pdf
safecontractor.pdf
cyber-essentials.pdf
besa.pdf
fia.pdf
fpa.pdf
british-safety-council.pdf
avetta.pdf
```
