import React from 'react';
import './ModalAuth.css';

const ModalAuth = ({showModalAuth, setShowModalAuth}) => {
    return (
        <div className={showModalAuth ? "modal": "modal-disabled"}>
            <div className='modal_content'>
                <input type="text" />
                <input type="text" />
            </div>
        </div>
    );
};

export default ModalAuth;