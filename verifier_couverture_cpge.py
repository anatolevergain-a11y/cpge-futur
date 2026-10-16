import os

DOCS_DIR = os.path.join("src", "content", "docs")

def audit_site_cpge():
    print("🔎 VÉRIFICATION DE LA COUVERTURE DES FICHIERS DU SITE CPGE...\n")
    
    if not os.path.exists(DOCS_DIR):
        print(f"❌ Le dossier {DOCS_DIR} n'existe pas encore.")
        return

    total_fiches_cours = 0
    total_exercices = 0
    chapitres_decouverts = []

    # Parcourir les dossiers de cours
    for root, dirs, files in os.walk(DOCS_DIR):
        for file in files:
            if file.endswith((".md", ".mdx")) and file != "index.mdx":
                rel_path = os.path.relpath(os.path.join(root, file), DOCS_DIR)
                parts = rel_path.split(os.sep)
                
                if file == "index.md":
                    total_fiches_cours += 1
                    # parts = [annee, filiere, matiere, chapitre, index.md]
                    if len(parts) >= 4:
                        chapitres_decouverts.append(f"{parts[0].upper()} > {parts[1].upper()} > {parts[2]} > {parts[3]}")
                elif file.startswith("exercice-"):
                    total_exercices += 1

    print(f"📊 RÉSUMÉ DU SITE EN LOCAL :")
    print(f"   • {total_fiches_cours} fiches de cours (index.md) générées.")
    print(f"   • {total_exercices} exercices corrigés générés.")
    print(f"   • Total : {total_fiches_cours + total_exercices} fichiers Markdown prêts.\n")

    print("📚 CHAPITRES TROUVÉS DANS LE SITE :")
    for chap in sorted(set(chapitres_decouverts)):
        print(f"   ✅ {chap}")

if __name__ == "__main__":
    audit_site_cpge()