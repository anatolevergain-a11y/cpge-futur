import os
import re

DOCS_DIR = os.path.join("src", "content", "docs")

def nettoyer_frontmatter(chemin_fichier):
    with open(chemin_fichier, "r", encoding="utf-8") as f:
        contenu = f.read()

    parties = contenu.split("---", 2)
    if len(parties) < 3:
        return False

    frontmatter_original = parties[1]
    lignes = frontmatter_original.splitlines()
    nouvelles_lignes = []
    modifie = False

    for ligne in lignes:
        ligne_propre = ligne

        # 1. Nettoie les clés dédoublées avec astérisques (ex: 'sidebar**: **sidebar:' -> 'sidebar:')
        ligne_propre = re.sub(r'^\s*\*+([a-zA-Z0-9_-]+)\*+\s*:\s*\**\1\**\s*:\s*', r'\1: ', ligne_propre)
        ligne_propre = re.sub(r'^\s*([a-zA-Z0-9_-]+)\*+\s*:\s*\**\1\**\s*:\s*', r'\1: ', ligne_propre)
        
        # 2. Nettoie les clés simples avec astérisques (ex: '**sidebar**:' -> 'sidebar:')
        ligne_propre = re.sub(r'^\s*\*+([a-zA-Z0-9_-]+)\*+\s*:\s*', r'\1: ', ligne_propre)
        ligne_propre = re.sub(r'^\s*([a-zA-Z0-9_-]+)\*+\s*:\s*', r'\1: ', ligne_propre)

        if ligne_propre != ligne:
            modifie = True

        nouvelles_lignes.append(ligne_propre)

    if modifie:
        nouveau_frontmatter = "\n".join(nouvelles_lignes)
        nouveau_contenu = "---" + nouveau_frontmatter + "\n---" + parties[2]
        with open(chemin_fichier, "w", encoding="utf-8") as f:
            f.write(nouveau_contenu)
        return True

    return False

def exécuter_nettoyage():
    print("🔍 Réparation de toutes les clés YAML et de la propriété sidebar...\n")
    if not os.path.exists(DOCS_DIR):
        print(f"❌ Dossier introuvable : {DOCS_DIR}")
        return

    compteur = 0
    for root, _, files in os.walk(DOCS_DIR):
        for file in files:
            if file.endswith((".md", ".mdx")):
                chemin = os.path.join(root, file)
                try:
                    if nettoyer_frontmatter(chemin):
                        compteur += 1
                        print(f"✅ Clés YAML nettoyées : {os.path.relpath(chemin, DOCS_DIR)}")
                except Exception as e:
                    print(f"⚠️ Erreur sur {file} : {e}")

    print(f"\n🎉 Nettoyage terminé ! {compteur} fichier(s) ont été corrigés.")

if __name__ == "__main__":
    exécuter_nettoyage()