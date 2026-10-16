import os
import time
from dotenv import load_dotenv
from google import genai
from google.genai.errors import APIError, ServerError

load_dotenv()
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# -------------------------------------------------------------------
# BANQUE COMPLÈTE D'ANNALES CONCOURS CPGE (SUP & SPÉ)
# -------------------------------------------------------------------
ANNALES_CONCOURS_CPGE = {
    "deuxieme-annee": {
        "bcpst": {
            "mathematiques": [
                {
                    "id": "agro-veto-maths-2025",
                    "nom": "Concours Agro-Véto 2025 - Mathématiques Épreuve 1",
                    "concours": "Agro-Véto",
                    "themes": ["Probabilités continues", "Matrice de transition", "Diagonalisation et lois limites"]
                },
                {
                    "id": "g2e-maths-2024",
                    "nom": "Concours G2E 2024 - Mathématiques et Modélisation",
                    "concours": "G2E",
                    "themes": ["Équations différentielles", "Intégrales impropres", "Ajustement par moindres carrés"]
                }
            ],
            "svt": [
                {
                    "id": "agro-veto-svt-2025",
                    "nom": "Concours Agro-Véto 2025 - Synthèse SVT",
                    "concours": "Agro-Véto",
                    "themes": ["Bilans énergétiques cellulaires", "Couplages chemiosmotiques", "Photosynthèse C3/C4"]
                }
            ],
            "physique-chimie": [
                {
                    "id": "agro-veto-pc-2024",
                    "nom": "Concours Agro-Véto 2024 - Physique-Chimie",
                    "concours": "Agro-Véto",
                    "themes": ["Thermodynamique chimique", "Loi de Poiseuille", "Cinétique enzymatique"]
                }
            ]
        },
        "mp": {
            "mathematiques": [
                {
                    "id": "mines-ponts-maths1-2025",
                    "nom": "Concours Mines-Ponts 2025 - Mathématiques 1 (MP)",
                    "concours": "Mines-Ponts",
                    "themes": ["Séries entières", "Espaces préhilbertiens", "Réduction d'endomorphismes"]
                },
                {
                    "id": "centrale-maths2-2024",
                    "nom": "Concours Centrale-Supélec 2024 - Mathématiques 2 (MP)",
                    "concours": "Centrale-Supélec",
                    "themes": ["Convergence dominée", "Matrices symétriques réelles", "Topologie des EVN"]
                }
            ],
            "informatique": [
                {
                    "id": "x-ens-info-2025",
                    "nom": "Concours X-ENS 2025 - Informatique Théorique",
                    "concours": "X-ENS",
                    "themes": ["Programmation dynamique", "Automates finis", "Complexité algorithmique"]
                }
            ]
        },
        "pc": {
            "physique": [
                {
                    "id": "mines-ponts-physique1-2025",
                    "nom": "Concours Mines-Ponts 2025 - Physique 1 (PC)",
                    "concours": "Mines-Ponts",
                    "themes": ["Induction électromagnétique", "Ondes ondulatoires", "Interférences à deux ondes"]
                }
            ],
            "chimie": [
                {
                    "id": "ccinp-chimie-2024",
                    "nom": "Concours CCINP 2024 - Chimie (PC)",
                    "concours": "CCINP",
                    "themes": ["Diagrammes Potentiel-pH", "Cinétique formelle AEQS", "Chimie organique"]
                }
            ]
        },
        "psi": {
            "sii": [
                {
                    "id": "centrale-sii-2025",
                    "nom": "Concours Centrale-Supélec 2025 - SII (PSI)",
                    "concours": "Centrale-Supélec",
                    "themes": ["Synthèse de correcteur à avance de phase", "Torseurs cinématiques", "Marge de phase"]
                }
            ]
        },
        "pt": {
            "sii": [
                {
                    "id": "banque-pt-conception-2025",
                    "nom": "Banque PT 2025 - Conception & Métrologie",
                    "concours": "Banque PT",
                    "themes": ["Tolérancement géométrique ISO", "Équilibrage dynamique", "Chaînes de cotes 3D"]
                }
            ]
        }
    }
}

