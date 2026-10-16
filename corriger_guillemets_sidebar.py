import os
import re

CONFIG_FILE = "astro.config.mjs"

def corriger_guillemets_config():
    if not os.path.exists(CONFIG_FILE):
        print(f"❌ Fichier introuvable : {CONFIG_FILE}")
        return

    with open(CONFIG_FILE, "r", encoding="utf-8") as f:
        contenu = f.read()

    # Remplace les paires 'texte' par "texte" dans les définitions de clés
    contenu_corrige = re.sub(r"'([^'\n]+)'", r'"\1"', contenu)

    if contenu_corrige != contenu:
        with open(CONFIG_FILE, "w", encoding="utf-8") as f:
            f.write(contenu_corrige)
        print(f"✅ Fichier {CONFIG_FILE} mis à jour avec des guillemets doubles !")
    else:
        print(f"ℹ️ Aucune modification nécessaire pour {CONFIG_FILE}.")

if __name__ == "__main__":
    corriger_guillemets_config()