import React, { useState } from 'react';
// Importar CSS do ButtonGroup
import './css/ButtonGroup.css';

export default function ButtonGroup({ buttons }) {
    const [clickedId, setClickedId] = useState(-1);

    const handleClick = (e, i) => {
        setClickedId(i);
    }

    return (
        <div className='row mb-4'>
            {
                buttons.map((buttonLabel, i) => (
                    <div key={i} className={i == 0 ? 'col-3' : 'col'}>
                        <button key={i} onClick={(e) => handleClick(e, i)} className={
                            i === clickedId || clickedId == -1 && buttonLabel == "Qualquer um" ? 'w-100 btn-special active' : 'w-100 btn-special'
                        }>
                            {buttonLabel}
                        </button>
                    </div>
                ))
            }
        </div>
    )
}
