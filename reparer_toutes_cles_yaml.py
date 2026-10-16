import os
import re

DOCS_DIR = os.path.join("src", "content", "docs")

def corriger_ligne_yaml(ligne: str) -> str:
    # 1. Traite les clés doublées du type 'cle**: **cle:' -> 'cle:'
    ligne = re.sub(r'^\s*\*+([a-zA-Z0-9_-]+)\*+\s*:\s*\**\1\**\s*:\s*', r'\1: ', ligne)
    ligne = re.sub(r'^\s*([a-zA-Z0-9_-]+)\*+\s*:\s*\**\1\**\s*:\s*', r'\1: ', ligne)
    ligne = re.sub(r'^\s*([a-zA-Z0-9_-]+)\*+\s*:\s*\**\s*:\s*', r'\1: ', ligne)

    # 2. Nettoie les astérisques résiduels sur le nom de la clé (ex: '**title**:' -> 'title:')
    ligne = re.sub(r'^\s*\*+([a-zA-Z0-9_-]+)\*+\s*:\s*', r'\1: ', ligne)
    ligne = re.sub(r'^\s*([a-zA-Z0-9_-]+)\*+\s*:\s*', r'\1: ', ligne)
    ligne = re.sub(r'^\s*\*+([a-zA-Z0-9_-]+)\s*:\s*', r'\1: ', ligne)

    return ligne

def nettoyer_fichier(chemin_fichier: str) -> bool:
    with open(chemin_fichier, "r", encoding="utf-8") as f:
        contenu = f.read()

    parties = contenu.split("---", 2)
    if len(parties) < 3:
        return False

    frontmatter_original = parties[1]
    lignes = frontmatter_original.splitlines()
    nouvelles_lignes = [corriger_ligne_yaml(l) for l in lignes]

    nouveau_frontmatter = "\n".join(nouvelles_lignes)

    if nouveau_frontmatter != frontmatter_original:
        nouveau_contenu = "---" + nouveau_frontmatter + "\n---" + parties[2]
        with open(chemin_fichier, "w", encoding="utf-8") as f:
            f.write(nouveau_contenu)
        return True

    return False

def lancer_nettoyage():
    if not os.path.exists(DOCS_DIR):
        print(f"❌ Dossier introuvable : {DOCS_DIR}")
        return

    compteur = 0
    print("🔍 Analyse et réparation intégrale de tous les fichiers Markdown/MDX...\n")

    for root, _, files in os.walk(DOCS_DIR):
        for file in files:
            if file.endswith((".md", ".mdx")):
                chemin = os.path.join(root, file)
                if nettoyer_fichier(chemin):
                    compteur += 1
                    print(f"✅ Réparé : {os.path.relpath(chemin, DOCS_DIR)}")

    print(f"\n🎉 Nettoyage terminé ! {compteur} fichier(s) ont été corrigés.")

if __name__ == "__main__":
    lancer_nettoyage()