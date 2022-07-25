/**
 * Énuération relative au type que peut prendre un composant. Elle comprend :
 * * `TEXT` : Composant de type texte, permettant notamment de saisir un paragraphe.
 * * `SQUARE_PERMUTATION` : Composant permettant de générer une permutation avec par exemple une clé et des indices.
 * * `GRAPHE` : Composant permettant de générer un graphe.
 * * `CODE` : Composant permettant de générer un block de code.
 */
export enum IComponentType {

    TEXT,
    SQUARE_PERMUTATION,
    GRAPHE,
    CODE

}