# Branching-strategie – slimmekeuzesinhuis (Next.js)

## Doel
We willen snel en veilig ontwikkelen. Kleine wijzigingen gaan via featurebranches naar **develop** (staging). Daarna gaat een release via een PR naar **main** (productie). Zo houden we overzicht, kunnen we testen, en blijft live stabiel.

## Branches
- **main**  
  Productie. Elke merge naar `main` kan een productie-deploy starten.
- **develop**  
  Staging/integratie. Hier komen featurebranches samen. Deze branch kan automatisch naar een staging/preview-omgeving deployen.
- **feature/***naam*  
  Voor één afgebakende wijziging. Korte looptijd. Start altijd vanaf `develop`.

> Optioneel:
- **hotfix/***naam* – alleen voor urgente productieproblemen (start vanaf `main`, na merge ook terug naar `develop` mergen).

## Naamgeving
- kleine letters, woorden met `-`
- voorbeelden:
  - `feature/homepage-layout`
  - `feature/add-search-bar`
  - `fix/menu-overflow`
  - `hotfix/login-crash`

## Pull Request (PR) flow
1. **Start**: maak `feature/...` vanaf `develop`.
2. **Werk**: commit kleine stapjes, hou de scope klein.
3. **Open PR** naar `develop`  
   - **base** = `develop`  
   - **compare** = `feature/...`
4. **Checks** (automatisch):
   - build moet slagen
   - lint en format (ESLint/Prettier)
   - type-check (TypeScript)
   - (optioneel) unit tests
5. **Review**: minimaal 1 review. Gebruik de PR-template checklist.
6. **Merge**: gebruik bij voorkeur **Squash & merge** (schone geschiedenis).
7. **Staging**: `develop` draait als preview/staging. Test daar.
8. **Release**: maak PR `develop → main`. Na merge: productie-deploy.

## Hotfix flow (optioneel)
1. Maak `hotfix/...` vanaf `main`.
2. PR naar `main` → merge → productie fix.
3. **Back-merge**: maak daarna een PR van `main → develop` zodat beide takken gelijk blijven.

## Regels & instellingen (aanbevolen)
- **Branch protection**
  - `main` (en liefst ook `develop`):  
    - Require Pull Request before merge  
    - Minimaal 1 approval  
    - (Optioneel) Require status checks to pass  
    - Require linear history
- **PR-template**  
  Bestand: `.github/pull_request_template.md` met een korte checklist (wat/waarom, test, gereed-voor-merge).
- **Auto-delete merged branches**  
  Aanzetten in repo-instellingen (scheelt opruimwerk).

## Next.js & Deploy (praktisch)
- **Preview per branch/PR** via Vercel (of andere host).  
  Zo kan iedereen klikken en testen.
- **CI-taken** (GitHub Actions of Vercel):
  - `npm ci`
  - `npm run lint`
  - `npm run type-check` (als je `tsc --noEmit` gebruikt)
  - `npm run build`
  - (optioneel) `npm test`

## Checklist (kort)
- [ ] Nieuwe `feature/...` vanaf `develop`
- [ ] Kleine, duidelijke commits
- [ ] PR naar `develop` met template ingevuld
- [ ] Build/lint/type-checks groen
- [ ] Review binnen → **Squash & merge**
- [ ] Test op staging (develop)
- [ ] PR `develop → main` voor release
- [ ] (Optioneel) Tag release (bijv. `v0.1.0`)

## ASCII-diagram

