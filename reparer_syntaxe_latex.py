import os
import re

DOCS_DIR = os.path.join("src", "content", "docs")

def corriger_bloc_latex(contenu: str) -> str:
    # 1. Correction des matrices et pmatrix mal fermés
    contenu = re.sub(
        r'\\left\(\\frac\{([^}]+)\}\{([^}]+)\},\s*\\frac\{([^}]+)\}\{([^}]+)\}\\end\{pmatrix\}',
        r'\\begin{pmatrix} \\frac{\1}{\2} & \\frac{\3}{\4} \\end{pmatrix}',
        contenu
    )

    # 2. Correction des parenthèses \left( sans \right)
    contenu = re.sub(r'\\left\(([^)\n]+)\\end\{pmatrix\}', r'\\begin{pmatrix} \1 \\end{pmatrix}', contenu)

    # 3. Encapsulation des mots français isolés avec accents dans le mode mathématique $...$
    def corriger_mots_math(match):
        formule = match.group(1)
        # Si la formule contient des mots français de plus de 2 lettres avec accents
        formule = re.sub(r'\b([a-zA-’\'A-ZàâéèêëîïôûùüçÉÈÊËÀÂÔÛÙÜ]+)\b', r'\\text{\1}', formule)
        return f"${formule}$"

    # 4. Correction des indices disjoints par des sauts de ligne (ex: "I \n 0" -> "I_0")
    contenu = re.sub(r'\b([A-Za-z])\s*\n\s*([0-9])\b', r'\1_\2', contenu)

    # 5. Suppression des duplications accidentelles de termes mathématiques
    contenu = re.sub(r'(\w+\s*\\to\s*\+\\infty)\s+\1', r'\1', contenu)

    return contenu

def nettoyer_fichiers():
    if not os.path.exists(DOCS_DIR):
        print(f"❌ Dossier introuvable : {DOCS_DIR}")
        return

    compteur = 0
    print("🔍 Analyse et nettoyage de la syntaxe LaTeX sur tout le site...\n")

    for root, _, files in os.walk(DOCS_DIR):
        for file in files:
            if file.endswith((".md", ".mdx")):
                chemin = os.path.join(root, file)
                with open(chemin, "r", encoding="utf-8") as f:
                    contenu = f.read()

                nouveau_contenu = corriger_bloc_latex(contenu)

                if nouveau_contenu != contenu:
                    with open(chemin, "w", encoding="utf-8") as f:
                        f.write(nouveau_contenu)
                    compteur += 1
                    print(f"✅ LaTeX réparé : {os.path.relpath(chemin, DOCS_DIR)}")

    print(f"\n🎉 Opération terminée ! {compteur} fichier(s) ont été corrigés.")

if __name__ == "__main__":
    nettoyer_fichiers()