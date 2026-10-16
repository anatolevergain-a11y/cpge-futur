import os
import time
from dotenv import load_dotenv
from google import genai
from google.genai.errors import APIError, ServerError

load_dotenv()
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# PROGRAMME OFFICIEL CPGE - COMPLÉMENTS ET SPÉCIFICITÉS MANQUANTES
PROGRAMME_CPGE_MANQUANTS = {
    "premiere-annee": {
        "mpsi": {
            "mathematiques": [
                {"id": "fonctions-plusieurs-variables", "nom": "Calcul différentiel à plusieurs variables", "themes": ["Dérivées partielles et gradient", "Extrema locaux sur un ouvert de R^n"]}
            ],
            "physique-chimie": [
                {"id": "solutions-aqueuses-mpsi", "nom": "Équilibres en solution aqueuse", "themes": ["Diagrammes E-pH et prédominance", "Titrage acido-basique et redox"]}
            ],
            "sii": [
                {"id": "asservissements-mpsi", "nom": "Systèmes linéaires asservis", "themes": ["Fonction de transfert et schémas-blocs", "Réponse temporelle et fréquentielle"]}
            ]
        },
        "mp2i": {
            "mathematiques": [
                {"id": "arithmetique-mp2i", "nom": "Arithmétique dans Z", "themes": ["Bézout, Gauss et congruences", "Petit théorème de Fermat et applications cryptographiques"]},
                {"id": "probabilites-mp2i", "nom": "Probabilités sur un univers fini", "themes": ["Conditionnement et indépendance", "Variables aléatoires et espérance"]}
            ],
            "physique-chimie": [
                {"id": "thermodynamique-mp2i", "nom": "Thermodynamique physique", "themes": ["Premier et second principes", "Machines thermiques dithermes"]},
                {"id": "optique-mp2i", "nom": "Optique géométrique", "themes": ["Lois de Snell-Descartes", "Lentilles minces et instruments"]}
            ]
        },
        "pcsi": {
            "mathematiques": [
                {"id": "probabilites-pcsi", "nom": "Probabilités discrètes et dénombrement", "themes": ["Combinaisons et arrangements", "Variables aléatoires discrètes"]}
            ],
            "physique-chimie": [
                {"id": "mecanique-du-point-pcsi", "nom": "Mécanique du point matériel", "themes": ["Lois de Newton et moment cinétique", "Oscillateurs harmoniques et amortis"]},
                {"id": "electrocinetique-pcsi", "nom": "Électrocinétique linéaire", "themes": ["Régimes transitoires RC/RLC", "Filtrage et diagrammes de Bode"]}
            ],
            "sii": [
                {"id": "cinematique-pcsi", "nom": "Cinématique du solide", "themes": ["Torseurs cinématiques", "Liaisons mécaniques et hyperstatisme"]}
            ]
        },
        "ptsi": {
            "mathematiques": [
                {"id": "probabilites-ptsi", "nom": "Dénombrement et probabilités", "themes": ["Événements et probabilités conditionnelles", "Variables aléatoires discrètes"]},
                {"id": "polynomes-matrices-ptsi", "nom": "Polynômes, matrices et systèmes", "themes": ["Pivot de Gauss et inversibilité", "Racines de polynômes"]}
            ],
            "physique-chimie": [
                {"id": "optique-ptsi", "nom": "Optique géométrique", "themes": ["Réfraction et miroirs", "Lentilles minces et stigmatisme"]},
                {"id": "electrocinetique-ptsi", "nom": "Électrocinétique et régimes transitoires", "themes": ["Loi d'Ohm et lois de Kirchhoff", "Circuits RC et RL"]},
                {"id": "mecanique-ptsi", "nom": "Mécanique du point et bilans", "themes": ["Théorème de l'énergie cinétique", "Oscillateurs mécaniques"]}
            ]
        },
        "bcpst": {
            "mathematiques": [
                {"id": "geometrie-espace-bcpst", "nom": "Géométrie vectorielle et repérée", "themes": ["Produit scalaire et vectoriel", "Plans et droites dans l'espace"]}
            ],
            "physique-chimie": [
                {"id": "optique-geometrique-bcpst", "nom": "Optique géométrique", "themes": ["Lentilles minces et loupe", "Microscope et association de lentilles"]},
                {"id": "electrocinetique-bcpst", "nom": "Circuits électriques en régime continu/transitoire", "themes": ["Lois des mailles et des nœuds", "Charge et décharge d'un condensateur"]}
            ]
        }
    },
    "deuxieme-annee": {
        "mp": {
            "physique-chimie": [
                {"id": "thermodynamique-statistique-mp", "nom": "Introduction à la physique statistique", "themes": ["Distribution de Maxwell-Boltzmann", "Capacité thermique des solides"]},
                {"id": "mecanique-fluides-mp", "nom": "Mécanique des fluides", "themes": ["Équation de Navier-Stokes", "Écoulements incompressibles et Bernoulli"]}
            ]
        },
        "mpi": {
            "mathematiques": [
                {"id": "reduction-mpi", "nom": "Réduction des endomorphismes", "themes": ["Valeurs propres, vecteurs propres", "Diagonalisation et polynôme annulateur"]},
                {"id": "topologie-mpi", "nom": "Topologie des espaces vectoriels normés", "themes": ["Normes équivalentes", "Ouverts, fermés et compacité"]},
                {"id": "series-entieres-mpi", "nom": "Séries entières et séries de Fourier", "themes": ["Rayon de convergence", "Développement en série entière"]},
                {"id": "probabilites-mpi", "nom": "Probabilités discrètes et continues", "themes": ["Variables aléatoires à densité", "Théorème limite central"]}
            ],
            "physique-chimie": [
                {"id": "electromagnetisme-mpi", "nom": "Équations de Maxwell et propagation", "themes": ["Vecteur de Poynting", "Ondes électromagnétiques dans le vide"]},
                {"id": "thermodynamique-mpi", "nom": "Thermodynamique et transferts", "themes": ["Bilans d'entropie", "Transferts thermiques par conduction"]}
            ]
        },
        "pc": {
            "mathematiques": [
                {"id": "reduction-pc", "nom": "Réduction des endomorphismes", "themes": ["Diagonalisation et trigonalisation", "Applications aux équations différentielles"]},
                {"id": "topologie-calcul-diff-pc", "nom": "Topologie et calcul différentiel", "themes": ["Espaces vectoriels normés", "Gradient et différentielle"]},
                {"id": "probabilites-pc", "nom": "Probabilités et variables aléatoires", "themes": ["Variables aléatoires discrètes et à densité", "Lois usuelles (Binomiale, Poisson, Normale)"]}
            ],
            "physique-chimie": [
                {"id": "thermodynamique-industrielle-pc", "nom": "Thermodynamique industrielle et machines", "themes": ["Changements d'état des corps purs", "Diagrammes (P,v) et (T,s) des machines thermiques"]}
            ]
        },
        "psi": {
            "mathematiques": [
                {"id": "reduction-psi", "nom": "Réduction des endomorphismes", "themes": ["Diagonalisation et polynômes annulateurs", "Sous-espaces propres"]},
                {"id": "topologie-psi", "nom": "Topologie des espaces normés", "themes": ["Compacité et connexité", "Normes et suites de vecteurs"]},
                {"id": "probabilites-psi", "nom": "Probabilités discrètes", "themes": ["Variables aléatoires discrètes", "Espérance et variance"]}
            ],
            "physique-chimie": [
                {"id": "thermodynamique-industrielle-psi", "nom": "Thermodynamique et échangeurs thermiques", "themes": ["Bilans en système ouvert", "Échangeurs thermiques et rendement"]},
                {"id": "optique-ondulatoire-psi", "nom": "Optique ondulatoire et interférences", "themes": ["Interféromètre de Michelson", "Diffraction par une fente"]}
            ]
        },
        "pt": {
            "mathematiques": [
                {"id": "reduction-pt", "nom": "Réduction des matrices et endomorphismes", "themes": ["Valeurs propres et diagonalisation", "Applications aux systèmes différentiels"]},
                {"id": "series-ed-pt", "nom": "Séries numériques et équations différentielles", "themes": ["Séries entières et Fourier", "Équations différentielles linéaires d'ordre 2"]},
                {"id": "probabilites-pt", "nom": "Probabilités discrètes et lois usuelles", "themes": ["Variables aléatoires discrètes", "Loi binomiale et Poisson"]}
            ],
            "physique-chimie": [
                {"id": "thermodynamique-moteurs-pt", "nom": "Thermodynamique et moteurs thermiques", "themes": ["Cycles de Beau de Rochas et Diesel", "Bilan d'énergie et rendement"]},
                {"id": "optique-pt", "nom": "Optique et interférences", "themes": ["Dispositifs de trous d'Young", "Réseaux de diffraction"]},
                {"id": "electrochimie-pt", "nom": "Électrochimie et corrosion", "themes": ["Piles et électrolyse", "Protection contre la corrosion"]}
            ]
        },
        "bcpst": {
            "mathematiques": [
                {"id": "statistiques-inferentielles-bcpst", "nom": "Statistiques inférentielles et tests", "themes": ["Estimation ponctuelle et par intervalle de confiance", "Tests d'hypothèses (Test du Khi-deux et test de Student)"]}
            ],
            "physique-chimie": [
                {"id": "electromagnetisme-bcpst", "nom": "Champs électromagnétiques et induction", "themes": ["Champ magnétique et force de Laplace", "Loi de Faraday et induction"]},
                {"id": "optique-ondulatoire-bcpst", "nom": "Ondes lumineuses et interférences", "themes": ["Modèle ondulatoire de la lumière", "Interférences à deux ondes"]}
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
        Tu es un professeur agrégé et examinateur de CPGE {filiere.upper()}.
        Rédige une FICHE DE COURS d'une rigueur scientifique exemplaire en Markdown.
        Niveau: {annee}, Filière: {filiere.upper()}, Matière: {matiere.replace('-', ' ').capitalize()}, Chapitre: {chap_nom}

        COMMENCE OBLIGATOIREMENT PAR CE BLOC YAML EXACT (sans astérisques) :
---
title: "Cours : {chap_nom}"
description: "Fiche de synthèse officielle et démonstrations du programme CPGE {filiere.upper()}."
---

        CONSIGNES DE RIGUEUR TECHNIQUE ET DE FORMATAGE :
        1. Pour toute matrice, spécifie explicitement son ensemble d'appartenance (ex: $A \\in \\mathcal{{M}}_{{n,p}}(\\mathbb{{R}})$) et utilise la syntaxe \\begin{{pmatrix}} ... \\end{{pmatrix}}.
        2. En mode mathématique LaTeX ($...$ et $$...$$), n'insère aucun accent direct. Utilise systématiquement \\text{{...}} pour les unités et annotations.
        3. Structure :
           - ## 📌 1. Définitions & Cadre d'étude
           - ## 📐 2. Théorèmes fondamentaux & Démonstrations clés
           - ## 💡 3. Méthodes de calcul & Algorithmes
           - ## ⚠️ 4. Pièges classiques aux Concours
        """
    else:
        prompt = f"""
        Tu es un concepteur de sujets de concours CPGE (Mines-Ponts, Centrale-Supélec, X-ENS, CCINP, Agro-Véto).
        Rédige un PROBLÈME GUIDÉ corrigé pas à pas avec démonstrations exactes en Markdown.
        Filière: {filiere.upper()}, Matière: {matiere.replace('-', ' ').capitalize()}, Chapitre: {chap_nom}, Thème: {theme}

        COMMENCE OBLIGATOIREMENT PAR CE BLOC YAML EXACT (sans astérisques) :
---
title: "Exercice {num} : {theme}"
description: "Problème d'entraînement type concours pour {filiere.upper()}."
---

        CONSIGNES DE RIGUEUR TECHNIQUE ET DE FORMATAGE :
        1. Vérifie la cohérence dimensionnelle et la rigueur de tous les calculs.
        2. Pour le mode mathématique LaTeX, utilise systématiquement \\text{{...}} pour les unités et le texte.
        3. Structure :
           - ### 🌐 Énoncé du problème / Cadre d'étude
           - ### ❓ Questions progressives (incluant une analyse critique du modèle)
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
    print("🚀 DÉMARRAGE DE LA GÉNÉRATION DES CHAPITRES MANQUANTS CPGE...\n")
    
    total_nouveaux = 0
    for annee, filieres in PROGRAMME_CPGE_MANQUANTS.items():
        for filiere, matieres in filieres.items():
            for matiere, chapitres in matieres.items():
                for chap in chapitres:
                    c_id, c_nom = chap["id"], chap["nom"]
                    
                    # 1. Cours
                    p_cours = f"src/content/docs/{annee}/{filiere}/{matiere}/{c_id}/index.md"
                    if not os.path.exists(p_cours):
                        generer_fichier("cours", annee, filiere, matiere, c_nom, "", 0, p_cours)
                        total_nouveaux += 1
                        time.sleep(1)
                    else:
                        print(f"⏩ [CONSERVÉ] Cours : {p_cours}")

                    # 2. Exercices
                    for i, theme in enumerate(chap["themes"], start=1):
                        p_ex = f"src/content/docs/{annee}/{filiere}/{matiere}/{c_id}/exercice-{i}.md"
                        if not os.path.exists(p_ex):
                            generer_fichier("exercice", annee, filiere, matiere, c_nom, theme, i, p_ex)
                            total_nouveaux += 1
                            time.sleep(1)
                        else:
                            print(f"⏩ [CONSERVÉ] Exercice : {p_ex}")

    print(f"\n🎉 GÉNÉRATION TERMINÉE ! {total_nouveaux} NOUVEAUX FICHIERS ONT ÉTÉ AJOUTÉS SANS TOUCHER AUX ANCIENS.")