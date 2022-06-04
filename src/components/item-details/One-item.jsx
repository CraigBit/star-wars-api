import React from 'react';

const OneItem = ({ item, image, children }) => {
  const { name } = item;
  return (
    <React.Fragment>
      <img className="item-image" src={image} alt="character" />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default OneItem;
