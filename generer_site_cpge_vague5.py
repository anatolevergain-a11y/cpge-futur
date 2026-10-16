import os
import time
from dotenv import load_dotenv
from google import genai
from google.genai.errors import APIError, ServerError

# Chargement de la clé API
load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")
client = genai.Client(api_key=api_key)

# -------------------------------------------------------------------
# PROGRAMME OFFICIEL CPGE : VAGUE 5 (LES COMPLÉMENTS POINTUS)
# -------------------------------------------------------------------
PROGRAMME_CPGE = {
    "premiere-annee": {
        "mpsi": {
            "mathematiques": [
                {"id": "determinants", "nom": "Groupe symétrique et Déterminants", "themes": ["Déterminant d'une matrice carrée", "Calculs pratiques et systèmes de Cramer"]},
                {"id": "espaces-euclidiens", "nom": "Espaces préhilbertiens réels", "themes": ["Produit scalaire et inégalité de Cauchy-Schwarz", "Projecteurs orthogonaux et distances"]}
            ],
            "physique-chimie": [
                {"id": "statique-fluides", "nom": "Statique des fluides", "themes": ["Loi de la statique des fluides", "Poussée d'Archimède et applications"]}
            ]
        },
        "pcsi": {
            "physique-chimie": [
                {"id": "liaisons-chimiques", "nom": "Liaisons chimiques et géométrie", "themes": ["Modèle de Lewis et VSEPR", "Polarité et interactions de Van der Waals"]},
                {"id": "cristallographie-avancee", "nom": "Cristallographie et solides", "themes": ["Sites interstitiels", "Cristaux ioniques et covalents"]}
            ],
            "mathematiques": [
                {"id": "equations-differentielles", "nom": "Équations différentielles linéaires", "themes": ["Résolution des équations du 1er ordre", "Équations du 2nd ordre à coefficients constants"]}
            ]
        },
        "mp2i": {
            "informatique": [
                {"id": "langage-c-avance", "nom": "Programmation avancée en C", "themes": ["Gestion manuelle de la mémoire (malloc/free)", "Pointeurs de fonctions et structures"]},
                {"id": "graphes-algorithmique", "nom": "Algorithmique des graphes", "themes": ["Parcours en largeur (BFS) et profondeur (DFS)", "Recherche de plus court chemin"]}
            ]
        },
        "ptsi": {
            "sii": [
                {"id": "cinematique-graphique", "nom": "Cinématique du solide rigide", "themes": ["Composition des mouvements", "Centres instantanés de rotation (CIR)"]}
            ]
        },
        "bcpst": {
            "svt": [
                {"id": "enzymologie", "nom": "Cinétique enzymatique", "themes": ["Modèle de Michaelis-Menten", "Inhibiteurs compétitifs et non compétitifs"]},
                {"id": "respiration-fermentation", "nom": "Métabolisme et conversion d'énergie", "themes": ["Glycolyse et cycle de Krebs", "Chaîne respiratoire mitochondriale"]}
            ]
        }
    },
    "deuxieme-annee": {
        "mp": {
            "mathematiques": [
                {"id": "probabilites-variables-continues", "nom": "Variables aléatoires à densité", "themes": ["Lois normales et exponentielles", "Fonctions de répartition et densités"]},
                {"id": "calcul-differentiel-avance", "nom": "Calcul différentiel", "themes": ["Matrice Jacobienne et fonctions de plusieurs variables", "Théorème d'inversion locale"]}
            ]
        },
        "pc": {
            "physique-chimie": [
                {"id": "physique-statistique", "nom": "Introduction à la physique statistique", "themes": ["Micro-états et macro-états", "Distribution de Maxwell-Boltzmann"]}
            ]
        },
        "psi": {
            "sii": [
                {"id": "machines-electriques", "nom": "Conversion électromécanique", "themes": ["Machine à courant continu", "Machine asynchrone et champs tournants"]}
            ]
        },
        "pt": {
            "sii": [
                {"id": "resistance-materiaux", "nom": "Résistance des matériaux (RDM)", "themes": ["Traction, compression et cisaillement", "Flexion et moment quadratique"]}
            ]
        }
    }
}

