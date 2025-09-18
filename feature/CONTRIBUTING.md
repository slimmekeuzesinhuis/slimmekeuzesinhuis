Branch conventies (GitHub repo slimmekeuzesinhuis)
1. Hoofdbranches

main → productie / stabiele releases
develop → integratie van nieuwe features, voorbereiden releases

2. Werkbranches

Gebruik altijd kleine letters, woorden gescheiden met -, en een prefix om het type branch duidelijk te maken:

feature/
Voor nieuwe functionaliteit.
🔹 Voorbeeld: feature/homepage-layout, feature/add-search-bar

fix/
Voor bugfixes die nog niet live zijn.
🔹 Voorbeeld: fix/mobile-menu

hotfix/
Voor urgente productiebugs die direct vanaf main opgelost moeten worden.
🔹 Voorbeeld: hotfix/login-crash

release/
Voor releasevoorbereiding vanuit develop naar main. Hier kun je nog kleine fixes doen.
🔹 Voorbeeld: release/v1.0.0

chore/ (optioneel)
Voor onderhoudstaken zoals CI/CD, documentatie, of refactoren.
🔹 Voorbeeld: chore/update-dependencies
