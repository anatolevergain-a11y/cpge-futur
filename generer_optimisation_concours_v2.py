import os
import time
from dotenv import load_dotenv
from google import genai
from google.genai.errors import APIError, ServerError

load_dotenv()
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# -------------------------------------------------------------------
# NOUVELLES QUESTIONS TYPES PAR MATIÈRE ET FILIÈRE
# -------------------------------------------------------------------
NOUVELLES_QUESTIONS_CONCOURS = {
    "deuxieme-annee": {
        "mp": {
            "mathematiques": {
                "id": "optimisation-au-concours-v2",
                "nom": "Optimisation au concours V2 : Mathématiques MP/MP*",
                "questions_types": [
                    "Intégration terme à terme d'une série de fonctions sur un intervalle quelconque et calcul de la somme d'intégrales",
                    "Norme subordonnée, rayon spectral et étude de la convergence des suites de matrices A^k",
                    "Résolution d'une équation différentielle linéaire au voisinage d'un point singulier par séries entières"
                ]
            },
            "physique-chimie": {
                "id": "optimisation-au-concours-v2",
                "nom": "Optimisation au concours V2 : Physique MP",
                "questions_types": [
                    "Ondes électromagnétiques dans un milieu conducteur : équation de propagation, effet de peau et épaisseur de pénétration",
                    "Thermodynamique des systèmes ouverts en écoulement : bilan d'enthalpie et d'entropie dans une tuyère ou un compresseur",
                    "Mécanique des fluides : écoulement potentiel d'un fluide parfait incompressible et théorème de Bernoulli instationnaire"
                ]
            }
        },
        "mpi": {
            "informatique": {
                "id": "optimisation-au-concours-v2",
                "nom": "Optimisation au concours V2 : Informatique MPI/MPI*",
                "questions_types": [
                    "Algorithme de Bellman-Ford : détection de cycles de poids négatif et preuve de correction",
                    "Application du Lemme de l'étoile (Pumping Lemma) pour prouver qu'un langage n'est pas rationnel",
                    "Requêtes SQL avancées : sous-requêtes corrélées, auto-jointures et expressions de table communes (CTE avec WITH)"
                ]
            }
        },
        "pc": {
            "physique-chimie": {
                "id": "optimisation-au-concours-v2",
                "nom": "Optimisation au concours V2 : Physique-Chimie PC/PC*",
                "questions_types": [
                    "Cinétique chimique complexe : application de l'approximation de l'état quasi-stationnaire (AEQS) et étape quasi-déterminante",
                    "Diffusion de la matière : loi de Fick, équation de diffusion massique et profil de concentration en régime permanent",
                    "Électrochimie : courbes d'intensité-potentiel, surtension d'activation/diffusion et vitesse de corrosion"
                ]
            }
        },
        "psi": {
            "sii": {
                "id": "optimisation-au-concours-v2",
                "nom": "Optimisation au concours V2 : SII PSI/PSI*",
                "questions_types": [
                    "Synthese d'un correcteur à avance de phase : réglage des paramètres pour respecter une marge de phase imposée",
                    "Calcul du torseur dynamique d'un solide en rotation autour d'un axe fixe et matrice d'inertie",
                    "Modélisation multiphysique : schéma bloc, transformée de Laplace et équivalence électromécanique"
                ]
            }
        },
        "pt": {
            "sii": {
                "id": "optimisation-au-concours-v2",
                "nom": "Optimisation au concours V2 : SII PT/PT*",
                "questions_types": [
                    "Calcul des contraintes dans une poutre fléchie et vérification au critère de résistance de Von Mises",
                    "Étude cinématique 3D d'un train épicycloïdal complexe et formule de Willis"
                ]
            }
        },
        "bcpst": {
            "svt": {
                "id": "optimisation-au-concours-v2",
                "nom": "Optimisation au concours V2 : SVT BCPST",
                "questions_types": [
                    "Bilan stœchiométrique et rendement énergétique comparé de la respiration et des fermentations cellulaires",
                    "Reconstruction phylogénétique par la méthode de parsimonie à partir d'une matrice de caractères",
                    "Analyse quantitative de coupes histologiques et mise en relation structure-fonction"
                ]
            }
        }
    }
}

