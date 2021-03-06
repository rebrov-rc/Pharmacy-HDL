import React from 'react'
import { Link } from 'react-router-dom';
import '../../SASS/PayComponent.sass'
import { ProdObj } from '../../Types/types';



const PayComponent : React.FC  = (props : any) => {
    let total : number = 0;
    let { remove } = props;
    props.addedToCart.forEach((element : ProdObj) => {
        total += Number(element.cost.new);
    });
    const event = (id : string) => {
        remove(id);
    };

    return (
        <div>
            Pay Component
            <div className="order-objects-wrap">
                <div className="order-objects">
                    { 
                        props.addedToCart.map((el : ProdObj , i : number) => (
                            <div key={el.id + i} className="order-objects_item">
                                <Link to={'/productViewer/product/' + el.id} >
                                    <div className="">
                                        {el.name}
                                    </div>
                                </Link>
                                <div className="">
                                    {el.cost.new}
                                </div>
                                <div 
                                    className="order-objects-btn-remove"
                                    onClick={() => {
                                        event(el.id)
                                    }}
                                >
                                    &times;
                                </div>
                            </div>
                            )
                        )
                    }
                </div>
            </div>
            <div className="pay" style={{
                display: "flex",
                justifyContent: "flex-end"
            }}>
                <div className="total-cost" style={{

                }}>
                    { total }
                </div>
                <div className="order">
                    <button>Order</button>
                </div>
            </div>
        </div>
    )
}

export default PayComponent
