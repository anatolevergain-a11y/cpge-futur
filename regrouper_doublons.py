import os
import shutil
import re

# Dossier racine du contenu Astro / Starlight
DOCS_DIR = os.path.join("src", "content", "docs")

# Dictionnaire de correspondance : "dossier_doublon_a_fusionner": "dossier_principal_cible"
# Vous pouvez ajouter ou adapter les paires de sous-dossiers ici.
MAPPING_DOUBLONS = {
    # Mathématiques
    "calcul-diff": "calcul-differentiel",
    "calcul-differentiel-avance": "calcul-differentiel",
    "reduction-matrices-avancée": "reduction-matrices",
    "series-fonctions-entieres": "series-entieres",
    "topologie-espaces-normes": "topologie",
    "algebre-lineaire-bcpst1": "algebre-lineaire",
    "analyse-proba-bcpst1": "analyse-fonctions",

    # Physique-Chimie
    "mecanique-des-fluides": "mecanique-fluides",
    "mecanique-fluides-mp": "mecanique-fluides",
    "mecanique-fluides-pc": "mecanique-fluides",
    "mecanique-fluides-psi": "mecanique-fluides",
    "optique-ondulatoire-mp": "optique-ondulatoire",
    "optique-ondulatoire-psi": "optique-ondulatoire",
    "optique-ondulatoire-bcpst2": "optique-ondulatoire",
    "electromagnetisme-maxwell": "electromagnetisme",
    "electromagnetisme-maxwell-psi": "electromagnetisme",
    "electromagnetisme-maxwell-pt": "electromagnetisme",
    "chimie-orga-avancee": "chimie-organique-avancee",
    "chimie-orga-base": "chimie-organique",

    # Informatique & SII
    "bases-donnees-mpi": "bases-de-donnees",
    "sql-bcpst2": "bases-de-donnees",
    "sql-bases-de-donnees-bcpst1": "bases-de-donnees",
    "asservissements-continus": "asservissements",
    "asservissements-continus-discrets": "asservissements",
    "statique-solides": "statique",
}

def obtenir_prochain_numero_exercice(dossier_cible):
    """Trouve le numéro d'exercice suivant disponible dans le dossier cible."""
    if not os.path.exists(dossier_cible):
        return 1
    fichiers = os.listdir(dossier_cible)
    numeros = []
    for f in fichiers:
        match = re.match(r"exercice-(\d+)\.md", f)
        if match:
            numeros.append(int(match.group(1)))
    return max(numeros, default=0) + 1

def fusionner_chapitres_doublons():
    print("🚀 DÉMARRAGE DU REGROUPEMENT ET DE LA FUSION DES DOUBLONS...\n")
    
    fichiers_deplaces = 0
    dossiers_supprimes = 0

    for root, dirs, files in os.walk(DOCS_DIR, topdown=False):
        for nom_dossier in list(dirs):
            if nom_dossier in MAPPING_DOUBLONS:
                dossier_source = os.path.join(root, nom_dossier)
                dossier_cible_nom = MAPPING_DOUBLONS[nom_dossier]
                dossier_cible = os.path.join(root, dossier_cible_nom)

                if not os.path.exists(dossier_source):
                    continue

                os.makedirs(dossier_cible, exist_ok=True)
                print(f"📂 Fusion : {os.path.relpath(dossier_source, DOCS_DIR)} ➔ {dossier_cible_nom}")

                for item in os.listdir(dossier_source):
                    chemin_item_source = os.path.join(dossier_source, item)
                    
                    if os.path.isfile(chemin_item_source):
                        # Gestion de la fiche de cours principal
                        if item == "index.md":
                            chemin_item_cible = os.path.join(dossier_cible, "index.md")
                            if not os.path.exists(chemin_item_cible):
                                shutil.move(chemin_item_source, chemin_item_cible)
                                print("   📘 Fiche de cours (index.md) déplacée vers la cible.")
                                fichiers_deplaces += 1
                            else:
                                os.remove(chemin_item_source)
                                print("   ⏩ Fiche de cours déjà présente dans le dossier cible (doublon supprimé).")

                        # Renommage et transfert des exercices
                        elif item.startswith("exercice-") and item.endswith(".md"):
                            num_suivant = obtenir_prochain_numero_exercice(dossier_cible)
                            nouveau_nom = f"exercice-{num_suivant}.md"
                            chemin_item_cible = os.path.join(dossier_cible, nouveau_nom)
                            
                            shutil.move(chemin_item_source, chemin_item_cible)
                            print(f"   ✏️ Exercice transféré : {item} ➔ {nouveau_nom}")
                            fichiers_deplaces += 1
                        
                        else:
                            chemin_item_cible = os.path.join(dossier_cible, item)
                            if not os.path.exists(chemin_item_cible):
                                shutil.move(chemin_item_source, chemin_item_cible)
                                fichiers_deplaces += 1

                # Nettoyage du dossier source une fois vidé
                try:
                    os.rmdir(dossier_source)
                    dossiers_supprimes += 1
                    print(f"   🗑️ Dossier source supprimé : {nom_dossier}\n")
                except OSError:
                    print(f"   ⚠️ Dossier non vide, conservé : {nom_dossier}\n")

    print(f"🎉 OPÉRATION TERMINÉE : {fichiers_deplaces} fichier(s) fusionné(s) et {dossiers_supprimes} dossier(s) doublons nettoyé(s) !")

if __name__ == "__main__":
    fusionner_chapitres_doublons()