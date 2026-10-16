import os
import time
from dotenv import load_dotenv
from google import genai
from google.genai.errors import APIError, ServerError

load_dotenv()
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# -------------------------------------------------------------------
# PROGRAMME D'OPTIMISATION AUX CONCOURS (SUP ET SPÉ)
# -------------------------------------------------------------------
PROGRAMME_OPTIMISATION_CONCOURS = {
    "premiere-annee": {
        "mpsi": {
            "mathematiques": {
                "id": "optimisation-concours-sup-maths",
                "nom": "Optimisation Concours : Réflexes & Méthodes Sup Maths",
                "questions_types": [
                    "Développements limités, calculs d'équivalents et étude de suites récurrentes u_{n+1} = f(u_n)",
                    "Systèmes linéaires, réduction des matrices carrées et recherche d'invariants",
                    "Espaces vectoriels, familles libres/génératrices et calculs de dimension en algèbre linéaire"
                ]
            }
        },
        "pcsi": {
            "physique-chimie": {
                "id": "optimisation-concours-sup-pc",
                "nom": "Optimisation Concours : Physique-Chimie Sup",
                "questions_types": [
                    "Oscillateurs harmoniques et amortis : étude en régime sinusoïdal forcé et diagrammes de Bode",
                    "Bilan de matière et stœchiométrie dans les réactions de titrage acido-basique et d'oxydoréduction",
                    "Optique géométrique : stigmatisme, systèmes centrés et lentilles minces"
                ]
            }
        }
    },
    "deuxieme-annee": {
        "mp": {
            "mathematiques": {
                "id": "optimisation-concours-spe-mp",
                "nom": "Optimisation Concours : Mathématiques MP/MP*",
                "questions_types": [
                    "Convergence dominée et intégration terme à terme d'une suite ou série de fonctions",
                    "Réduction des matrices symétriques réelles, réduction simultanée et formes quadratiques",
                    "Résolution d'équations différentielles linéaires par développement en série entière"
                ]
            }
        },
        "pc": {
            "physique-chimie": {
                "id": "optimisation-concours-spe-pc",
                "nom": "Optimisation Concours : Physique-Chimie PC/PC*",
                "questions_types": [
                    "Ondes électromagnétiques dans les conducteurs et plasmas : équation de dispersion et effet de peau",
                    "Cinétique chimique formelle : approximation de l'état quasi-stationnaire (AEQS) et étape quasi-déterminante",
                    "Diagrammes d'Elingham, courbes intensité-potentiel et étude de la corrosion"
                ]
            }
        },
        "psi": {
            "sii": {
                "id": "optimisation-concours-spe-psi",
                "nom": "Optimisation Concours : SII PSI/PSI*",
                "questions_types": [
                    "Synthèse et dimensionnement d'un correcteur à avance ou retard de phase (marge de phase et erreur statique)",
                    "Cinématique 3D, torseurs dynamique/cinétique et calcul de matrice d'inertie",
                    "Modélisation des asservissements discrets et analyse de stabilité"
                ]
            }
        },
        "bcpst": {
            "svt": {
                "id": "optimisation-concours-spe-bcpst",
                "nom": "Optimisation Concours : SVT BCPST",
                "questions_types": [
                    "Bilan stœchiométrique et rendement énergétique de la respiration vs fermentation (synthèse d'ATP)",
                    "Reconstruction phylogénétique par le critère de parsimonie et matrice de caractères",
                    "Génétique des populations : équilibre d'Hardy-Weinberg, dérivé génétique et sélection"
                ]
            }
        }
    }
}

# -------------------------------------------------------------------
# FONCTIONS DE GÉNÉRATION ET DE NETTOYAGE
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

def generer_fiche_optimisation(annee: str, filiere: str, matiere: str, info: dict):
    chemin_fichier = f"src/content/docs/{annee}/{filiere}/{matiere}/{info['id']}/index.md"

    # Sécurité anti-écrasement
    if os.path.exists(chemin_fichier):
        print(f"⏩ [CONSERVÉ] Fiche d'optimisation déjà présente : {chemin_fichier}")
        return

    prompt = f"""
    Tu es un président de jury et concepteur de sujets de concours CPGE (Mines-Ponts, Centrale-Supélec, X-ENS, CCINP, Banque PT, Agro-Véto).
    Rédige un guide complet "OPTIMISATION AU CONCOURS - QUESTIONS RÉCURRENTES ET RÉDACTION TYPE" en Markdown.
    - Niveau / Filière : {filiere.upper()} ({annee})
    - Discipline : {matiere.replace('-', ' ').capitalize()}
    - Titre du module : {info['nom']}

    CONSIGNES RIGIDE DE FORMATAGE (EN-TÊTE ET LATEX) :
    1. Génère un en-tête YAML strictement identique à ce modèle (respecte scrupuleusement les 2 et 4 espaces d'indentation) :
---
title: "{info['nom']}"
description: "Méthodes canoniques, rédactions modèles type concours et pièges du barème pour les concours CPGE."
sidebar:
  badge:
    text: "Méthode Concours"
    variant: "caution"
---

    2. REGLES LATEX STRICTES ($inline$ et $$bloc$$) :
       - N'utilise aucun accent direct ni symbole monétaire brut dans les équations mathématiques.
       - Encapsule systématiquement TOUT le texte français, les mots et les unités dans des commandes \\text{{...}} dans le mode mathématique.
         Exemple correct : $\\sum_{{\\text{{nœuds }} k}} i_k(t) = 0$ ou $E = 100 \\text{{ kJ/mol}}$.

    3. STRUCTURE DU DOCUMENT :
       ## 🎯 Objectif du Module & Exigences des Jurys
       
       Pour chaque question type ci-dessous :
       {chr(10).join([f"### 📌 Question Type {i+1} : {q}\\n#### 💡 Méthode canonique & Étapes de rédaction\\n#### 📋 Exemple de sujet corrigé type Concours\\n#### ⚠️ Les pièges majeurs soulignés dans les rapports de jury" for i, q in enumerate(info['questions_types'])])}
    """

    print(f"⏳ Génération de la fiche d'optimisation [{annee} > {filiere.upper()} > {matiere}]...")
    contenu = executer_prompt_gemini(prompt)

    if contenu:
        contenu_propre = nettoyer_code_markdown(contenu)
        os.makedirs(os.path.dirname(chemin_fichier), exist_ok=True)
        with open(chemin_fichier, "w", encoding="utf-8") as f:
            f.write(contenu_propre)
        print(f"   ✅ Fiche d'optimisation enregistrée : {chemin_fichier}")

# -------------------------------------------------------------------
# EXÉCUTION DU SCRIPT
# -------------------------------------------------------------------
if __name__ == "__main__":
    print("🚀 DÉMARRAGE DE LA GÉNÉRATION DES MODULES D'OPTIMISATION CONCOURS...\n")
    
    compteur = 0
    for annee, filieres in PROGRAMME_OPTIMISATION_CONCOURS.items():
        for filiere, matieres in filieres.items():
            for matiere, info in matieres.items():
                generer_fiche_optimisation(annee, filiere, matiere, info)
                compteur += 1
                time.sleep(1)

    print(f"\n🎉 OPERATION TERMINÉE ! {compteur} module(s) d'optimisation prêts.")