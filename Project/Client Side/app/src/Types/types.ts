export type ProdObj = {
    id : string,
    brand ?: string,
    name? : string,
    photo?: string[],
    cost : {
        old : string,
        new : string
    },
    discribes? : string,
    categories ?: {
        main ?: string,
        keywords ?: string[]
    }
};
export type ProductList =  {list : ProdObj[]}

export type eddedType = {
    id : string,
    name : string,
    cost : string
}

export type productsBlockType = {
    Products: ProductList  | {list : {}[]},
    addedToCart : {
        addedId : string[],
        added : eddedType[]
    },
    viewPage : {},
}

export type State = {
    productsBlock : productsBlockType,
    slider : {}[],
    process : boolean,
    recommendedList : Array<ProdObj>,
    selectedObjects : {
        addedToCart : {
            addedId : string[],
            added : eddedType[]
        },
        viewPage : {
            id : string,
            name: string,
            discribes: string,
            cost: {},
            photo: string
        },
    }
};


export type addedToCartType = {
    addedId : string[],
    added : eddedType[]
}
// ======================================