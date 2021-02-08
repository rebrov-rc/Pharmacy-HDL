export type ProdObj = {
    id : string,
    brand : string,
    name : string,
    photo: string[],
    cost : {
        old : string,
        new : string
    },
    discribes : string,
    categories ?: {
        main ?: string,
        keywords ?: string[]
    }
};
export type ProductList =  {list : ProdObj[]}
export type State = {
    Products : ProductList,
    addedToCart : {
        addedId : string[],
        added : string[]
    },
    viewPage : {},
};