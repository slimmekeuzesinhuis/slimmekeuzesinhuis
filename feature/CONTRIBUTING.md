# Branching conventies voor SlimmeKeuzesInHuis

## Hoofdbranches
- **main** → productie / stabiele releases  
- **develop** → integratie van nieuwe features, voorbereiden releases  

## Werkbranches
Gebruik kleine letters, woorden gescheiden door `-`, en een prefix:

- **feature/**  
  Voor nieuwe functionaliteit.  
  Voorbeeld: `feature/homepage-layout`, `feature/add-search-bar`  

- **fix/**  
  Voor bugfixes die nog niet live zijn.  
  Voorbeeld: `fix/mobile-menu`  

- **hotfix/**  
  Voor urgente productiebugs direct vanaf **main**.  
  Voorbeeld: `hotfix/login-crash`  

- **release/**  
  Voor releasevoorbereiding vanuit develop naar main.  
  Voorbeeld: `release/v1.0.0`  

- **chore/** *(optioneel)*  
  Voor onderhoud, documentatie of refactoren.  
  Voorbeeld: `chore/update-dependencies`

---

## Werkwijze
1. Maak een nieuwe branch vanaf **develop** met een duidelijke naam (zie hierboven).  
2. Doe je wijzigingen in die branch.  
3. Maak een **Pull Request** naar **develop**.  
4. Alleen bij een release maak je een **Pull Request** van **develop** naar **main**.  
5. Na het mergen: verwijder de featurebranch.

---

## Extra tip
- Voeg in commit-boodschappen korte omschrijvingen toe, zoals `feat: homepage layout` of `fix: login bug`.  
- Zo blijven PR’s en changelogs overzichtelijk.