# -------------------------------------------------------------------
# FONCTIONS DE GÉNÉRATION GEMINI
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

def nettoyer_yaml(contenu: str) -> str:
    if not contenu: return ""
    contenu = contenu.strip()
    if contenu.startswith("```markdown"):
        contenu = contenu.replace("```markdown", "", 1)
    if contenu.endswith("```"):
        contenu = contenu[:-3]
    return contenu.replace("**title**:", "title:").replace("**description**:", "description:").strip()

def generer_module_optimisation_v2(annee: str, filiere: str, matiere: str, info: dict):
    chemin_index = f"src/content/docs/{annee}/{filiere}/{matiere}/{info['id']}/index.md"
    
    if os.path.exists(chemin_index):
        print(f"⏩ [CONSERVÉ] Module V2 déjà présent : {chemin_index}")
        return

    prompt = f"""
    Tu es un président de jury et concepteur de sujets de concours CPGE (Mines-Ponts, Centrale-Supélec, X-ENS, CCINP, Agro-Véto, Banque PT).
    Rédige le guide "OPTIMISATION AU CONCOURS - QUESTIONS RECURRENTES V2" en Markdown pour la filière {filiere.upper()} en {matiere.replace('-', ' ').capitalize()}.

---
title: "{info['nom']}"
description: "Analyse approfondie des nouvelles questions classiques aux concours, rédactions types et exigences des rapporteurs."
sidebar:
  badge:
    text: "Méthode Concours V2"
    variant: "caution"
---

    CONSIGNES RIGOUREUSES DE FORMATAGE :
    1. Pour le mode mathématique LaTeX ($...$ et $$...$$), n'utilise aucun accent direct. Utilise impérativement \\text{{...}} pour les unités et le texte.
    2. Pour chaque question type identifiée ci-dessous :
       - Intitulé exact de la question telle qu'elle apparaît dans les énoncés de concours.
       - Méthode canonique étape par étape exigée par les correcteurs.
       - Exemple concis de sujet avec sa rédaction modèle intégrale (/20).
       - Pièges majeurs et remarques issues des rapports de jury.

    QUESTIONS TYPES À TRAITER DANS CETTE FICHE :
    {chr(10).join([f"- {q}" for q in info['questions_types']])}

    STRUCTURE DU DOCUMENT :
    ## 🎯 Objectif & Analyse des tendances des Concours
    {chr(10).join([f"## 📌 Question Type {i+1} : {q}\\n### 💡 Méthode canonique & Étapes de rédaction\\n### 📋 Exemple de sujet & Rédaction modèle type Concours\\n### ⚠️ Les pièges majeurs soulignés dans les rapports de jury" for i, q in enumerate(info['questions_types'])])}
    """

    print(f"⏳ Génération du module V2 [{filiere.upper()} > {matiere}]...")
    contenu = executer_prompt_gemini(prompt)

    if contenu:
        contenu_propre = nettoyer_yaml(contenu)
        os.makedirs(os.path.dirname(chemin_index), exist_ok=True)
        with open(chemin_index, "w", encoding="utf-8") as f:
            f.write(contenu_propre)
        print(f"   ✅ NOUVEAU module V2 enregistré : {chemin_index}")

if __name__ == "__main__":
    print("🚀 DÉMARRAGE DE LA GÉNÉRATION DES MODULES 'OPTIMISATION AU CONCOURS V2'...\n")
    
    total_crees = 0
    for annee, filieres in NOUVELLES_QUESTIONS_CONCOURS.items():
        for filiere, matieres in filieres.items():
            for matiere, info in matieres.items():
                generer_module_optimisation_v2(annee, filiere, matiere, info)
                total_crees += 1
                time.sleep(1)

    print(f"\n🎉 GÉNÉRATION TERMINÉE ! {total_crees} NOUVEAUX MODULES D'OPTIMISATION V2 ONT ÉTÉ GÉNÉRÉS AVEC SUCCÈS.")