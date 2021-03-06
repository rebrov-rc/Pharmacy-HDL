import React from 'react'
import '../SASS/Spinner.sass'

const Spinner : React.FC  = () => {
    return(
        <div className="spinner-wrap">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default  Spinner;