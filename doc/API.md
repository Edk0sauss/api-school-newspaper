# Documentation API

## Utilisation de l'API

L'API permet de récuper et de poster des toucans et leurs couvertures. Les requetes POST sont toutes protégées : Il faut mettre dans les headers `token` avec le token jwt donnée par l'api en début de session.

L'api possède les routes :

1. `toucan/toucans` :

* `GET`: Renvoie une liste contenant tous les toucans de la bdd. Les toucans sont sous la forme d'objets avec les champs _id, date et title.

  * `limit` : Int en paramètre, il permet de ne pas récupérer plus de limit toucans.
  
* `POST` : Permet de sauvegarder un toucan, prend en champs :

  * `date` : Au format Date
  * `title` : Une String
  * `toucan` : Un pdf
  * `cover` : Au format png ou jpg

  Si l'oppération est un succès, on renvoie un message de succès et l'id du toucan enregistré.

2. `toucan/pdf/:id` :

* `GET` Renvoie le pdf du toucan avec id comme _id dans la base de donnée.

3. `toucan/img/:id` :

* `GET` Renvoie la cover du toucan avec id comme _id dans la base de donnée.
  
4. `toucan/delete/:id` :

* `POST` Supprimer le toucan avec id comme _id dans la base de donnée.

5. `oauth/login`

* `GET` s'authentifier auprès de l'oauth.

6. `oauth/callback`

* `GET` Permet de récupérer un token  d'authentification après connexion à l'oauth.