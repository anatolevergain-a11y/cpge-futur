import os
import re

DOCS_DIR = os.path.join("src", "content", "docs")

def corriger_indentation_fichier(chemin):
    with open(chemin, "r", encoding="utf-8") as f:
        contenu = f.read()

    parties = contenu.split("---", 2)
    if len(parties) < 3:
        return False

    frontmatter = parties[1]
    lignes = frontmatter.splitlines()
    nouvelles_lignes = []
    modifie = False
    in_sidebar = False

    for ligne in lignes:
        # Détection de la clé sidebar:
        if re.match(r'^\s*sidebar\s*:\s*$', ligne):
            in_sidebar = True
            nouvelles_lignes.append("sidebar:")
            continue

        if in_sidebar:
            # Sortie de la section sidebar si une autre clé racine est détectée
            if re.match(r'^[a-zA-Z0-9_-]+\s*:', ligne) and not re.match(r'^\s*(badge|text|variant)\s*:', ligne):
                in_sidebar = False
                nouvelles_lignes.append(ligne)
                continue

            # Correction d'indentation pour badge: (2 espaces)
            if re.match(r'^\s*badge\s*:\s*$', ligne):
                nouvelles_lignes.append("  badge:")
                if ligne != "  badge:":
                    modifie = True
                continue

            # Correction d'indentation pour text: et variant: (4 espaces)
            match_tv = re.match(r'^\s*(text|variant)\s*:\s*(.*)$', ligne)
            if match_tv:
                cle = match_tv.group(1)
                valeur = match_tv.group(2)
                nouvelle_ligne = f"    {cle}: {valeur}"
                nouvelles_lignes.append(nouvelle_ligne)
                if ligne != nouvelle_ligne:
                    modifie = True
                continue

        nouvelles_lignes.append(ligne)

    if modifie:
        nouveau_contenu = "---" + "\n".join(nouvelles_lignes) + "\n---" + parties[2]
        with open(chemin, "w", encoding="utf-8") as f:
            f.write(nouveau_contenu)
        return True

    return False

def corriger_tout():
    print("🛠️ CORRECTION AUTOMATIQUE DE L'INDENTATION SIDEBAR...\n")
    if not os.path.exists(DOCS_DIR):
        print(f"❌ Dossier introuvable : {DOCS_DIR}")
        return

    compteur = 0
    for root, _, files in os.walk(DOCS_DIR):
        for file in files:
            if file.endswith((".md", ".mdx")):
                chemin = os.path.join(root, file)
                if corriger_indentation_fichier(chemin):
                    compteur += 1
                    print(f"✅ Indentation corrigée : {os.path.relpath(chemin, DOCS_DIR)}")

    print(f"\n🎉 Terminé ! {compteur} fichier(s) corrigé(s) avec succès.")

if __name__ == "__main__":
    corriger_tout()