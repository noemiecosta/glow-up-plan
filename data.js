const MONTHS = [
  {
    id: 1,
    month: "Juin 2026",
    theme: "Les fondations",
    emoji: "🌱",
    cats: ["physique","mental","lifestyle"],
    accent: "#c9a96e",
    goals: [
      {
        cat: "physique",
        label: "Lancer la routine beauté",
        items: [
          "Acheter les produits skincare de base (nettoyant, sérum, SPF)",
          "Commencer la skincare matin + soir sans exception",
          "1er RDV coiffeur : bilan boucles + soins",
          "Masque capillaire chaque dimanche",
          "Commencer gua sha 5 min/soir"
        ]
      },
      {
        cat: "sport",
        label: "Première semaine de sport",
        items: [
          "S'inscrire en salle de sport",
          "3 séances salle (haut, bas, full body)",
          "1 sortie running 20–30 min (peu importe le rythme)",
          "Bilan de mobilité : tester sa souplesse actuelle"
        ]
      },
      {
        cat: "mental",
        label: "Poser les bases mentales",
        items: [
          "Commencer un journal quotidien (5 min/soir)",
          "Identifier ses 3 peurs principales par écrit",
          "Installer une appli de méditation (Petit Bambou, Calm)",
          "Paramétrer Screen Time : objectif < 3h/jour"
        ]
      },
      {
        cat: "lifestyle",
        label: "Reprendre le contrôle du quotidien",
        items: [
          "Définir une heure de coucher fixe (ex : 23h)",
          "Créer sa routine matinale (même 15 min)",
          "Faire le bilan de son budget actuel",
          "Supprimer les apps addictives du téléphone de la page d'accueil"
        ]
      }
    ],
    weekly: [
      { label: "Lundi", tasks: ["Salle de sport (bas du corps)", "Skincare matin + soir", "Journal 5 min"] },
      { label: "Mardi", tasks: ["Running 20 min", "Gua sha", "Méditation 5 min"] },
      { label: "Mercredi", tasks: ["Salle (haut du corps / dos)", "Skincare", "Lire 15 min"] },
      { label: "Jeudi", tasks: ["Pilates ou stretching 30 min", "Skincare", "Journal"] },
      { label: "Vendredi", tasks: ["Salle (bras + abdos)", "Skincare", "Méditation"] },
      { label: "Samedi", tasks: ["Running 30 min", "Masque cheveux", "Autobronzant"] },
      { label: "Dimanche", tasks: ["Repos actif / balade", "Préparer sa semaine", "Vérifier ses objectifs"] }
    ]
  },
  {
    id: 2,
    month: "Juillet 2026",
    theme: "Discipline & corps",
    emoji: "🔥",
    cats: ["physique","sport","alimentation"],
    accent: "#e07a5f",
    goals: [
      {
        cat: "physique",
        label: "Intensifier le soin du corps",
        items: [
          "Routine capillaire complète installée (lavage 2×/sem, masque, coiffure protectrice nuit)",
          "RDV sourcils : structuration professionnelle",
          "Commencer autobronzant 1×/sem",
          "Crème corps hydratante 3×/sem",
          "Bain d'huile pour les ongles 1×/sem"
        ]
      },
      {
        cat: "sport",
        label: "Construire son endurance",
        items: [
          "Running : sortir 3×/sem, dépasser 30 min sans s'arrêter",
          "Salle 3×/sem (programme cohérent haut/bas/full)",
          "Pilates 2×/sem pour la posture",
          "Objectif : courir 5 km sans s'arrêter"
        ]
      },
      {
        cat: "alimentation",
        label: "Comprendre le SOPK et manger mieux",
        items: [
          "Lire sur l'alimentation anti-inflammatoire et le SOPK",
          "Préparer 3 recettes saines par semaine",
          "Réduire le sucre raffiné en semaine",
          "Identifier ses suppléments clés (magnésium, inositol…)",
          "Apporter son repas du midi 3×/sem minimum"
        ]
      }
    ],
    weekly: [
      { label: "Lundi", tasks: ["Salle bas du corps", "Meal prep partiel", "Skincare"] },
      { label: "Mardi", tasks: ["Running 35 min", "Pilates 30 min", "Journal"] },
      { label: "Mercredi", tasks: ["Salle haut du corps / dos", "Skincare", "Méditation"] },
      { label: "Jeudi", tasks: ["Running récup 30 min", "Stretching 20 min", "Lire"] },
      { label: "Vendredi", tasks: ["Salle full body", "Skincare + gua sha", "Journal"] },
      { label: "Samedi", tasks: ["Running long (40 min+)", "Masque cheveux + soin ongles", "Autobronzant"] },
      { label: "Dimanche", tasks: ["Repos", "Meal prep semaine", "Revue hebdo"] }
    ]
  },
  {
    id: 3,
    month: "Août 2026",
    theme: "Voyage & ancrage",
    emoji: "🏍️",
    cats: ["physique","mental","lifestyle"],
    accent: "#81b29a",
    goals: [
      {
        cat: "physique",
        label: "Voyage en Sardaigne — maintien",
        items: [
          "Maintenir la skincare matin + soir pendant le voyage",
          "Garder au moins 3 séances sport/semaine (course, natation, randonnée)",
          "Profiter du soleil naturellement + reprotection SPF",
          "Pédicure avant le départ"
        ]
      },
      {
        cat: "mental",
        label: "Lâcher prise & présence",
        items: [
          "Pratiquer la pleine conscience pendant le voyage (manger sans téléphone, observer)",
          "S'autoriser à profiter sans culpabilité",
          "Écrire dans le journal même en vacances",
          "Bilan mi-parcours : qu'est-ce qui a changé depuis juin ?"
        ]
      },
      {
        cat: "lifestyle",
        label: "Désintox numérique",
        items: [
          "Passer sous les 2h30 de téléphone/jour",
          "Pas de téléphone pendant les repas",
          "Reprendre la lecture : finir 1 livre",
          "Dormir 8h minimum chaque nuit du voyage"
        ]
      }
    ],
    weekly: [
      { label: "Lundi", tasks: ["Entraînement cardio (run ou nage)", "Skincare", "Journal"] },
      { label: "Mardi", tasks: ["Randonnée ou vélo", "Lecture 20 min", "Méditation"] },
      { label: "Mercredi", tasks: ["Séance muscu ou pilates", "Skincare + soin", "Sans téléphone le soir"] },
      { label: "Jeudi", tasks: ["Sport cardio 30 min", "Journal + bilan émotionnel", "Lire"] },
      { label: "Vendredi", tasks: ["Séance renfo", "Skincare", "Écrire 3 choses positives"] },
      { label: "Samedi", tasks: ["Activité plein air", "Masque cheveux", "Autobronzant"] },
      { label: "Dimanche", tasks: ["Repos et récupération", "Préparer la semaine suivante", "Revue hebdo"] }
    ]
  },
  {
    id: 4,
    month: "Septembre 2026",
    theme: "Rentrée & accélération",
    emoji: "⚡",
    cats: ["sport","perso","lifestyle"],
    accent: "#c9a96e",
    goals: [
      {
        cat: "sport",
        label: "Lancer le plan 10 km (objectif : oct.)",
        items: [
          "Running 4×/sem avec plan structuré (endurance, fractionné, récup)",
          "Salle 3×/sem : focus bas du corps + renfo global",
          "Courir 7 km sans s'arrêter",
          "Commencer les exercices de souplesse quotidiens (10 min)"
        ]
      },
      {
        cat: "perso",
        label: "Développement personnel : lancer l'anglais",
        items: [
          "Installer Duolingo ou Busuu, 15 min/jour",
          "Regarder 1 série en anglais sous-titres anglais",
          "Commencer un cours en ligne (code ou autre)",
          "Lire 1 livre par mois minimum"
        ]
      },
      {
        cat: "lifestyle",
        label: "Organisation & budget",
        items: [
          "Créer un tableau de budget mensuel",
          "Mettre de côté un montant fixe chaque mois",
          "Planifier ses semaines chaque dimanche soir",
          "Temps d'écran : tenir sous 2h30/jour"
        ]
      }
    ],
    weekly: [
      { label: "Lundi", tasks: ["Running 40 min (endurance)", "Salle bas du corps", "Anglais 15 min"] },
      { label: "Mardi", tasks: ["Pilates ou yoga 40 min", "Skincare", "Lire 20 min"] },
      { label: "Mercredi", tasks: ["Running fractionné 30 min", "Salle haut", "Cours en ligne 30 min"] },
      { label: "Jeudi", tasks: ["Récupération + stretching", "Journal", "Anglais 15 min"] },
      { label: "Vendredi", tasks: ["Salle full body", "Skincare + gua sha", "Méditation"] },
      { label: "Samedi", tasks: ["Running long 50 min", "Soins corps (masque, ongles)", "Tâche perso créative"] },
      { label: "Dimanche", tasks: ["Repos actif", "Revue budget + semaine", "Meal prep"] }
    ]
  },
  {
    id: 5,
    month: "Octobre 2026",
    theme: "10 km — first race",
    emoji: "🏅",
    cats: ["sport","mental","physique"],
    accent: "#e07a5f",
    goals: [
      {
        cat: "sport",
        label: "Courir le 10 km < 1h",
        items: [
          "Semaines 1–2 : affinage (sorties 5–6 km à allure race)",
          "Semaine 3 : réduction du volume (tapering)",
          "Jour J : courir le 10 km — objectif < 1h",
          "Post-race : bilan, récupération, célébration !"
        ]
      },
      {
        cat: "mental",
        label: "Confiance en soi : franchir un cap",
        items: [
          "Identifier 3 situations où tu manques de confiance",
          "Faire 1 chose qui te fait peur par semaine (prise de parole, nouveau lieu…)",
          "Journaling focalisé sur les victoires quotidiennes",
          "Lecture : 1 livre développement personnel"
        ]
      },
      {
        cat: "physique",
        label: "Soins avancés",
        items: [
          "Rehaussement de cils (si cils assez poussés)",
          "Massage anti-cellulite 1×/sem",
          "Pédicure faite",
          "Manucure régulière installée"
        ]
      }
    ],
    weekly: [
      { label: "Lundi", tasks: ["Running allure race 5 km", "Salle légère", "Journal victoires"] },
      { label: "Mardi", tasks: ["Pilates 40 min", "Skincare + soin", "Anglais 15 min"] },
      { label: "Mercredi", tasks: ["Running tempo 6 km", "Méditation 10 min", "Lire"] },
      { label: "Jeudi", tasks: ["Repos ou stretching doux", "Journaling", "1 chose qui fait peur"] },
      { label: "Vendredi", tasks: ["Salle bas du corps", "Skincare", "Cours en ligne"] },
      { label: "Samedi", tasks: ["Sortie easy 30 min OU repos pré-race", "Soins corps", "Préparer sa tenue"] },
      { label: "Dimanche", tasks: ["Race ou long run", "Récupération", "Célébrer"] }
    ]
  },
  {
    id: 6,
    month: "Novembre 2026",
    theme: "Profondeur & style",
    emoji: "🍂",
    cats: ["mental","physique","perso"],
    accent: "#81b29a",
    goals: [
      {
        cat: "mental",
        label: "Travailler la dépendance affective",
        items: [
          "Lire un livre sur la dépendance affective (ex. 'Ces gens qui ont peur d'aimer')",
          "Identifier ses déclencheurs (quand vérifie-t-on son téléphone ?)",
          "Pratiquer 1 activité solo par semaine avec plaisir",
          "Communiquer un besoin à Max de manière sereine cette semaine"
        ]
      },
      {
        cat: "physique",
        label: "Cheveux : objectif longueur & santé",
        items: [
          "Bilan 5 mois de routine capillaire",
          "Essayer une nouvelle coiffure protectrice (tresses, twist…)",
          "Continuer stimulation du cuir chevelu 3×/sem",
          "RDV coiffeur : rééquilibrage des pointes"
        ]
      },
      {
        cat: "perso",
        label: "Trouver son style",
        items: [
          "Créer un moodboard visuel de son style idéal (Pinterest)",
          "Trier son dressing : garder / donner / recycler",
          "Identifier 5 pièces clés à acquérir",
          "Commencer à s'habiller avec intention chaque jour"
        ]
      }
    ],
    weekly: [
      { label: "Lundi", tasks: ["Salle (bas + fessiers)", "Running 35 min", "Anglais"] },
      { label: "Mardi", tasks: ["Pilates 40 min", "Skincare + gua sha", "Journal émotionnel"] },
      { label: "Mercredi", tasks: ["Salle haut / dos", "Méditation", "Cours en ligne"] },
      { label: "Jeudi", tasks: ["Running 40 min", "Stretching 15 min", "Lire"] },
      { label: "Vendredi", tasks: ["Salle full body", "Soins ongles", "Activité solo plaisir"] },
      { label: "Samedi", tasks: ["Long run ou sortie cardio", "Masque + soins corps", "Style : tenue intentionnelle"] },
      { label: "Dimanche", tasks: ["Repos", "Revue semaine + semaine suivante", "Moodboard / vision"] }
    ]
  },
  {
    id: 7,
    month: "Décembre 2026",
    theme: "Ancrage & équilibre",
    emoji: "✨",
    cats: ["alimentation","mental","lifestyle"],
    accent: "#c9a96e",
    goals: [
      {
        cat: "alimentation",
        label: "Alimentation de fêtes sans culpabilité",
        items: [
          "Maintenir ses habitudes saines 80% du temps",
          "Savourer les fêtes sans se juger",
          "Continuer ses suppléments SOPK",
          "Cuisiner 2 recettes saines à partager en famille"
        ]
      },
      {
        cat: "mental",
        label: "Bilan semestre & gratitude",
        items: [
          "Écrire un bilan complet des 6 premiers mois",
          "Lister 10 victoires concrètes depuis juin",
          "Pratiquer la gratitude quotidienne (3 éléments/soir)",
          "Se fixer des intentions pour le 2ème semestre"
        ]
      },
      {
        cat: "lifestyle",
        label: "Résister aux excès de fin d'année",
        items: [
          "Maintenir coucher avant minuit les soirs de semaine",
          "Temps d'écran : ne pas dépasser 3h pendant les vacances",
          "Maintenir au moins 3 entraînements/sem pendant les fêtes",
          "Continuer le journal sans interruption"
        ]
      }
    ],
    weekly: [
      { label: "Lundi", tasks: ["Running + salle", "Skincare", "Gratitude 3 éléments"] },
      { label: "Mardi", tasks: ["Pilates 40 min", "Gua sha", "Journal"] },
      { label: "Mercredi", tasks: ["Salle ou run", "Méditation", "Anglais"] },
      { label: "Jeudi", tasks: ["Stretching + mobilité", "Soin corps", "Lire"] },
      { label: "Vendredi", tasks: ["Entraînement au choix", "Skincare", "Activité créative"] },
      { label: "Samedi", tasks: ["Sortie longue", "Soins cheveux", "Temps de qualité aidés"] },
      { label: "Dimanche", tasks: ["Repos", "Bilan semaine", "Préparer la semaine suivante"] }
    ]
  },
  {
    id: 8,
    month: "Janvier 2027",
    theme: "Intensification sport",
    emoji: "🚀",
    cats: ["sport","perso","physique"],
    accent: "#e07a5f",
    goals: [
      {
        cat: "sport",
        label: "Lancer le plan semi-marathon (16 semaines)",
        items: [
          "Démarrer un plan structuré semi-marathon (volume progressif)",
          "Running 4×/sem : endurance, fractionné, allure, longue sortie",
          "Salle 2×/sem en complément",
          "Courir 12 km sans s'arrêter",
          "Intégrer des exercices de gainage et mobilité"
        ]
      },
      {
        cat: "perso",
        label: "Monter en compétences",
        items: [
          "Anglais : atteindre B1 à l'écrit (test en ligne)",
          "Terminer un premier projet de code (même simple)",
          "S'inscrire à un cours en ligne (Udemy, Coursera…)",
          "Lire 1 livre par mois"
        ]
      },
      {
        cat: "physique",
        label: "Corps : cap sur le renforcement",
        items: [
          "Posture : exercice bosse de bison quotidien",
          "Pilates 3×/sem focus gainage + posture",
          "Consultation chirurgien (si c'est une priorité)",
          "Massage raffermissant poitrine 3×/sem"
        ]
      }
    ],
    weekly: [
      { label: "Lundi", tasks: ["Running endurance 50 min", "Salle bas", "Exercice posture"] },
      { label: "Mardi", tasks: ["Pilates 45 min", "Skincare + soin", "Anglais 20 min"] },
      { label: "Mercredi", tasks: ["Fractionné running 30 min", "Salle haut", "Cours en ligne"] },
      { label: "Jeudi", tasks: ["Récupération + mobilité", "Journal", "Lire"] },
      { label: "Vendredi", tasks: ["Running allure semi 40 min", "Skincare", "Méditation"] },
      { label: "Samedi", tasks: ["Longue sortie 14–16 km", "Soins corps complets", "Activité perso"] },
      { label: "Dimanche", tasks: ["Repos complet", "Meal prep", "Revue hebdo"] }
    ]
  },
  {
    id: 9,
    month: "Février 2027",
    theme: "Souplesse & moto",
    emoji: "🏍️",
    cats: ["sport","perso","physique"],
    accent: "#81b29a",
    goals: [
      {
        cat: "sport",
        label: "Progression semi + souplesse",
        items: [
          "Courir 15 km lors de la longue sortie",
          "Mains au sol atteintes (objectif souplesse)",
          "Stretching quotidien 15 min minimum",
          "1ère tentative de grand écart (suivi photo)"
        ]
      },
      {
        cat: "perso",
        label: "Passerelle moto + nouvelles activités",
        items: [
          "Se préparer pour la passerelle moto (fév. 2027)",
          "Passer la passerelle A2 → A",
          "S'inscrire à un cours de pole dance",
          "Essayer l'enduro ou une sortie hors route"
        ]
      },
      {
        cat: "physique",
        label: "Soins & esthétique",
        items: [
          "RDV tatoueur (si budget ok)",
          "Soins corps : massage anti-cellulite hebdo bien installé",
          "Bilan peau : esthéticienne si besoin",
          "Tester un nouveau soin cheveux (protéines ou kératine)"
        ]
      }
    ],
    weekly: [
      { label: "Lundi", tasks: ["Running 55 min", "Salle bas", "Stretching 15 min"] },
      { label: "Mardi", tasks: ["Pilates 45 min + souplesse", "Skincare", "Anglais"] },
      { label: "Mercredi", tasks: ["Fractionné 35 min", "Salle haut", "Cours en ligne"] },
      { label: "Jeudi", tasks: ["Récup + yoga doux", "Journal", "Prépa passerelle moto"] },
      { label: "Vendredi", tasks: ["Running allure 45 min", "Pole dance ou nouvelle activité", "Skincare"] },
      { label: "Samedi", tasks: ["Longue sortie 15–17 km", "Soins corps + cheveux", "Activité moto"] },
      { label: "Dimanche", tasks: ["Repos", "Bilan + semaine suivante", "Lecture"] }
    ]
  },
  {
    id: 10,
    month: "Mars 2027",
    theme: "Peak form",
    emoji: "💪",
    cats: ["sport","mental","alimentation"],
    accent: "#c9a96e",
    goals: [
      {
        cat: "sport",
        label: "Pic de forme avant le semi",
        items: [
          "Longue sortie : 18–19 km",
          "Maintenir 5 entraînements/sem (run + salle + pilates)",
          "Courir un trail ou participer à une sortie de groupe",
          "Grand écart quasi-atteint ou 10 cm du sol"
        ]
      },
      {
        cat: "mental",
        label: "Lâcher prise & confiance renforcée",
        items: [
          "Évaluation personnelle : comment se sent-on vs juin 2026 ?",
          "1 action significative hors zone de confort ce mois",
          "Méditation 10 min/jour installée",
          "Exprimer ses besoins à Max sans anxiété 3 fois cette semaine"
        ]
      },
      {
        cat: "alimentation",
        label: "Nutrition de performance",
        items: [
          "Adapter l'alimentation à la charge d'entraînement (plus de glucides les jours de longue sortie)",
          "Hydratation : 2L/jour minimum",
          "Suppléments sport (magnésium, fer si besoin, vitamine D)",
          "Préparer sa nutrition de course (gel, boisson)"
        ]
      }
    ],
    weekly: [
      { label: "Lundi", tasks: ["Running endurance 60 min", "Salle bas", "Journal"] },
      { label: "Mardi", tasks: ["Pilates avancé 50 min", "Skincare", "Méditation 10 min"] },
      { label: "Mercredi", tasks: ["Fractionné 40 min", "Salle haut + dos", "Anglais"] },
      { label: "Jeudi", tasks: ["Récup active + souplesse", "Journal émotionnel", "Lire"] },
      { label: "Vendredi", tasks: ["Running allure cible", "Skincare + soin", "Cours en ligne"] },
      { label: "Samedi", tasks: ["Longue sortie 18–19 km", "Soins corps complets", "Activité sociale"] },
      { label: "Dimanche", tasks: ["Repos total", "Meal prep", "Bilan semaine"] }
    ]
  },
  {
    id: 11,
    month: "Avril 2027",
    theme: "Semi-marathon 🏁",
    emoji: "🏃‍♀️",
    cats: ["sport","mental","physique"],
    accent: "#e07a5f",
    goals: [
      {
        cat: "sport",
        label: "Courir le semi-marathon d'Annecy < 1h50",
        items: [
          "Semaines 1–2 : tapering (réduire le volume, maintenir l'intensité)",
          "Semaine 3 : repos et préparation mentale",
          "Jour J : semi-marathon Annecy — objectif 1h50",
          "Post-race : récupération 1 semaine complète",
          "Bilan et célébration de la victoire !"
        ]
      },
      {
        cat: "mental",
        label: "Visualisation et mental de compétition",
        items: [
          "Visualiser la course chaque soir de la semaine avant",
          "Répéter une phrase d'ancrage (ex. 'je suis forte, je termine')",
          "Gérer le stress pré-course avec la respiration",
          "Écrire une lettre à soi-même à ouvrir après la course"
        ]
      },
      {
        cat: "physique",
        label: "Corps post-entraînement intensif",
        items: [
          "Massage de récupération musculaire après le semi",
          "Bilan peau : récompense esthétique (soin visage pro)",
          "RDV tatoueur (si reporté)",
          "Mettre à jour le suivi mensuel poids/mensurations"
        ]
      }
    ],
    weekly: [
      { label: "Lundi", tasks: ["Running tapering 45 min", "Pilates léger", "Visualisation"] },
      { label: "Mardi", tasks: ["Fractionné court 25 min", "Skincare", "Méditation"] },
      { label: "Mercredi", tasks: ["Run léger 30 min", "Salle douce", "Lettre à soi-même"] },
      { label: "Jeudi", tasks: ["Repos + stretching", "Journal", "Préparer son dossard"] },
      { label: "Vendredi", tasks: ["Run 20 min très léger", "Soins complets", "Coucher tôt"] },
      { label: "Samedi", tasks: ["Repos OU retrait dossard", "Préparer affaires course", "Glucides loading"] },
      { label: "Dimanche", tasks: ["COURSE", "Récupération", "Célébration"] }
    ]
  },
  {
    id: 12,
    month: "Mai–Juin 2027",
    theme: "La vie de rêve",
    emoji: "🌟",
    cats: ["lifestyle","perso","mental"],
    accent: "#81b29a",
    goals: [
      {
        cat: "lifestyle",
        label: "Consolider une vie épanouie",
        items: [
          "Temps d'écran < 2h/jour maintenu durablement",
          "Sommeil 8h : habitude installée depuis 1 an",
          "Routine matinale et soirée fluides et naturelles",
          "Budget maîtrisé : économies qui progressent chaque mois"
        ]
      },
      {
        cat: "perso",
        label: "Bilan 12 mois & nouvelles ambitions",
        items: [
          "Écrire son bilan complet : corps, mental, sport, social, pro",
          "Identifier les 3 prochains grands objectifs (Hyrox ? Escalade ? Voyage ?)",
          "Partager sa transformation avec ses proches",
          "Planifier le prochain voyage ou aventure"
        ]
      },
      {
        cat: "mental",
        label: "Rayonner & inspirer",
        items: [
          "Être l'amie présente, joyeuse, de confiance",
          "Relation avec Max : sereine, passionnée, équilibrée",
          "Se rapprocher de sa grand-mère (appel ou visite mensuelle)",
          "Commencer à enseigner ou partager ce qu'on a appris"
        ]
      }
    ],
    weekly: [
      { label: "Lundi", tasks: ["Sport au choix (fun avant tout)", "Skincare", "Journal bilan"] },
      { label: "Mardi", tasks: ["Activité plaisir (pole, escalade, vélo…)", "Méditation", "Anglais"] },
      { label: "Mercredi", tasks: ["Running ou salle", "Soin corps", "Cours ou projet perso"] },
      { label: "Jeudi", tasks: ["Repos actif", "Appel grand-mère", "Lire"] },
      { label: "Vendredi", tasks: ["Sport + plaisir", "Skincare + soin", "Soirée avec des amis"] },
      { label: "Samedi", tasks: ["Aventure ou sortie", "Soins cheveux", "Temps de qualité"] },
      { label: "Dimanche", tasks: ["Repos", "Bilan annuel en cours", "Rêver aux prochains objectifs"] }
    ]
  }
];

const CAT_LABELS = {
  physique: "Corps & beauté",
  mental: "Mental",
  sport: "Sport",
  alimentation: "Alimentation",
  lifestyle: "Lifestyle",
  perso: "Développement perso"
};

const CAT_COLORS = {
  physique: "#e07a5f",
  mental: "#7f77dd",
  sport: "#1d9e75",
  alimentation: "#639922",
  lifestyle: "#c9a96e",
  perso: "#378add"
};
