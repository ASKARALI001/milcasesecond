import React from 'react';

const Title = ({title}) => {
    return (
        <div className='video'>
            <h2 className="video__title"><span>{title}</span></h2>
        </div>
    );
};

export default Title;