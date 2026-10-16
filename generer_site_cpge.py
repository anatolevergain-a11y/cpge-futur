import os
import time
from dotenv import load_dotenv
from google import genai
from google.genai.errors import APIError, ServerError

load_dotenv()
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# PROGRAMME OFFICIEL CPGE 100% COMPLET (TOUTES FILIÈRES & MATIÈRES)
PROGRAMME_CPGE_COMPLET = {
    "premiere-annee": {
        "mpsi": {
            "mathematiques": [
                {"id": "structures-algebriques", "nom": "Structures algébriques usuelles", "themes": ["Groupes, anneaux, corps", "Espaces vectoriels"]},
                {"id": "analyse-suites-series", "nom": "Suites numériques et réelles", "themes": ["Convergence et Bolzano-Weierstrass", "Équivalents"]},
                {"id": "polynomes-fractions", "nom": "Polynômes et Fractions rationnelles", "themes": ["Décomposition en éléments simples", "Racines multiples"]},
                {"id": "calcul-matriciel", "nom": "Matrices et systèmes linéaires", "themes": ["Pivot de Gauss", "Inversibilité et représentation matricielle"]},
                {"id": "espaces-vectoriels-dim-finie", "nom": "Espaces vectoriels de dimension finie", "themes": ["Bases et dimension", "Théorème du rang"]},
                {"id": "espaces-prehilbertiens", "nom": "Espaces préhilbertiens et euclidiens", "themes": ["Produit scalaire et Cauchy-Schwarz", "Gram-Schmidt et projecteurs orthogonaux"]},
                {"id": "integration-segment", "nom": "Intégration sur un segment", "themes": ["Sommes de Riemann", "Théorème fondamental"]},
                {"id": "probabilites-finies", "nom": "Probabilités sur un univers fini", "themes": ["Conditionnement et Bayes", "Variables aléatoires et espérance"]}
            ],
            "physique-chimie": [
                {"id": "optique-geometrique", "nom": "Optique géométrique", "themes": ["Lois de Snell-Descartes", "Lentilles minces et instruments"]},
                {"id": "electrocinetique", "nom": "Électrocinétique linéaire", "themes": ["Régimes transitoires RC/RLC", "Diagrammes de Bode et filtrage"]},
                {"id": "mecanique-du-point", "nom": "Mécanique du point matériel", "themes": ["Lois de Newton et moment cinétique", "Oscillateurs harmoniques et amortis"]},
                {"id": "thermodynamique", "nom": "Thermodynamique macroscopique", "themes": ["Principes de la thermodynamique", "Machines thermiques et changements d'état"]},
                {"id": "induction-electromagnetique", "nom": "Induction électromagnétique", "themes": ["Loi de Faraday", "Auto-induction et circuits RL"]}
            ],
            "sii": [
                {"id": "cinematique-systemes", "nom": "Cinématique des solides", "themes": ["Torseurs cinématiques", "Liaisons et hyperstatisme"]},
                {"id": "statique-solides", "nom": "Statique des solides", "themes": ["PFS et modélisation des actions", "Frottement de Coulomb"]}
            ],
            "informatique": [
                {"id": "algorithmique-python", "nom": "Algorithmique et Python", "themes": ["Complexité spatio-temporelle", "Algorithmes de tri et recherche"]}
            ]
        },
        "mp2i": {
            "mathematiques": [
                {"id": "logique-ensembles", "nom": "Logique, ensembles et applications", "themes": ["Quantificateurs et raisonnements", "Relations d'équivalence et d'ordre"]},
                {"id": "algebre-lineaire-mp2i", "nom": "Algèbre linéaire et calcul matriciel", "themes": ["Espaces vectoriels", "Matrices et systèmes"]},
                {"id": "analyse-mp2i", "nom": "Suites, dérivées et développements limités", "themes": ["Analyse asymptotique", "Formules de Taylor"]}
            ],
            "informatique": [
                {"id": "recursion-c-ocaml", "nom": "Récursivité et gestion mémoire", "themes": ["Pointeurs en C", "Filtrage et types en OCaml"]},
                {"id": "structures-arborescentes", "nom": "Arbres et Graphes", "themes": ["Arbres binaires de recherche", "Parcours BFS/DFS"]},
                {"id": "logique-hoare", "nom": "Logique propositionnelle et Hoare", "themes": ["Tables de vérité", "Invariants de boucle"]}
            ],
            "physique-chimie": [
                {"id": "physique-mp2i", "nom": "Électrocinétique et Mécanique", "themes": ["Filtrage analogique", "Mouvement dans un champ de force"]}
            ]
        },
        "pcsi": {
            "mathematiques": [
                {"id": "analyse-pcsi", "nom": "Analyse et équations différentielles", "themes": ["Développements limités", "Équations différentielles linéaires"]},
                {"id": "algebre-pcsi", "nom": "Algèbre linéaire et matrices", "themes": ["Espaces vectoriels", "Calcul de déterminants"]}
            ],
            "physique-chimie": [
                {"id": "optique-pcsi", "nom": "Optique et Électrocinétique", "themes": ["Lentilles minces", "Circuits en régime sinusoïdal"]},
                {"id": "architecture-matiere", "nom": "Architecture de la matière et Cristallographie", "themes": ["VSEPR et liaisons", "Empilements compacts et cubiques"]},
                {"id": "solutions-aqueuses", "nom": "Réactions en solution aqueuse", "themes": ["Acide-base et précipitation", "Diagrammes E-pH"]},
                {"id": "thermochimie", "nom": "Thermochimie et cinétique", "themes": ["Enthalpie de réaction", "Lois de vitesse et catalyse"]}
            ],
            "sii": [
                {"id": "sii-pcsi", "nom": "Analyse des systèmes mécaniques", "themes": ["Schémas cinématiques", "Torseurs des actions"]}
            ]
        },
        "ptsi": {
            "mathematiques": [
                {"id": "analyse-ptsi", "nom": "Analyse réelle et intégration", "themes": ["Suites et fonctions", "Calcul d'intégrales et ED"]},
                {"id": "algebre-geometrie-ptsi", "nom": "Algèbre linéaire et Géométrie 3D", "themes": ["Calcul matriciel", "Produit vectoriel et courbes"]}
            ],
            "physique-chimie": [
                {"id": "physique-ptsi", "nom": "Thermodynamique et Électrocinétique", "themes": ["Bilans thermiques", "Régimes transitoires"]},
                {"id": "chimie-ptsi", "nom": "Chimie des matériaux et solutions", "themes": ["Structure des solides", "Corrosion et pH"]}
            ],
            "sii": [
                {"id": "statique-cinematique-ptsi", "nom": "Statique et Cinématique du solide", "themes": ["PFS et frottement", "Engrenages et roulement sans glissement"]},
                {"id": "conception-fabrication-ptsi", "nom": "Conception et Procédés de fabrication", "themes": ["CAO et tolérancement GPS", "Usinage et moulage"]}
            ]
        },
        "bcpst": {
            "mathematiques": [
                {"id": "algebre-lineaire-bcpst1", "nom": "Algèbre linéaire et matrices", "themes": ["Systèmes linéaires", "Calcul matriciel"]},
                {"id": "analyse-proba-bcpst1", "nom": "Analyse et Probabilités discrètes", "themes": ["Équations différentielles", "Lois usuelles"]}
            ],
            "physique-chimie": [
                {"id": "optique-meca-bcpst1", "nom": "Optique géométrique et Mécanique des fluides", "themes": ["Instruments d'optique", "Bernoulli et statique des fluides"]},
                {"id": "chimie-bcpst1", "nom": "Thermodynamique et Chimie organique", "themes": ["Enthalpies de réaction", "Stéréochimie et réactivité"]}
            ],
            "svt": [
                {"id": "biologie-cellulaire-bcpst", "nom": "Biologie cellulaire et métabolisme", "themes": ["Membranes et enzymologie", "Respiration et photosynthèse"]},
                {"id": "geologie-bcpst1", "nom": "Géodynamique et Sédimentologie", "themes": ["Magmatisme et tectonique", "Cartographie et coupes géologiques"]}
            ],
            "informatique": [
                {"id": "python-bcpst1", "nom": "Python et algorithmique", "themes": ["Traitement de données", "Simulations aléatoires"]}
            ]
        }
    },
    "deuxieme-annee": {
        "mp": {
            "mathematiques": [
                {"id": "reduction-endomorphismes", "nom": "Réduction des endomorphismes", "themes": ["Valeurs propres et polynôme annulateur", "Diagonalisation et trigonalisation"]},
                {"id": "topologie-espaces-normes", "nom": "Topologie des espaces vectoriels normés", "themes": ["Compacité et connexité", "Normes équivalentes"]},
                {"id": "series-fonctions-entieres", "nom": "Séries numériques, de fonctions et entières", "themes": ["Rayon de convergence", "Séries de Fourier"]},
                {"id": "integration-impropre", "nom": "Intégration sur un intervalle quelconque", "themes": ["Convergence intégrale", "Intégrales dépendant d'un paramètre"]},
                {"id": "calcul-differentiel", "nom": "Calcul différentiel et équations différentielles", "themes": ["Extrema et jacobiennes", "Systèmes différentiels linéaires"]},
                {"id": "probabilites-denombrables", "nom": "Probabilités discrètes et variables continues", "themes": ["Chaînes de Markov", "Densités et théorème limite central"]}
            ],
            "physique-chimie": [
                {"id": "electromagnetisme-maxwell", "nom": "Équations de Maxwell et ondes EM", "themes": ["Poynting et bilans", "Propagation dans le vide et conducteurs"]},
                {"id": "optique-ondulatoire-mp", "nom": "Optique ondulatoire et interférences", "themes": ["Michelson et fentes d'Young", "Diffraction"]}
            ]
        },
        "mpi": {
            "mathematiques": [
                {"id": "maths-mpi", "nom": "Réduction, Topologie et Probabilités MPI", "themes": ["Diagonalisation", "Variables aléatoires et séries entières"]}
            ],
            "informatique": [
                {"id": "algorithmique-avancee-mpi", "nom": "Algorithmique avancée et graphes", "themes": ["Programmation dynamique", "Graphes bipartis et flot"]},
                {"id": "automates-langages", "nom": "Automates, langages et logique", "themes": ["Automates finis", "Logique de Hoare et vérification"]},
                {"id": "bases-donnees-mpi", "nom": "Bases de données relationnelles", "themes": ["SQL avancé", "Normalisation et transactions"]}
            ],
            "physique-chimie": [
                {"id": "physique-mpi", "nom": "Physique quantique et Électromagnétisme", "themes": ["Puits de potentiel", "Ondes et transmission du signal"]}
            ]
        },
        "pc": {
            "mathematiques": [
                {"id": "maths-pc", "nom": "Réduction, Séries et Algèbre bilinéaire", "themes": ["Espaces euclidiens", "Séries entières et équations diff"]}
            ],
            "physique-chimie": [
                {"id": "mecanique-fluides-pc", "nom": "Mécanique des fluides et Navier-Stokes", "themes": ["Écoulements visqueux", "Bilans de quantité de mouvement"]},
                {"id": "thermodynamique-statistique", "nom": "Thermodynamique statistique et quantique", "themes": ["Facteur de Boltzmann", "Puits de potentiel et spin"]},
                {"id": "optique-diffraction-pc", "nom": "Interférométrie et réseaux optiques", "themes": ["Diffraction de Fraunhofer", "Réseaux par réflexion"]},
                {"id": "chimie-organique-avancee", "nom": "Chimie organique synthétique", "themes": ["Organomagnésiens et Diels-Alder", "Stratégies de synthèse"]},
                {"id": "electrochimie-corrosion", "nom": "Électrochimie et corrosion", "themes": ["Courbes I-E", "Passivation et anodes sacrificielles"]}
            ]
        },
        "psi": {
            "mathematiques": [
                {"id": "maths-psi", "nom": "Séries de Fourier, ED et Réduction PSI", "themes": ["Systèmes différentiels", "Espaces euclidiens et Fourier"]}
            ],
            "physique-chimie": [
                {"id": "em-conversion-psi", "nom": "Électromagnétisme et Conversion de puissance", "themes": ["Hacheurs et onduleurs", "Ondes guidées et bilans"]},
                {"id": "mecanique-fluides-psi", "nom": "Mécanique des fluides et bilans thermiques", "themes": ["Théorème de Bernoulli", "Échangeurs thermiques"]}
            ],
            "sii": [
                {"id": "asservissements-continus-discrets", "nom": "Automatique et Systèmes échantillonnés", "themes": ["PID, Nyquist et Routh", "Transformée en Z"]},
                {"id": "dynamique-energetique-3d", "nom": "Dynamique 3D et Énergétique des solides", "themes": ["Matrice d'inertie et PFD 3D", "Théorème de l'énergie cinétique"]}
            ]
        },
        "pt": {
            "mathematiques": [
                {"id": "maths-pt", "nom": "Analyse, Géométrie 3D et Probabilités PT", "themes": ["Courbes paramétrées", "Intégrales doubles et ED"]}
            ],
            "physique-chimie": [
                {"id": "physique-chimie-pt", "nom": "Thermodynamique industrielle et Ondes", "themes": ["Transferts thermiques", "Acoustique"]}
            ],
            "sii": [
                {"id": "rdm-conception-pt", "nom": "Résistance des matériaux et Conception", "themes": ["Flexion, torsion et flambement", "Dimensionnement d'engrenages"]},
                {"id": "industrialisation-gps-pt", "nom": "Procédés d'industrialisation et Spécification GPS", "themes": ["Cotation fonctionnelle", "Usinage à commande numérique"]}
            ]
        },
        "bcpst": {
            "mathematiques": [
                {"id": "reduction-probabilites-bcpst2", "nom": "Réduction de matrices et Probabilités continues", "themes": ["Chaînes de Markov", "Loi normale et TCL"]}
            ],
            "physique-chimie": [
                {"id": "thermo-ondes-bcpst2", "nom": "Thermodynamique chimique et Ondes", "themes": ["Potentiel chimique et affinité", "Interférences et effet Doppler"]}
            ],
            "svt": [
                {"id": "physiologie-ecologie-bcpst2", "nom": "Physiologie, Écologie globale et Évolution", "themes": ["Endocrinologie et pression artérielle", "Cycles biogéochimiques et Hardy-Weinberg"]}
            ],
            "informatique": [
                {"id": "sql-bcpst2", "nom": "Bases de données SQL", "themes": ["Modèle relationnel", "Jointures et requêtes complexes"]}
            ]
        }
    }
}

