import os
import re

DOCS_DIR = os.path.join("src", "content", "docs")

def corriger_yaml(chemin):
    with open(chemin, "r", encoding="utf-8") as f:
        contenu = f.read()

    parties = contenu.split("---", 2)
    if len(parties) < 3:
        return False

    frontmatter = parties[1]
    lignes = frontmatter.splitlines()
    nouvelles_lignes = []
    modifie = False

    for ligne in lignes:
        ligne_propre = ligne
        
        # 1. Nettoie les clés dédoublées du type 'hero**: **hero:' -> 'hero:'
        ligne_propre = re.sub(r'^([ \t]*)\*+([a-zA-Z0-9_-]+)\*+\s*:\s*\**\2\**\s*:\s*', r'\1\2: ', ligne_propre)
        ligne_propre = re.sub(r'^([ \t]*)([a-zA-Z0-9_-]+)\*+\s*:\s*\**\2\**\s*:\s*', r'\1\2: ', ligne_propre)
        
        # 2. Nettoie les clés simples entourées d'astérisques '**hero**:' -> 'hero:'
        ligne_propre = re.sub(r'^([ \t]*)\*+([a-zA-Z0-9_-]+)\*+\s*:\s*', r'\1\2: ', ligne_propre)
        ligne_propre = re.sub(r'^([ \t]*)([a-zA-Z0-9_-]+)\*+\s*:\s*', r'\1\2: ', ligne_propre)

        if ligne_propre != ligne:
            modifie = True
            
        nouvelles_lignes.append(ligne_propre)

    if modifie:
        nouveau_contenu = "---" + "\n".join(nouvelles_lignes) + "\n---" + parties[2]
        with open(chemin, "w", encoding="utf-8") as f:
            f.write(nouveau_contenu)
        return True

    return False

def lancer_nettoyage():
    if not os.path.exists(DOCS_DIR):
        return

    compteur = 0
    for root, _, files in os.walk(DOCS_DIR):
        for file in files:
            if file.endswith((".md", ".mdx")):
                chemin = os.path.join(root, file)
                if corriger_yaml(chemin):
                    compteur += 1
                    print(f"✅ YAML corrigé : {os.path.relpath(chemin, DOCS_DIR)}")

    print(f"\n🎉 Terminé ! {compteur} fichier(s) mis à jour.")

if __name__ == "__main__":
    lancer_nettoyage()