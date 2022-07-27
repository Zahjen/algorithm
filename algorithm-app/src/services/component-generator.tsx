import React from "react";
import { View, Text } from "react-native";
import { borderRadius } from "../variable/border-radius";
import { color } from "../variable/color";
import { text } from "../style/global";
import MyText from "../component/text";
import Code from "../page/element/code";
import { ElementProps } from "../ressource/course/sort/insertion-sort";
import { EComponentType } from "../enumeration/component-type";
import LineSquarePermutation from "../page/element/line-square-permutation";

export class ComponentGenerator {

    // ----------------
    // Déclaration d'attribut
    // ----------------

    private static _instance: ComponentGenerator;

    // ----------------
    // Constructeur
    // ----------------

    private constructor() { }

    // ----------------
    // Récupération de l'instance de la classe ComponentGenerator 
    // pour l'implémentation du design pattern Singleton
    // ----------------

    /**
     * Méthode permettant de générer une unique instance de la classe ComponentGenerator à l'aide du pattern Singleton.
     * 
     * @returns Une instance de la classe ComponentGenerator.
     */
    public static getInstance() : ComponentGenerator {
        if (!ComponentGenerator._instance) ComponentGenerator._instance = new ComponentGenerator();

        return ComponentGenerator._instance;
    }

    // ----------------
    // Méthode
    // ----------------

    /**
     * Méthode permettant d'afficher un message indiquant si un problème est survenu lors de la création d'un composant.
     * 
     * @returns Message d'erreur.
     */
    public renderErrorComponent(): JSX.Element {
        return <View style = {{ 
            backgroundColor: color.errorComponent,
            padding: 10,
            borderRadius: borderRadius.card
        }}>
            <Text style = {text(color.text)}>
                Oops... Un problème est survenu! Vérifiez la saisie des données!
            </Text>
        </View>
    }

    /**
     * Méthode permettant de générer un simple paragraphe.
     * 
     * @param data Données permettant de générer le composant
     * @returns Un paragraphe
     */
    public renderNormalParagraph(data: ElementProps): JSX.Element {
        return (
            <MyText
                text = { data.content }
                textAlign = "justify"
            />
        );
    }

    /**
     * Méthode permettant de générer un  block de code.
     * 
     * @param data Données permettant de générer le composant
     * @returns Un block de code 
     */
    public renderCode(data: ElementProps): JSX.Element {
        return (
            <Code 
                text = { data.content }            
            />
        )
    }

    /**
     * Méthode permettant de générer un composant de permutation composé d'une couleur permettant l"explication des différents algorithmes.
     * 
     * @param data Données permettant de générer le composant
     * @returns Une permutation composée d'une couleur permettant l"explication des différents algorithmes
     */
    public renderPermutationOneColor(data: any): JSX.Element {
        return (
            <LineSquarePermutation
                datasFirst = { data.data }
                backgroundColorFirst = { data.color }
            />
        )
    }

    /**
     * Méthode permettant de générer le bon composant selon le type entré.
     * 
     * @param data Données permettant de générer le composant
     * @returns Le composant correspondant au type entré
     */
    public renderComponent(data: ElementProps): JSX.Element {
        switch(data.type) {
            case EComponentType.TEXT :
                return this.renderNormalParagraph(data);
            case EComponentType.CODE :
                return this.renderCode(data);
            default:
                return this.renderErrorComponent();
        }
    }

}