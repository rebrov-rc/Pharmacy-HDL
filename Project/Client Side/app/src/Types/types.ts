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
    slider : {}[]
};


export type addedToCartType = {
    addedId : string[],
    added : eddedType[]
}
// ======================================

// export type Adding_Action_Type = {
//     type : typeof ADD_REMOVE_PRODUCT_IN_CART, 
//     payload : string
// };

// export type Action = {
//     type : string,
//     payload : any
// }