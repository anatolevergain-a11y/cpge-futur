import os
import time
from dotenv import load_dotenv
from google import genai
from google.genai.errors import APIError, ServerError

load_dotenv()
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# -------------------------------------------------------------------
# CARTOGRAPHIE DES QUESTIONS TYPES PAR FILIÈRE ET DISCIPLINE
# -------------------------------------------------------------------
MODULES_OPTIMISATION = {
    "deuxieme-annee": {
        "mp": {
            "mathematiques": {
                "id": "optimisation-au-concours",
                "nom": "Optimisation au concours : Mathématiques MP/MP*",
                "questions_types": [
                    "Étude de la continuité et dérivation d'une intégrale à paramètre sur un intervalle quelconque",
                    "Diagonalisation orthogonale d'une matrice symétrique réelle et étude de forme quadratique",
                    "Calcul du rayon de convergence et de la somme d'une série entière via équation différentielle"
                ]
            },
            "physique-chimie": {
                "id": "optimisation-au-concours",
                "nom": "Optimisation au concours : Physique-Chimie MP",
                "questions_types": [
                    "Bilan d'énergie électromagnétique, vecteur de Poynting et vecteur de Poynting moyen",
                    "Établissement de l'équation de la chaleur avec terme source et calcul de résistance thermique",
                    "Étude d'un paquet d'ondes et vitesse de groupe en physique quantique"
                ]
            },
            "informatique": {
                "id": "optimisation-au-concours",
                "nom": "Optimisation au concours : Informatique MP (IPT)",
                "questions_types": [
                    "Preuve d'invariant de boucle et terminaison par variant strictement décroissant",
                    "Écriture de requêtes SQL avec agrégations GROUP BY, HAVING et sous-requêtes imbriquées",
                    "Résolution d'un problème d'optimisation par programmation dynamique ascendante"
                ]
            }
        },
        "mpi": {
            "informatique": {
                "id": "optimisation-au-concours",
                "nom": "Optimisation au concours : Informatique MPI/MPI*",
                "questions_types": [
                    "Preuve de correction complète et analyse de complexité temporelle au pire et en moyenne",
                    "Construction d'automate fini déterministe et minimisation par l'algorithme de Moore",
                    "Réduction polynomiale pour prouver la NP-complétude d'un problème de décision"
                ]
            },
            "mathematiques": {
                "id": "optimisation-au-concours",
                "nom": "Optimisation au concours : Mathématiques MPI",
                "questions_types": [
                    "Réduction des endomorphismes et calcul du polynôme annulateur/minimal",
                    "Optimisation sous contraintes : calcul du gradient, de la hessienne et extrema locaux"
                ]
            }
        },
        "pc": {
            "physique-chimie": {
                "id": "optimisation-au-concours",
                "nom": "Optimisation au concours : Physique-Chimie PC/PC*",
                "questions_types": [
                    "Construction et exploitation d'un diagramme potentiel-pH (Pourbaix) : droites de frontière et corrosion",
                    "Étude d'un diagramme de phases binaire liquide-vapeur : théorème des moments et distillation",
                    "Application des équations de Maxwell dans un conducteur et effet de peau"
                ]
            },
            "mathematiques": {
                "id": "optimisation-au-concours",
                "nom": "Optimisation au concours : Mathématiques PC",
                "questions_types": [
                    "Calcul des coefficients de Fourier d'une fonction $T$-périodique et application du théorème de Dirichlet",
                    "Résolution de systèmes différentiels linéaires à coefficients constants"
                ]
            }
        },
        "psi": {
            "sii": {
                "id": "optimisation-au-concours",
                "nom": "Optimisation au concours : SII PSI/PSI*",
                "questions_types": [
                    "Détermination de la fonction de transfert en boucle fermée et étude des marges de phase/gain sur diagramme de Bode",
                    "Modélisation dynamique 3D par Principe Fondamental de la Dynamique et torseurs d'inertie",
                    "Calcul du degré d'hyperstatisme d'un mécanisme et définition des liaisons équivalentes"
                ]
            },
            "physique-chimie": {
                "id": "optimisation-au-concours",
                "nom": "Optimisation au concours : Physique PSI",
                "questions_types": [
                    "Bilan de puissance et étude d'un convertisseur statique (hacheur/onduleur)",
                    "Mécanique des fluides : équation d'Euler, théorème de Bernoulli et pertes de charge"
                ]
            }
        },
        "pt": {
            "sii": {
                "id": "optimisation-au-concours",
                "nom": "Optimisation au concours : SII PT/PT*",
                "questions_types": [
                    "Dimensionnement d'une pièce en RDM (sollicitations combinées : torsion, flexion, critère de Von Mises)",
                    "Analyse de chaîne de cotes et spécifications géométriques GPS"
                ]
            }
        },
        "bcpst": {
            "svt": {
                "id": "optimisation-au-concours",
                "nom": "Optimisation au concours : SVT BCPST",
                "questions_types": [
                    "Analyse méthodologique croisée de documents expérimentaux (mises en situation d'investigation)",
                    "Conception d'un schéma bilan fonctionnel répondant à un sujet de synthèse orale ou écrite",
                    "Calcul de fréquences géniques, alléliques et test du $\\chi^2$ en génétique des populations"
                ]
            },
            "mathematiques": {
                "id": "optimisation-au-concours",
                "nom": "Optimisation au concours : Mathématiques BCPST",
                "questions_types": [
                    "Intervalle de confiance et test d'hypothèse (test Z, test t de Student, test de comparaison de moyennes)",
                    "Réduction de matrices stochastiques et étude d'états d'équilibre en chaîne de Markov"
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

def generer_module_optimisation(annee: str, filiere: str, matiere: str, info: dict):
    chemin_index = f"src/content/docs/{annee}/{filiere}/{matiere}/{info['id']}/index.md"
    
    if os.path.exists(chemin_index):
        print(f"⏩ [CONSERVÉ] Module d'optimisation déjà présent : {chemin_index}")
        return

    prompt = f"""
    Tu es un président de jury et un concepteur de sujets de concours CPGE (Mines-Ponts, Centrale-Supélec, X-ENS, CCINP, Agro-Véto, Banque PT).
    Rédige un guide complet "OPTIMISATION AU CONCOURS" en Markdown pour la filière {filiere.upper()} en {matiere.replace('-', ' ').capitalize()}.

---
title: "{info['nom']}"
description: "Les questions incontournables aux concours, les erreurs à éviter et les rédactions modèles de jury."
sidebar:
  badge:
    text: "Méthode Concours"
    variant: "caution"
---

    CONSIGNES RIGOUREUSES DE FORMATAGE :
    1. Pour le mode mathématique LaTeX ($...$ et $$...$$), n'utilise aucun accent direct. Utilise impérativement \\text{{...}} pour les unités et les annotations (ex: $v = 10 \\text{{ m/s}}$ ou $E = 100 \\text{{ J}}$).
    2. Pour chaque question type identifiée ci-dessous :
       - Propose le cadrage exact de la question telle qu'elle apparaît dans les sujets.
       - Rédige la **Méthode canonique pas à pas** exigée par le barème des correcteurs.
       - Fournis une **Rédaction modèle type /20** prêt à l'emploi.
       - Liste les **Pièges et remarques des rapports de jury**.

    LISTE DES QUESTIONS TYPES À TRAITER DANS CETTE FICHE :
    {chr(10).join([f"- {q}" for q in info['questions_types']])}

    STRUCTURE DE LA FICHE :
    ## 🎯 Objectif du module & Exigences des Jurys
    {chr(10).join([f"## 📌 Question Type {i+1} : {q}\\n### 💡 Méthode canonique & Étapes de rédaction\\n### 📋 Exemple de sujet & Rédaction modèle type Concours\\n### ⚠️ Les pièges majeurs soulignés dans les rapports de jury" for i, q in enumerate(info['questions_types'])])}
    """

    print(f"⏳ Génération du module [{filiere.upper()} > {matiere}] : Optimisation au Concours...")
    contenu = executer_prompt_gemini(prompt)

    if contenu:
        contenu_propre = nettoyer_yaml(contenu)
        os.makedirs(os.path.dirname(chemin_index), exist_ok=True)
        with open(chemin_index, "w", encoding="utf-8") as f:
            f.write(contenu_propre)
        print(f"   ✅ NOUVEAU module enregistré : {chemin_index}")

if __name__ == "__main__":
    print("🚀 DÉMARRAGE DE LA GÉNÉRATION DES MODULES 'OPTIMISATION AU CONCOURS'...\n")
    
    total_crees = 0
    for annee, filieres in MODULES_OPTIMISATION.items():
        for filiere, matieres in filieres.items():
            for matiere, info in matieres.items():
                generer_module_optimisation(annee, filiere, matiere, info)
                total_crees += 1
                time.sleep(1)

    print(f"\n🎉 GÉNÉRATION TERMINÉE ! {total_crees} MODULES D'OPTIMISATION DE CONCOURS SONT PRÊTS.")