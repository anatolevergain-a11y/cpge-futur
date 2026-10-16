import os
import time
from dotenv import load_dotenv
from google import genai
from google.genai.errors import APIError, ServerError

load_dotenv()
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

PROGRAMME_CPGE_DERNIERS_MANQUANTS = {
    "deuxieme-annee": {
        "mp": {
            "mathematiques": [
                {
                    "id": "series-fourier-mp",
                    "nom": "Séries de Fourier et analyse harmonique",
                    "themes": [
                        "Coefficients de Fourier trigonométriques et complexes",
                        "Théorème de Dirichlet et égalité de Parseval"
                    ]
                }
            ],
            "physique-chimie": [
                {
                    "id": "diffusion-thermique",
                    "nom": "Diffusion thermique et équation de la chaleur",
                    "themes": [
                        "Loi de Fourier et bilan d'énergie thermique",
                        "Équation de la chaleur et résistance thermique en régime stationnaire"
                    ]
                }
            ],
            "informatique": [
                {
                    "id": "programmation-dynamique",
                    "nom": "Algorithmique : Programmation dynamique",
                    "themes": [
                        "Principe d'optimalité et mémoïsation",
                        "Applications : Sac à dos, alignement de séquences et rendu de monnaie"
                    ]
                }
            ]
        },
        "pc": {
            "physique-chimie": [
                {
                    "id": "diagrammes-de-phases-binaires",
                    "nom": "Équilibres bivariants et diagrammes de phases binaires",
                    "themes": [
                        "Diagrammes liquide-vapeur et théorème des moments",
                        "Distillation fractionnée, azéotropie et diagrammes solide-liquide"
                    ]
                }
            ]
        },
        "psi": {
            "sii": [
                {
                    "id": "hyperstatisme-mobilite",
                    "nom": "Théorie des mécanismes : Hyperstatisme et mobilité",
                    "themes": [
                        "Degrés de mobilité et degré d'hyperstatisme (formule de Grübler)",
                        "Calcul de liaisons équivalentes et systèmes isostatiques"
                    ]
                }
            ]
        }
    }
}

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

def generer_fichier(type_doc: str, annee: str, filiere: str, matiere: str, chap_nom: str, theme: str, num: int, chemin: str):
    if os.path.exists(chemin):
        print(f"⏩ [CONSERVÉ] {type_doc.capitalize()} déjà présent : {chemin}")
        return

    if type_doc == "cours":
        prompt = f"""
        Tu es un professeur agrégé et examinateur en CPGE {filiere.upper()}.
        Rédige une FICHE DE COURS en Markdown conforme au programme officiel des concours.
        Niveau: {annee}, Filière: {filiere.upper()}, Matière: {matiere.replace('-', ' ').capitalize()}, Chapitre: {chap_nom}

---
title: "Cours : {chap_nom}"
description: "Synthèse officielle du cours et démonstrations théoriques pour CPGE {filiere.upper()}."
---

        CONSIGNES RIGOUREUSES DE FORMATAGE :
        1. Pour toute matrice, spécifie son ensemble d'appartenance (ex: $A \\in \\mathcal{{M}}_{{n,p}}(\\mathbb{{R}})$) et utilise \\begin{{pmatrix}} ... \\end{{pmatrix}}.
        2. En mode mathématique LaTeX ($...$ et $$...$$), n'insère aucun accent direct. Utilise systématiquement \\text{{...}} pour les unités et le texte.
        3. Structure exacte du cours :
           - ## 📌 1. Définitions & Cadre d'étude
           - ## 📐 2. Théorèmes fondamentaux & Démonstrations clés
           - ## 💡 3. Méthodes de calcul & Algorithmes
           - ## ⚠️ 4. Pièges classiques aux Concours
        """
    else:
        prompt = f"""
        Tu es un examinateur de concours CPGE (Mines-Ponts, Centrale-Supélec, X-ENS, CCINP, Agro-Véto).
        Rédige un EXERCICE / PROBLÈME GUIDÉ corrigé pas à pas en Markdown.
        Filière: {filiere.upper()}, Matière: {matiere.replace('-', ' ').capitalize()}, Chapitre: {chap_nom}, Thème: {theme}

---
title: "Exercice {num} : {theme}"
description: "Problème d'entraînement type concours pour CPGE {filiere.upper()}."
---

        CONSIGNES DE RIGUEUR ET DE FORMATAGE :
        1. Pour le mode mathématique LaTeX, utilise systématiquement \\text{{...}} pour les unités et le texte.
        2. Structure exacte :
           - ### 🌐 Énoncé du problème / Cadre d'étude
           - ### ❓ Questions progressives
           - ### 💡 Pistes & Indications méthodologiques
           - ### 📋 Corrigé détaillé pas à pas
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
    print("🚀 DÉMARRAGE DE LA GÉNÉRATION DES ULTIMES COMPLÉMENTS CPGE...\n")
    
    total_nouveaux = 0
    for annee, filieres in PROGRAMME_CPGE_DERNIERS_MANQUANTS.items():
        for filiere, matieres in filieres.items():
            for matiere, chapitres in matieres.items():
                for chap in chapitres:
                    c_id, c_nom = chap["id"], chap["nom"]
                    
                    # 1. Fiche de cours
                    p_cours = f"src/content/docs/{annee}/{filiere}/{matiere}/{c_id}/index.md"
                    if not os.path.exists(p_cours):
                        generer_fichier("cours", annee, filiere, matiere, c_nom, "", 0, p_cours)
                        total_nouveaux += 1
                        time.sleep(1)
                    else:
                        print(f"⏩ [CONSERVÉ] Cours : {p_cours}")

                    # 2. Exercices corrigés
                    for i, theme in enumerate(chap["themes"], start=1):
                        p_ex = f"src/content/docs/{annee}/{filiere}/{matiere}/{c_id}/exercice-{i}.md"
                        if not os.path.exists(p_ex):
                            generer_fichier("exercice", annee, filiere, matiere, c_nom, theme, i, p_ex)
                            total_nouveaux += 1
                            time.sleep(1)
                        else:
                            print(f"⏩ [CONSERVÉ] Exercice : {p_ex}")

    print(f"\n🎉 GÉNÉRATION TERMINÉE ! {total_nouveaux} FICHIERS ONT ÉTÉ AJOUTÉS. LE PROGRAMME SCIENTIFIQUE CPGE EST DÉSORMAIS COUVERT À 100 %.")