import os
import time
from dotenv import load_dotenv
from google import genai
from google.genai.errors import APIError, ServerError

load_dotenv()
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# -------------------------------------------------------------------
# PROGRAMME DES NOTIONS SÉLECTIVES ET POINTS NOIRS CPGE
# -------------------------------------------------------------------
NOTIONS_DIFFICILES_CPGE = {
    "deuxieme-annee": {
        "bcpst": {
            "mathematiques": [
                {
                    "id": "probabilites-continues-et-densites",
                    "nom": "Probabilités Continues, Densités & Théorèmes Limites",
                    "concours": "Agro-Véto / G2E",
                    "points_clefs": [
                        "Calcul de fonctions de répartition et passage à la densité",
                        "Espérance, variance et transfert pour les variables à densité",
                        "Utilisation de la loi normale et théorème central limite aux concours Agro-Véto"
                    ]
                },
                {
                    "id": "reduction-endomorphismes-bcpst",
                    "nom": "Réduction d'Endomorphismes & Systèmes Différentiels",
                    "concours": "Agro-Véto / G2E",
                    "points_clefs": [
                        "Recherche de valeurs propres et sous-espaces propres sans polynôme annulateur",
                        "Diagonalisation et puissance $A^n$ appliquée aux suites récurrentes couplées",
                        "Résolution de systèmes différentiels $X' = AX$ en modélisation biologique"
                    ]
                },
                {
                    "id": "integrales-impropres-et-series",
                    "nom": "Intégrales Impropres & Séries Numériques",
                    "concours": "Agro-Véto / G2E",
                    "points_clefs": [
                        "Justification de la convergence aux bornes ouvertes (équivalents, comparaison)",
                        "Séries à termes positifs et critères de comparaison",
                        "Lien intégrille-série et séries entières usuelles"
                    ]
                }
            ]
        },
        "mp": {
            "mathematiques": [
                {
                    "id": "topologie-evn-et-espaces-complets",
                    "nom": "Topologie des Espaces Vectoriels Normés & Compacité",
                    "concours": "Mines-Ponts / Centrale / X-ENS",
                    "points_clefs": [
                        "Fermés, ouverts, adhérence et normes équivalentes en dimension finie",
                        "Caractérisation séquentielle de la compacité et théorème de Heine",
                        "Applications aux extrema de fonctions continues sur un compact"
                    ]
                }
            ]
        },
        "pc": {
            "chimie": [
                {
                    "id": "diagrammes-potentiel-ph-et-corrosion",
                    "nom": "Diagrammes Potentiel-pH (E-pH) & Corrosion",
                    "concours": "Mines-Ponts / CCINP / Centrale",
                    "points_clefs": [
                        "Tracé et lecture des frontières d'existence et de prédominance",
                        "Superposition de diagrammes E-pH pour prévoir la corrosion et l'immunité",
                        "Calcul des pentes des frontières avec l'équation de Nernst"
                    ]
                }
            ]
        },
        "psi": {
            "sii": [
                {
                    "id": "correcteurs-frequentiels-et-stabilite",
                    "nom": "Synthèse des Correcteurs (Avance/Retard) & Marges de Stabilité",
                    "concours": "Centrale-Supélec / Mines-Ponts",
                    "points_clefs": [
                        "Calcul des marges de phase et de gain sur diagramme de Bode",
                        "Dimensionnement d'un correcteur à avance de phase pour atteindre une marge ciblée",
                        "Annulation de l'erreur statique via action intégrale"
                    ]
                }
            ]
        },
        "mpi": {
            "informatique": [
                {
                    "id": "automates-finis-et-langages-rationnels",
                    "nom": "Automates Finis, Langages Rationnels & Lemme de l'Étoile",
                    "concours": "X-ENS / Mines-Ponts / Centrale",
                    "points_clefs": [
                        "Déterminisation et minimisation d'automates (algorithme de Hopcroft)",
                        "Passage des expressions régulières aux automates (Thompson)",
                        "Preuve de non-rationalité par le lemme de l'étoile (Pumping Lemma)"
                    ]
                }
            ]
        }
    }
}

# -------------------------------------------------------------------
# FONCTIONS DE GÉNÉRATION SÉCURISÉES
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

def generer_fiche_obstacle(annee: str, filiere: str, matiere: str, info: dict):
    chemin_fichier = f"src/content/docs/{annee}/{filiere}/{matiere}/{info['id']}/index.md"

    # Sécurité anti-écrasement
    if os.path.exists(chemin_fichier):
        print(f"⏩ [CONSERVÉ] Fiche déjà présente : {chemin_fichier}")
        return

    prompt = f"""
    Tu es un professeur agrégé et membre de jury des concours CPGE ({info['concours']}).
    Rédige un guide de maîtrise complet en Markdown intitulé : "{info['nom']}".
    
    - Niveau / Filière : {filiere.upper()} ({annee})
    - Discipline : {matiere.replace('-', ' ').capitalize()}
    - Banques d'épreuves visées : {info['concours']}

    CONSIGNES RIGIDES DE FORMATAGE :
    1. En-tête YAML à respecter scrupuleusement (respecte l'indentation de 2 et 4 espaces) :
---
title: "{info['nom']}"
description: "Fiche méthode et exercices corrigés sur les points les plus sélectifs du concours {info['concours']}."
sidebar:
  badge:
    text: "Point Clé Concours"
    variant: "danger"
---

    2. RÈGLES LATEX STRICTES ($inline$ et $$bloc$$) :
       - Ne mets AUCUN accent ni caractère spécial brut dans les formules mathématiques.
       - Encapsule systématiquement TOUT le texte français, les mots et les unités dans des commandes \\text{{...}} dans le mode mathématique.
         Exemple : $P(X \\ge x) = \\exp(-\\lambda x)$ ou $E = 250 \\text{{ kJ/mol}}$.

    3. STRUCTURE DU DOCUMENT :
       ## 🎯 Pourquoi cette notion est-elle décisive au concours ?
       ## 📐 Rappels théoriques & Formules incontournables
       
       {chr(10).join([f"### 📌 Point d'obstacle {i+1} : {pt}\\n#### 💡 Méthode de rédaction attendue par le jury\\n#### 📋 Exercice type concours résolu pas à pas\\n#### ⚠️ Les erreurs à bannir absolument" for i, pt in enumerate(info['points_clefs'])])}
    """

    print(f"⏳ Génération du module [{annee} > {filiere.upper()} > {matiere}] : {info['nom']}...")
    contenu = executer_prompt_gemini(prompt)

    if contenu:
        contenu_propre = nettoyer_code_markdown(contenu)
        os.makedirs(os.path.dirname(chemin_fichier), exist_ok=True)
        with open(chemin_fichier, "w", encoding="utf-8") as f:
            f.write(contenu_propre)
        print(f"   ✅ Module créé : {chemin_fichier}")

# -------------------------------------------------------------------
# DÉMARRAGE DU SCRIPT
# -------------------------------------------------------------------
if __name__ == "__main__":
    print("🚀 DÉMARRAGE DE LA GÉNÉRATION DES MODULES SUR LES NOTIONS SÉLECTIVES CPGE...\n")
    
    compteur = 0
    for annee, filieres in NOTIONS_DIFFICILES_CPGE.items():
        for filiere, matieres in filieres.items():
            for matiere, fiches in matieres.items():
                for info in fiches:
                    generer_fiche_obstacle(annee, filiere, matiere, info)
                    compteur += 1
                    time.sleep(1)

    print(f"\n🎉 OPERATION TERMINÉE ! {compteur} module(s) haute-sélectivité créés.")