/*******************************************************************************
    Contrôler la création et la destruction des éléments 'disque' et 'etoile'
*******************************************************************************/

/* [À compléter : étape 1a] */
// Saisir chacun des boutons de contrôle (un à la fois)
let btnDisque = document.querySelector(".btn-lancer-disque");
let btnEtoile = document.querySelector(".btn-lancer-etoile");


/* [À compléter : étape 1b] */
// Leur associer les gestionnaires d'événements adéquats lorsqu'ils sont cliqués
// Attention, utilisez les noms des fonctions gestionnaires d'événements déclarées
// ci-dessous (que vous devez aussi compléter)
btnDisque.addEventListener("click", creerDisque);
btnEtoile.addEventListener("click", creerEtoile);


// Initialiser des variables pour numréroter les formes créées
let numeroDisque = 0;
let numeroEtoile = 0;

/* [À compléter : étape 1c] */
/**
 * Créer un élément HTML ayant la classe 'disque', le configurer, et l'insérer 
 * dans le document à l'emplacement approprié
 */
function creerDisque() {
    // Créer l'élément
    let disque = document.createElement("div");
    
    // Lui assigner son numéro comme texte (les numéros doivent démarrer à 1 et
    // être incrémentés par 1 à chaque nouvel élément 'disque' créé)
    disque.innerHTML = ++numeroDisque;
    
    // Ajouter la classe 'disque' à ce nouvel élément
    disque.classList.add("disque");
    
    // Lui assosier le gestionnaire d'événement 'clic' pour supprimer l'élément
    // lorsqu'il est cliqué : utilisez le nom de la fonction déclarée ci-dessous
    disque.addEventListener("click", detruireForme);
    
    // Insérer l'élément dans l'arbre du document (DOM) à l'intérieur de la boîte
    // ayant l'attribut id "conteneur-disques"
    document.getElementById("conteneur-disques").appendChild(disque);
    
}

/* [À compléter : étape 1d] */
/**
 * Créer un élément HTML ayant la classe 'etoile', le configurer, et l'insérer 
 * dans le document à l'emplacement approprié
 */
 function creerEtoile() {
    // Créer l'élément
    let etoile = document.createElement("div");
    
    // Lui assigner son numéro comme texte (les numéros doivent démarrer à 1 et
    // être incrémentés par 1 à chaque nouvel élément 'etoile' créé)
    etoile.innerHTML = ++numeroEtoile;

    // Ajouter la classe 'etoile' à ce nouvel élément
    etoile.classList.add("etoile");
    
    // Lui assosier le gestionnaire d'événement 'clic' pour supprimer l'élément
    // lorsqu'il est cliqué : utilisez le nom de la fonction déclarée ci-dessous
    etoile.addEventListener("click", detruireForme);
    
    // Insérer l'élément dans l'arbre du document (DOM) à l'intérieur de la boîte
    // ayant l'attribut id "conteneur-etoiles"
    document.getElementById("conteneur-etoiles").appendChild(etoile);
    
}

/* [À compléter : étape 1e] */
/**
 * Détruire l'élément HTML cliqué
 * @param {Event} evt : objet Event passé au gestionnaire d'événement 
 */
function detruireForme(evt) {
    // Supprimer l'élément cliqué (et n'oubliez pas de retirer le gestionnaire
    // d'événement qui lui est associé auparavant)
    evt.target.removeEventListener("click", detruireForme);
    evt.target.remove();
    

}