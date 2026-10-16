import os
import time
from dotenv import load_dotenv
from google import genai
from google.genai.errors import APIError, ServerError

load_dotenv()
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# -------------------------------------------------------------------
# PROGRAMME AVANCÉ DES FICHES DE MÉTHODE ET OBSTACLES CONCOURS CPGE
# -------------------------------------------------------------------
PROGRAMME_CONCOURS_AVANCE = {
    "deuxieme-annee": {
        "bcpst": {
            "physique-chimie": [
                {
                    "id": "thermodynamique-chimique-deltag",
                    "nom": "Thermodynamique Chimique : Enthalpie Libre & Équilibres",
                    "concours": "Agro-Véto / G2E",
                    "points_clefs": [
                        "Calcul de l'enthalpie libre de réaction \\Delta_r G et condition d'évolution spontanée",
                        "Influence de la température et de la pression (loi de van 't Hoff)",
                        "Couplage de réactions endergoniques et exergoniques en biochimie"
                    ]
                },
                {
                    "id": "mecanique-fluides-poiseuille",
                    "nom": "Mécanique des Fluides : Écoulements Visqueux & Perte de Charge",
                    "concours": "Agro-Véto / G2E",
                    "points_clefs": [
                        "Établissement du profil de vitesse de Poiseuille dans une conduite cylindrique",
                        "Calcul du débit volumique et de la résistance hydraulique",
                        "Applications au réseau vasculaire et au transport de sève brute"
                    ]
                }
            ]
        },
        "pc": {
            "physique": [
                {
                    "id": "induction-et-forces-de-laplace",
                    "nom": "Induction Électromagnétique & Bilans de Puissance",
                    "concours": "Mines-Ponts / CCINP / Centrale",
                    "points_clefs": [
                        "Calcul de la force électromotrice induite par la loi de Faraday",
                        "Bilan énergétique complet (puissance mécanique vs dissipation par effet Joule)",
                        "Étude du freinage par induction et courants de Foucault"
                    ]
                },
                {
                    "id": "optique-ondulatoire-interferences",
                    "nom": "Optique Ondulatoire : Interférences & Réseaux de Diffraction",
                    "concours": "Mines-Ponts / Centrale-Supélec",
                    "points_clefs": [
                        "Calcul du déphasage et formule de Fresnel pour le dispositif des trous d'Young",
                        "Détermination de la différence de marche et expression du contraste des franges",
                        "Étude de la résolution d'un réseau de diffraction en réfraction/réflexion"
                    ]
                }
            ]
        },
        "psi": {
            "physique": [
                {
                    "id": "navier-stokes-et-viscosite",
                    "nom": "Équations de Navier-Stokes & Écoulements Laminaires",
                    "concours": "Centrale-Supélec / Mines-Ponts",
                    "points_clefs": [
                        "Simplification de l'équation de Navier-Stokes en régime permanent et unidirectionnel",
                        "Détermination du tenseur des contraintes visqueuses et calcul de traînée",
                        "Nombre de Reynolds et transition vers le régime turbulent"
                    ]
                }
            ]
        },
        "mp": {
            "informatique": [
                {
                    "id": "programmation-dynamique-ipt",
                    "nom": "Programmation Dynamique & Optimisation Algorithmique",
                    "concours": "Mines-Ponts / Centrale / X-ENS",
                    "points_clefs": [
                        "Sous-structure optimale et chevauchement des sous-problèmes",
                        "Implémentation ascendante (bottom-up) vs mémoïsation",
                        "Application au problème du sac à dos et à la distance d'édition"
                    ]
                }
            ]
        },
        "pt": {
            "sii": [
                {
                    "id": "equilibrage-rotors-et-inertie",
                    "nom": "Cinétique & Équilibrage Dynamique des Solides en Rotation",
                    "concours": "Banque PT",
                    "points_clefs": [
                        "Calcul de la matrice d'inertie et recherche des axes principaux",
                        "Conditions d'équilibrage statique et dynamique d'un arbre en rotation",
                        "Calcul des efforts dynamiques sur les paliers de guidage"
                    ]
                }
            ]
        }
    }
}

