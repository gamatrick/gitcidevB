VALENTIN LAMOUCHE - CORENTIN RENARD

Ce projet est un projet de gestion de tâches en javascript.
Pour lancer les tests : 

`git clone https://github.com/gamatrick/gitcidevB`

`cd gitcidevB`
`cd gitcidevB-main`
`cd eval-git-ci-js-base`

`npm install`
`npm run test`

# Questions du livrable
différence switch/checkout : switch sert à changer de branche rapidement, quand checkout change et met à jour les branches
différence pull/fetch : pull sert à récupérer les derniers commits sur la branche locale, quand fetch en prend seulement connaissance
différence rebase/revert : rebase sert à réécrire l'historique quand revert sert à annuler un commit

git tag : permet de marquer un point précis dans l'historique (pour marquer une version par exemple)
git stash : met de côté les modifs non commit, pour avoir un repo propre
git release : crée une version officielle basée sur un 'git tag' précédent