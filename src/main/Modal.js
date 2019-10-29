import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import Button from './Button';

import '../css/Modal.css';

const Modal = ({
    title, isOpen, onCancel, onSubmit, children,
               }) => {
    return(
        <>
            { isOpen &&
                <div>
                    <div className="modalOverlay">
                        <div className="modalWindow">
                            <div className="modalHeader">
                                <div className="modalTitle">{title}</div>
                                <Icon name="times" onClick={onCancel} />
                            </div>
                            <div className="modalBody">
                                {children}
                            </div>
                            <div className="modalFooter">
                                <Button onClick={onCancel} >Cancel</Button>
                                <Button onClick={onSubmit} >Submit</Button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

Modal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    children: PropTypes.node,
};

Modal.defaultProps = {
    title: 'Выберите действие',
    isOpen: false,
    onCancel: () => {},
    onSubmit: () => {},
    children: null,
};

export default  Modal;