# -------------------------------------------------------------------
# FONCTIONS DU MOTEUR DE GÉNÉRATION
# -------------------------------------------------------------------
def executer_prompt_gemini(prompt: str) -> str:
    modeles_valides = ['gemini-3.8-flash', 'gemini-3.5-flash-lite']
    for model_name in modeles_valides:
        delai = 2
        for _ in range(3):
            try:
                response = client.models.generate_content(model=model_name, contents=prompt)
                return response.text
            except (APIError, ServerError):
                time.sleep(delai)
                delai *= 2
            except Exception:
                break
    return None

def nettoyer_code_markdown(contenu: str) -> str:
    if not contenu:
        return ""
    contenu = contenu.strip()
    if contenu.startswith("```markdown"):
        contenu = contenu[11:]
    elif contenu.startswith("```"):
        contenu = contenu[3:]
    if contenu.endswith("```"):
        contenu = contenu[:-3]
    return contenu.strip()

def generer_module_concours(annee: str, filiere: str, matiere: str, info: dict):
    chemin_fichier = f"src/content/docs/{annee}/{filiere}/{matiere}/{info['id']}/index.md"

    if os.path.exists(chemin_fichier):
        print(f"⏩ [CONSERVÉ] Fiche déjà existante : {chemin_fichier}")
        return

    prompt = f"""
    Tu es un examinateur et concepteur de sujets pour les concours CPGE ({info['concours']}).
    Rédige un guide de méthode et d'optimisation en Markdown intitulé : "{info['nom']}".
    
    - Niveau / Filière : {filiere.upper()} ({annee})
    - Discipline : {matiere.replace('-', ' ').capitalize()}
    - Banques d'épreuves cibles : {info['concours']}

    CONSIGNES RIGOUREUSES DE FORMATAGE :
    1. En-tête YAML à respecter scrupuleusement (indentation exacte de 2 et 4 espaces) :
---
title: "{info['nom']}"
description: "Méthodologie détaillée, rédactions modèles et conseils des jurys de concours {info['concours']}."
sidebar:
  badge:
    text: "Méthode Concours"
    variant: "caution"
---

    2. RÈGLES LATEX STRICTES ($inline$ et $$bloc$$) :
       - Ne mets AUCUN accent ni caractère spécial brut dans les formules mathématiques.
       - Encapsule systématiquement TOUT le texte français, les mots et les unités dans des commandes \\text{{...}} dans le mode mathématique.
         Exemple : $\\Delta_r G = \\Delta_r G^\\circ + R T \\ln(Q_r)$ ou $v = 10 \\text{{ m/s}}$.

    3. STRUCTURE DU DOCUMENT :
       ## 🎯 Analyse des attentes et critères d'évaluation des jurys
       ## 📐 Rappels théoriques & Démonstrations incontournables
       
       {chr(10).join([f"### 📌 Question / Problématique classique {i+1} : {pt}\\n#### 💡 Méthode de rédaction canonique\\n#### 📋 Exercice type concours résolu pas à pas\\n#### ⚠️ Les pièges majeurs relevés dans les rapports de jury" for i, pt in enumerate(info['points_clefs'])])}
    """

    print(f"⏳ Génération du module [{annee} > {filiere.upper()} > {matiere}] : {info['nom']}...")
    contenu = executer_prompt_gemini(prompt)

    if contenu:
        contenu_propre = nettoyer_code_markdown(contenu)
        os.makedirs(os.path.dirname(chemin_fichier), exist_ok=True)
        with open(chemin_fichier, "w", encoding="utf-8") as f:
            f.write(contenu_propre)
        print(f"   ✅ Module enregistré : {chemin_fichier}")

# -------------------------------------------------------------------
# EXÉCUTION
# -------------------------------------------------------------------
if __name__ == "__main__":
    print("🚀 DÉMARRAGE DE LA GÉNÉRATION DE LA NOUVELLE VAGUE DE FICHES CONCOURS...\n")
    
    compteur = 0
    for annee, filieres in PROGRAMME_CONCOURS_AVANCE.items():
        for filiere, matieres in filieres.items():
            for matiere, fiches in matieres.items():
                for info in fiches:
                    generer_module_concours(annee, filiere, matiere, info)
                    compteur += 1
                    time.sleep(1)

    print(f"\n🎉 OPERATION TERMINÉE ! {compteur} nouveau(x) module(s) d'optimisation ont été générés.")