def executer_prompt_gemini(prompt: str) -> str:
    modeles = ['gemini-3.8-flash', 'gemini-3.5-flash-lite']
    for m in modeles:
        delai = 2
        for _ in range(3):
            try:
                res = client.models.generate_content(model=m, contents=prompt)
                return res.text
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
        print(f"⏩ [CONSERVÉ] {chemin}")
        return

    if type_doc == "cours":
        prompt = f"""
        Tu es un professeur agrégé en CPGE ({filiere.upper()}).
        Rédige une FICHE DE COURS rigoureuse en Markdown.
        Niveau: {annee}, Filière: {filiere.upper()}, Matière: {matiere}, Chapitre: {chap_nom}
        En-tête YAML obligatoire :
---
title: "Cours : {chap_nom}"
description: "Synthèse officielle du cours et démonstrations clés."
---
        LaTeX strict ($inline$ et $$bloc$$). Utilise \\text{{...}} pour les unités et le texte dans les formules.
        """
    else:
        prompt = f"""
        Tu es un examinateur de concours CPGE ({filiere.upper()}).
        Rédige un PROBLÈME GUIDÉ corrigé pas à pas en Markdown.
        Filière: {filiere.upper()}, Matière: {matiere}, Chapitre: {chap_nom}, Thème: {theme}
        En-tête YAML obligatoire :
---
title: "Exercice {num} : {theme}"
description: "Problème d'entraînement type concours."
---
        LaTeX strict avec \\text{{...}} pour les unités. Inclut une analyse critique des résultats.
        """

    print(f"⏳ Génération [{filiere.upper()}] {type_doc.upper()} : {chap_nom}...")
    contenu = executer_prompt_gemini(prompt)
    if contenu:
        os.makedirs(os.path.dirname(chemin), exist_ok=True)
        with open(chemin, "w", encoding="utf-8") as f:
            f.write(nettoyer_yaml(contenu))
        print(f"   ✅ Enregistré : {chemin}")

if __name__ == "__main__":
    print("🚀 DÉMARRAGE DE LA GÉNÉRATION DE HARMONISATION CPGE...\n")
    for annee, filieres in PROGRAMME_CPGE_COMPLET.items():
        for filiere, matieres in filieres.items():
            for matiere, chapitres in matieres.items():
                for chap in chapitres:
                    c_id, c_nom = chap["id"], chap["nom"]
                    p_cours = f"src/content/docs/{annee}/{filiere}/{matiere}/{c_id}/index.md"
                    generer_fichier("cours", annee, filiere, matiere, c_nom, "", 0, p_cours)
                    
                    for i, theme in enumerate(chap["themes"], start=1):
                        p_ex = f"src/content/docs/{annee}/{filiere}/{matiere}/{c_id}/exercice-{i}.md"
                        generer_fichier("exercice", annee, filiere, matiere, c_nom, theme, i, p_ex)
                        time.sleep(1)