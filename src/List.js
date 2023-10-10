import React from 'react';

function List({ title }) {
    return (
        <div className="list">
            {title.map((item, index) => (
                <div key={index}>
                    <h4>{item}</h4>
                    <p>2월 17일 발행</p>
                </div>
            ))}
        </div>
    );
}

export default List;