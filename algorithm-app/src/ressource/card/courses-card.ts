export type CourseCardType = {
    key: string,
    label: string
}

export const CourseCard: any = {

    sort: [
        { 
            key: 'insertion', 
            label: 'Tri par insertion',
        },
        { 
            key: 'bubble', 
            label: 'Tri à bulles',
        },
        { 
            key: 'merge', 
            label: 'Tri fusion',
        },
    ] as CourseCardType[],

    search: [
        { 
            key: 'binary-search', 
            label: 'Recherche dichotomique',
        },
    ] as CourseCardType[]

}