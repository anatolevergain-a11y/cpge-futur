import os
import re

DOCS_DIR = os.path.join("src", "content", "docs")

def nettoyer_ligne_yaml(ligne: str) -> str:
    # 1. Traite les clés doublées avec astérisques (ex: 'sidebar**: **sidebar:' -> 'sidebar:')
    ligne = re.sub(r'^[*\s]*([a-zA-Z0-9_-]+)[*\s]*:[*\s]*(?:\**\1\**:\s*)?', r'\1: ', ligne)
    
    # 2. Nettoie les astérisques isolés sur les clés (ex: '**sidebar**:' -> 'sidebar:')
    ligne = re.sub(r'^[*\s]*([a-zA-Z0-9_-]+)[*\s]*:\s*', r'\1: ', ligne)
    
    # 3. Supprime les astérisques autour des valeurs entre guillemets/mots
    ligne = re.sub(r'^(title|description|text|variant):\s*\*\*(.*?)\*\*\s*$', r'\1: \2', ligne, flags=re.IGNORECASE)
    
    return ligne

def corriger_frontmatter_fichier(chemin_fichier: str) -> bool:
    with open(chemin_fichier, "r", encoding="utf-8") as f:
        contenu = f.read()

    parties = contenu.split("---", 2)
    if len(parties) < 3:
        return False

    frontmatter_original = parties[1]
    lignes = frontmatter_original.splitlines()
    nouvelles_lignes = [nettoyer_ligne_yaml(l) for l in lignes]

    nouveau_frontmatter = "\n".join(nouvelles_lignes)

    if nouveau_frontmatter != frontmatter_original:
        nouveau_contenu = "---" + nouveau_frontmatter + "\n---" + parties[2]
        with open(chemin_fichier, "w", encoding="utf-8") as f:
            f.write(nouveau_contenu)
        return True

    return False

def nettoyer_tout():
    compteur = 0
    if not os.path.exists(DOCS_DIR):
        print(f"❌ Dossier introuvable : {DOCS_DIR}")
        return

    print("🔍 Réparation intégrale des en-têtes YAML (title, sidebar, description...)...\n")

    for root, _, files in os.walk(DOCS_DIR):
        for file in files:
            if file.endswith((".md", ".mdx")):
                chemin = os.path.join(root, file)
                if corriger_frontmatter_fichier(chemin):
                    compteur += 1
                    print(f"✅ Réparé : {os.path.relpath(chemin, DOCS_DIR)}")

    print(f"\n🎉 Nettoyage terminé ! {compteur} fichier(s) ont été corrigés.")

if __name__ == "__main__":
    nettoyer_tout()