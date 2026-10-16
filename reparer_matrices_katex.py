import os
import re

DOCS_DIR = os.path.join("src", "content", "docs")

def corriger_matrices_orphelines(contenu: str) -> str:
    # 1. Repère les blocs contenant des éléments de matrice (& et \\) se terminant par \end{pmatrix} sans \begin{pmatrix}
    lignes = contenu.splitlines()
    nouvelles_lignes = []
    en_matrice_corrompue = False
    buffer_matrice = []

    for ligne in lignes:
        # Si la ligne contient des séparateurs de matrice (& ou \\) et termine par \end{pmatrix}
        if ("&" in ligne or "\\\\" in ligne) and "\\end{pmatrix}" in ligne and "\\begin{pmatrix}" not in ligne:
            # On ajoute l'ouverture manquant au début
            ligne_corrigee = "$$\n\\begin{pmatrix}\n" + ligne
            nouvelles_lignes.append(ligne_corrigee)
        else:
            nouvelles_lignes.append(ligne)

    contenu_corrige = "\n".join(nouvelles_lignes)

    # 2. Nettoyage des balises $$ mal placées qui absorbent le texte des questions
    # Sépare la fermeture de la matrice du texte de la question 1
    contenu_corrige = re.sub(
        r'(\\end\{pmatrix\})\$\$\s*(1\.\s*\*\*\(Q1\)\*\*)',
        r'\1\n$$\n\n\2',
        contenu_corrige
    )

    return contenu_corrige

def lancer_nettoyage():
    if not os.path.exists(DOCS_DIR):
        print(f"❌ Dossier introuvable : {DOCS_DIR}")
        return

    compteur = 0
    print("🔍 Analyse et réparation des matrices LaTeX orphelines...\n")

    for root, _, files in os.walk(DOCS_DIR):
        for file in files:
            if file.endswith((".md", ".mdx")):
                chemin = os.path.join(root, file)
                with open(chemin, "r", encoding="utf-8") as f:
                    contenu = f.read()

                nouveau_contenu = corriger_matrices_orphelines(contenu)

                if nouveau_contenu != contenu:
                    with open(chemin, "w", encoding="utf-8") as f:
                        f.write(nouveau_contenu)
                    compteur += 1
                    print(f"✅ Matrice réparée : {os.path.relpath(chemin, DOCS_DIR)}")

    print(f"\n🎉 Opération terminée ! {compteur} fichier(s) ont été corrigés.")

if __name__ == "__main__":
    lancer_nettoyage()