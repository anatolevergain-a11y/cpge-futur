import os
import re

DOCS_DIR = os.path.join("src", "content", "docs")

def corriger_equations_physique(contenu: str) -> str:
    # 1. Uniformisation de la loi des nœuds
    contenu = re.sub(
        r'\\sum_\{?\s*nœuds\s*k?\}?\s*i\s*k?\(t\)\s*=\s*0',
        r'\\sum_{\\text{nœuds } k} i_k(t) = 0',
        contenu, flags=re.IGNORECASE
    )

    # 2. Uniformisation de la loi des mailles
    contenu = re.sub(
        r'\\sum_\{?\s*maille\s*k?\}?\s*u\s*k?\(t\)\s*=\s*0',
        r'\\sum_{\\text{maille } k} u_k(t) = 0',
        contenu, flags=re.IGNORECASE
    )

    # 3. Correction des indices ik(t) -> i_k(t) et uk(t) -> u_k(t)
    contenu = re.sub(r'\b([iu])\s*k\(t\)', r'\1_k(t)', contenu)

    # 4. Protection du texte français sous les symboles \sum
    contenu = re.sub(r'\\sum_\{([a-zA-Zà-ÿ]+)\}', r'\\sum_{\\text{\1}}', contenu)

    return contenu

def executer_nettoyage():
    compteur = 0
    for root, _, files in os.walk(DOCS_DIR):
        for file in files:
            if file.endswith((".md", ".mdx")):
                chemin = os.path.join(root, file)
                with open(chemin, "r", encoding="utf-8") as f:
                    contenu = f.read()

                nouveau_contenu = corriger_equations_physique(contenu)

                if nouveau_contenu != contenu:
                    with open(chemin, "w", encoding="utf-8") as f:
                        f.write(nouveau_contenu)
                    compteur += 1
                    print(f"✅ Équations corrigées : {os.path.relpath(chemin, DOCS_DIR)}")

    print(f"\n🎉 Terminé ! {compteur} fichier(s) mis à jour.")

if __name__ == "__main__":
    executer_nettoyage()