# -------------------------------------------------------------------
# MOTEUR DE GÉNÉRATION 
# -------------------------------------------------------------------
def executer_prompt_gemini(prompt: str) -> str:
    modeles_valides = ['gemini-3.8-flash', 'gemini-3.5-flash-lite']
    for model_name in modeles_valides:
        delai = 2
        for tentative in range(1, 4):
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

def generer_fichier(type_doc: str, annee: str, filiere: str, matiere: str, chap_nom: str, theme: str, num: int, chemin: str):
    if os.path.exists(chemin):
        print(f"⏩ [CONSERVÉ] {type_doc.capitalize()} déjà présent : {chemin}")
        return

    if type_doc == "cours":
        prompt = f"""
        Tu es un professeur de CPGE ({filiere.upper()}) très rigoureux.
        Rédige une FICHE DE COURS exhaustive (Conforme au Bulletin Officiel) en Markdown.
        Niveau: {annee}, Filière: {filiere.upper()}, Matière: {matiere.replace('-', ' ').capitalize()}, Chapitre: {chap_nom}
        Commence OBLIGATOIREMENT par :
---
title: "Cours : {chap_nom}"
description: "Synthèse de cours, théorèmes et démonstrations."
---
        Utilise LaTeX (\\text{{...}} pour les unités). Structure avec Définitions, Théorèmes, Méthodes, Pièges.
        """
    else:
        prompt = f"""
        Tu es un concepteur de sujets de concours CPGE (X-ENS, Mines-Ponts, Centrale).
        Rédige un PROBLÈME GUIDÉ corrigé pas à pas en Markdown.
        Filière: {filiere.upper()}, Matière: {matiere.replace('-', ' ').capitalize()}, Chapitre: {chap_nom}, Thème: {theme}
        Commence OBLIGATOIREMENT par :
---
title: "Exercice {num} : {theme}"
description: "Problème d'entraînement type concours officiel."
---
        Exige une analyse critique des limites du modèle. Utilise LaTeX (\\text{{...}} pour les unités). Structure: Énoncé, Questions, Pistes, Corrigé.
        """

    print(f"⏳ Génération [{filiere.upper()}] {type_doc.upper()} : {chap_nom} {('- ' + theme) if theme else ''}...")
    contenu = executer_prompt_gemini(prompt)
    
    if contenu:
        contenu_propre = nettoyer_yaml(contenu)
        os.makedirs(os.path.dirname(chemin), exist_ok=True)
        with open(chemin, "w", encoding="utf-8") as f:
            f.write(contenu_propre)
        print(f"   ✅ NOUVEAU fichier enregistré : {chemin}")

if __name__ == "__main__":
    print("🚀 DÉMARRAGE DE LA VAGUE 5 (COMPLÉMENTS OFFICIELS CPGE)...\n")
    
    total_nouveaux = 0
    for annee, filieres in PROGRAMME_CPGE.items():
        for filiere, matieres in filieres.items():
            for matiere, chapitres in matieres.items():
                for chap in chapitres:
                    c_id, c_nom = chap["id"], chap["nom"]
                    
                    p_cours = f"src/content/docs/{annee}/{filiere}/{matiere}/{c_id}/index.md"
                    if not os.path.exists(p_cours):
                        generer_fichier("cours", annee, filiere, matiere, c_nom, "", 0, p_cours)
                        total_nouveaux += 1
                        time.sleep(1)

                    for i, theme in enumerate(chap["themes"], start=1):
                        p_ex = f"src/content/docs/{annee}/{filiere}/{matiere}/{c_id}/exercice-{i}.md"
                        if not os.path.exists(p_ex):
                            generer_fichier("exercice", annee, filiere, matiere, c_nom, theme, i, p_ex)
                            total_nouveaux += 1
                            time.sleep(1)

    print(f"\n🎉 VAGUE 5 TERMINÉE ! {total_nouveaux} NOUVEAUX FICHIERS OFFICIELS INTÉGRÉS.")
    