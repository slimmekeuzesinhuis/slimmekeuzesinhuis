# Release naar productie (develop → main)

## Wat & waarom (korte samenvatting)
- ...

## Impact / risico’s
- [ ] Geen breaking changes (of beschrijf migratie)
- [ ] ENV-variabelen (instelwaarden zoals sleutels/URLs) ongewijzigd / bijgewerkt
- [ ] Datamigraties uitgevoerd/nodig? N.v.t. / beschrijf

## Checks
- [ ] CI groen (build/lint/type-check)
- [ ] Vercel Preview gecontroleerd (staging = branch `develop`)
- [ ] Branch up-to-date met `main`

## Na merge (aftekenlijst)
- [ ] Production deploy groen op Vercel
- [ ] GitHub Release + tag (SemVer, bijv. `v0.1.0`) aangemaakt
- [ ] Changelog/README bijgewerkt