# -------------------------------------------------------------------
# MOTEUR DE GÉNÉRATION DES SUJETS D'ANNALES
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

def generer_annale_concours(annee: str, filiere: str, matiere: str, info: dict):
    chemin_fichier = f"src/content/docs/{annee}/{filiere}/{matiere}/annales-concours/{info['id']}.md"

    # Sécurité anti-écrasement
    if os.path.exists(chemin_fichier):
        print(f"⏩ [CONSERVÉ] Annale déjà présente sur le disque : {chemin_fichier}")
        return

    prompt = f"""
    Tu es un concepteur officiel de sujets d'épreuves écrites aux concours CPGE ({info['concours']}).
    Rédige un SUJET OFFICIEL D'ANNALE TYPE CONCOURS ÉCRIT intégralement corrigé en Markdown :
    - Intitulé du Sujet : {info['nom']}
    - Concours : {info['concours']}
    - Filière : {filiere.upper()} ({annee})
    - Discipline : {matiere.replace('-', ' ').capitalize()}
    - Thèmes abordés : {', '.join(info['themes'])}

    CONSIGNES RIGIDES DE FORMATAGE :
    1. L'en-tête YAML DOIT être exactement sous cette forme (respecte l'indentation de 2 et 4 espaces) :
---
title: "{info['nom']}"
description: "Sujet d'annale officiel du concours {info['concours']} intégralement corrigé avec barème pas à pas."
sidebar:
  badge:
    text: "Annale Concours"
    variant: "danger"
---

    2. RÈGLES LATEX STRICTES ($inline$ et $$bloc$$) :
       - Ne mets AUCUN accent ni caractère spécial brut dans les formules mathématiques.
       - Encapsule systématiquement TOUT le texte français, les mots et les unités dans des commandes \\text{{...}} dans le mode mathématique.
         Exemple : $\\sum_{{\\text{{nœuds }} k}} i_k(t) = 0$ ou $v = 15 \\text{{ m/s}}$.

    3. STRUCTURE RIGOUREUSE DE L'ANNALE :
       - ## 📄 Partie 1 : Énoncé Officiel du Sujet (3 à 4 parties progressives type Concours)
       - ## 💡 Partie 2 : Indications du Concepteur & Pièges du Barème
       - ## 📋 Partie 3 : Correction Rédigée Pas à Pas (avec barème détaillé sur /20)
    """

    print(f"🎓 [{filiere.upper()} > {matiere}] Génération de l'annale : {info['nom']}...")
    contenu = executer_prompt_gemini(prompt)

    if contenu:
        contenu_propre = nettoyer_code_markdown(contenu)
        os.makedirs(os.path.dirname(chemin_fichier), exist_ok=True)
        with open(chemin_fichier, "w", encoding="utf-8") as f:
            f.write(contenu_propre)
        print(f"   ✅ Annale enregistrée : {chemin_fichier}")

# -------------------------------------------------------------------
# Lancement de la génération
# -------------------------------------------------------------------
if __name__ == "__main__":
    print("🚀 DÉMARRAGE DE LA GÉNÉRATION DE LA BANQUE D'ANNALES CONCOURS CPGE...\n")
    
    compteur = 0
    fichiers_traites = set()

    for annee, filieres in ANNALES_CONCOURS_CPGE.items():
        for filiere, matieres in filieres.items():
            for matiere, annales in matieres.items():
                for info in annales:
                    if info['id'] in fichiers_traites:
                        continue
                    fichiers_traites.add(info['id'])
                    generer_annale_concours(annee, filiere, matiere, info)
                    compteur += 1
                    time.sleep(1)

    print(f"\n🎉 OPÉRATION TERMINÉE ! {compteur} annale(s) de concours ont été traitées.")