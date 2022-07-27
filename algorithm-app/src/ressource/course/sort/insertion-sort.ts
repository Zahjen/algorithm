import { EComponentType } from "../../../enumeration/component-type";

export interface ElementProps {
    type: EComponentType,
    content: string
}

export const insertionSortCourse: ElementProps[] = [

    {
        type: EComponentType.TEXT,
        content: "Supposons que l'on ait un tas de cartes à trier dans un ordre croissant. On placera à notre gauche les cartes triées et à notre droite les cartes non triées. Au départ, étant donné que notre tas de cartes est désordonné, on le placera dans à notre droite. On va donc considérer une à une les cartes placées à droite et ce que l'on va chercher à faire, c'est de placer une à une les cartes de droite dans la pile de gauche tout en la gardant triée."
    },
    {
        type: EComponentType.TEXT,
        content: "Pour que le principe soit plus parlant, considérons un exemple. Supposons que l'on veuille trier les cartes suivantes :"
    },
    {
        type: EComponentType.TEXT,
        content: "Les cartes non triées seront affichées en bleu, et l'emplacement que l'on appelle la Clé n'est rien d'autre que la carte actuelle que l'on souhaite insérer dans la pile de gauche."
    },
    {
        type: EComponentType.TEXT,
        content: "Pour que cela ait un peu de sens on commence par affirmer que notre première carte, notée ici d'un 5, est triée et appartient au membre de gauche. Ainsi la prochaine carte qui devra intégrer le membre de gauche est la carte notée d'un 18. Cette carte devient par conséquent la clé. Pour que la pile de gauche soit triée une fois la carte 18 insérée, on va devoir la comparer avec la carte déjà présente."
    },
    {
        type: EComponentType.TEXT,
        content: "Il est assez facile de remarquer que 5 < 18. Il vient donc qu'on peut placer la carte notée d'un 18 à l'emplacement 1."
    },
    {
        type: EComponentType.TEXT,
        content: "Maintenant, la prochaine carte devant être intégrée à gauche est la carte portant le nombre 12."
    },
    {
        type: EComponentType.TEXT,
        content: "Commençons par comparer les cartes 12 et 18. On constate que 12 < 18. Il vient donc que la carte 18 doit libérer de l'espace pour venir se placer à l'emplacement 2."
    },
    {
        type: EComponentType.TEXT,
        content: "Vient ensuite la comparaison des cartes 5 et 12. On a ici que 5 < 12. Par conséquent la carte 12 se place à l'emplacement 1. Notons que l'on conserve bel et bien le tri de la partie gauche."
    },
    {
        type: EComponentType.TEXT,
        content: "On arrive presque à bout de notre tas de cartes à trier. Il ne reste qu'à placer correctement la carte notée d'un 7."
    },
    {
        type: EComponentType.TEXT,
        content: "La première comparaison est celle concernant les cartes 7 et 18. Sachant que 7 < 18, la carte 18 doit libérer sa place pour aller à l'emplacement 3."
    },
    {
        type: EComponentType.TEXT,
        content: "La prochaine comparaison concerne les cartes 7 et 12. On constate que 7 < 12. Comme pour la carte 18, la carte 12 libère sa place et vient à l'emplacement 2."
    },
    {
        type: EComponentType.TEXT,
        content: "Il nous faut finalement comparer les cartes 7 et 5. On remarque alors que 5 < 7. La carte portant le nombre 7 vient se placer à l'emplacement 1."
    },
    {
        type: EComponentType.TEXT,
        content: "On a donc finalement trié notre paquet de carte en respectant le processus du tri par insertion. Voici à quoi ressemble le programme permettant d'opérer ce tri."
    },
    {
        type: EComponentType.CODE,
        content: "const insertion_sort = ( array: number[] ) => {\n    const size: number = array.length ;\n\n    for ( let i = 1 ; i < size ; i ++ ) {\n        const key: number = array[i] ;\n        let j: number = i - 1 ;\n\n        while ( j >= 0 && key < array[j] ) {\n            array[j + 1] = array[j] ;\n            j -- ;\n        }\n\n        array[j + 1] = key ;\n    }\n}"
    },
    {
        type: EComponentType.TEXT,
        content: "Parlons un tant soit peu du programme en lui - même, et donnons en une petite explication."
    },
    {
        type: EComponentType.TEXT,
        content: "La première ligne de la fonction permet de récupérer la taille du tableau à trier."
    },
    {
        type: EComponentType.TEXT,
        content: "La deuxième ligne quant à elle débute le parcours du tableau en commençant, comme dans l'exemple ci - dessus, par le deuxième élément. Comme dit plus haut, il est quelque peu inutile de vouloir comparer le premier élément avec rien."
    },
    {
        type: EComponentType.TEXT,
        content: "La première chose à faire va être d'initialiser la clé, c'est ce que la troisième ligne fait. Elle permet par conséquent l'initialisation de la clé avec l'élément que l'on souhaite comparer avec ses prédécéseurs."
    },
    {
        type: EComponentType.TEXT,
        content: "La quatrième ligne permet d'initialiser la variable j qui correspond au prédécesseur en cours de comparaison avec la clé."
    },
    {
        type: EComponentType.TEXT,
        content: "Les lignes 5, 6 et 7 vont de pair, et traduisent le fait suivant : tant qu'il existe des prédécesseurs (j >= 0) de la carte en cours de comparaison et que la valeur de la clé est inférieure au prédécesseur en cours de comparaison, on décale le prédécesseur, évalué supérieur à la clé, d'une place, et on passe au prédécesseur suivant."
    },
    {
        type: EComponentType.TEXT,
        content: "La neuvième ligne nous dit simplement qu'une fois sorti de la boucle for on place la clé à l'emplacement correct qui lui a été destiné."
    }

]



