import os
import re

DOCS_DIR = os.path.join("src", "content", "docs")

def corriger_yaml_fichier(chemin):
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
        # Recherche les clés de type string (title, description, etc.)
        match = re.match(r'^([ \t]*)(title|description|text|variant)\s*:\s*(.*)$', ligne, flags=re.IGNORECASE)
        
        if match:
            indent = match.group(1)
            cle = match.group(2).lower()
            valeur = match.group(3).strip()

            # Enlever les guillemets existants aux extrémités s'il y en a
            if (valeur.startswith('"') and valeur.endswith('"')) or (valeur.startswith("'") and valeur.endswith("'")):
                valeur = valeur[1:-1]
            
            # Remplacer les guillemets internes (doubles et simples) par des espaces pour plus de sécurité
            valeur = valeur.replace('"', ' ').replace("'", ' ')

            # Réécrire la ligne avec des guillemets simples
            nouvelle_ligne = f"{indent}{cle}: '{valeur}'"
            
            if nouvelle_ligne != ligne:
                modifie = True
            nouvelles_lignes.append(nouvelle_ligne)
        else:
            nouvelles_lignes.append(ligne)

    if modifie:
        nouveau_frontmatter = "\n".join(nouvelles_lignes)
        nouveau_contenu = "---\n" + nouveau_frontmatter.strip("\n") + "\n---\n\n" + parties[2].lstrip()
        with open(chemin, "w", encoding="utf-8") as f:
            f.write(nouveau_contenu)
        return True

    return False

def executer_nettoyage():
    print("🛡️ LANCEMENT DU NETTOYAGE DES GUILLEMETS YAML...")
    compteur = 0
    if not os.path.exists(DOCS_DIR):
        print(f"❌ Dossier introuvable : {DOCS_DIR}")
        return

    for root, _, files in os.walk(DOCS_DIR):
        for file in files:
            if file.endswith((".md", ".mdx")):
                chemin = os.path.join(root, file)
                try:
                    if corriger_yaml_fichier(chemin):
                        compteur += 1
                        print(f"✅ Corrigé : {os.path.relpath(chemin, DOCS_DIR)}")
                except Exception as e:
                    print(f"⚠️ Erreur sur {file}: {e}")

    print(f"\n🎉 Terminé ! {compteur} fichier(s) ont été corrigés.")

if __name__ == "__main__":
    executer_nettoyage()