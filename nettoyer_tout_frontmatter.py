import os
import re

DOCS_DIR = os.path.join("src", "content", "docs")

def nettoyer_frontmatter_global():
    compteur = 0
    if not os.path.exists(DOCS_DIR):
        print(f"❌ Dossier introuvable : {DOCS_DIR}")
        return

    for root, _, files in os.walk(DOCS_DIR):
        for file in files:
            if file.endswith((".md", ".mdx")):
                chemin = os.path.join(root, file)
                
                with open(chemin, "r", encoding="utf-8") as f:
                    contenu = f.read()

                nouveau_contenu = contenu

                # 1. Nettoyage des astérisques autour des clés YAML (title, description, sidebar, etc.)
                nouveau_contenu = re.sub(r'^\s*\*+([a-zA-Z0-9_-]+)\*+\s*:\s*', r'\1: ', nouveau_contenu, flags=re.MULTILINE)
                nouveau_contenu = re.sub(r'^\s*([a-zA-Z0-9_-]+)\*+\s*:\s*', r'\1: ', nouveau_contenu, flags=re.MULTILINE)
                nouveau_contenu = re.sub(r'^\s*\*+([a-zA-Z0-9_-]+)\s*:\s*', r'\1: ', nouveau_contenu, flags=re.MULTILINE)

                # 2. Correction des répétitions de clés (ex: title: **title: "..." -> title: "...")
                nouveau_contenu = re.sub(r'^(title|description):\s*(?:\*\*)?(?:title|description)?\**:\s*', r'\1: ', nouveau_contenu, flags=re.MULTILINE)

                if nouveau_contenu != contenu:
                    with open(chemin, "w", encoding="utf-8") as f:
                        f.write(nouveau_contenu)
                    compteur += 1
                    print(f"✅ Nettoyé : {os.path.relpath(chemin, DOCS_DIR)}")

    print(f"\n🎉 Nettoyage terminé ! {compteur} fichier(s) ont été corrigés.")

if __name__ == "__main__":
    nettoyer_frontmatter_global()