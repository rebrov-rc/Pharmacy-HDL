import { ADD_REMOVE_PRODUCT_IN_CART,  SELECTED_FOR_VIEWING,   Action,  REMOVE_SELECTED_FOR_VIEWING } from "../Actions/Actions"

const addedToCart = {
    addedId : [],
    added : []
}

const selectedInit : any = {
    viewPage: {},
    addedToCart
}

const selectedObjectsReducer = (selected : any = selectedInit,  action : Action) : any => {
      
    switch(action.type) {

        case ADD_REMOVE_PRODUCT_IN_CART:
            
            const { payload } = action;
            let { added, addedId } : any = selected.addedToCart;
            
            
            for (let i : number = 0; i  <  selected.addedToCart.addedId.length; i++){
                if(addedId[i] === payload.id) { 
                    added.splice(i , 1) ;
                    addedId.splice(i , 1) ;
                    return({
                        ...selected,
                        addedToCart: {
                            addedId: [...addedId],
                            added: [...added],
                            }
                    })
                }
           
            }
                addedId.push(payload.id);
                added.push({...payload})
            
            
            return({
                ...selected,
                    addedToCart: {
                        addedId: [...addedId],
                        added: [...added],
                    }
            });

            case  SELECTED_FOR_VIEWING :
                return({
                    ...selected,
                    viewPage: { ...action.payload }
                });
                case REMOVE_SELECTED_FOR_VIEWING:
                    return({
                        ...selected,
                        viewPage: {  }
                    });
    }
    return (selected);
}

export default selectedObjectsReducer;