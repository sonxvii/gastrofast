import './Modal.css';

export function Modal() {
    return (
        <div className='modal'>
            {/* gallery */}
            <div className='modal__gallery'>
                gallery
            </div>
            {/* info */}
            <div className='modal__content'>
            <span className='modal__title'>Title</span>
            <div className='i'>
            <span className='modal__price'>100$</span>
            <span className='modal__weight'>75 г</span>
            </div>
            <ul className='modal__macronutrient'>
                <li className='macros'>1</li>
                <li className='macros'>2</li>
                <li className='macros'>3</li>
                <li className='macros'>4</li>
            </ul>
            <span className='modal__description'>Description</span>
            <span className='modal__compound'>Compound</span>
            <span className='modal__exp'>Expires</span>
            <p>New</p>
            </div>
        </div>
    );
}