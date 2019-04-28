# Documentation API

L'api permet d'effectuer les actions suivantes sur les routes données :

1. `api/toucans` :

  * `GET`: Renvoie une liste contenant tous les toucans de la bdd. Les toucans sont sous la forme d'objets avec les champs _id, date et title.
  
  * `POST` : Permet de sauvegarder un toucan, prend en champs :

    * `date` : Au format Date
    * `title` : Une String
    * `toucan` : Un pdf
    * `cover` : Au format png ou jpg
  
  Si l'oppération est un succès, on renvoie un message de succès et l'id du toucan enregistré.