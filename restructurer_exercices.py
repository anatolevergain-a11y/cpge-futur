import os
import re

DOCS_DIR = os.path.join("src", "content", "docs")

def corriger_structure_fichier(chemin):
    with open(chemin, "r", encoding="utf-8") as f:
        contenu = f.read()

    # Définition d'un titre par défaut selon le dossier et fichier
    nom_fichier = os.path.basename(chemin).replace(".md", "").replace(".mdx", "")
    dossier_parent = os.path.basename(os.path.dirname(chemin))
    titre_defaut = f"{nom_fichier.capitalize()} - {dossier_parent.replace('-', ' ').capitalize()}"

    parties = contenu.split("---")

    # Si le fichier possède déjà un bloc YAML valide avec 'title:'
    if contenu.startswith("---") and len(parties) >= 3:
        frontmatter = parties[1]
        if re.search(r'^\s*title\s*:', frontmatter, re.MULTILINE | re.IGNORECASE):
            return False

    # Si le bloc YAML est absent ou corrompu par du texte Markdown
    texte_sans_tiret_initial = contenu.lstrip()
    if texte_sans_tiret_initial.startswith("---"):
        texte_sans_tiret_initial = texte_sans_tiret_initial[3:].lstrip()

    # Récupération du premier titre Markdown s'il existe
    match_titre = re.search(r'^#+\s*(.+)$', texte_sans_tiret_initial, re.MULTILINE)
    if match_titre:
        titre_extrait = match_titre.group(1).replace('"', "'").strip()
        if len(titre_extrait) > 3:
            titre_defaut = titre_extrait

    # Reconstruction de l'en-tête YAML conforme
    frontmatter_valide = f'---\ntitle: "{titre_defaut}"\ndescription: "Fiche de cours et d\'exercice CPGE."\n---\n\n'
    nouveau_contenu = frontmatter_valide + texte_sans_tiret_initial

    with open(chemin, "w", encoding="utf-8") as f:
        f.write(nouveau_contenu)
    return True

def exécuter_restructuration():
    print("🛠️ RESTRUCTURATION DES EN-TÊTES YAML SUR TOUT LE SITE...\n")
    if not os.path.exists(DOCS_DIR):
        print(f"❌ Dossier introuvable : {DOCS_DIR}")
        return

    compteur = 0
    for root, _, files in os.walk(DOCS_DIR):
        for file in files:
            if file.endswith((".md", ".mdx")) and file != "index.mdx":
                chemin = os.path.join(root, file)
                try:
                    if corriger_structure_fichier(chemin):
                        compteur += 1
                        print(f"✅ Structure corrigée : {os.path.relpath(chemin, DOCS_DIR)}")
                except Exception as e:
                    print(f"⚠️ Erreur sur {file} : {e}")

    print(f"\n🎉 Terminé ! {compteur} fichier(s) ont été restructurés avec succès.")

if __name__ == "__main__":
    exécuter_restructuration()