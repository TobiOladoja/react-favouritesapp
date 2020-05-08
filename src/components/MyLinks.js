import React, { useState } from 'react';

const MyLinks = (props) => {
  const linkImageStyle = {
    backgroundImage:
      "url('https://miro.medium.com/max/863/1*BFV8Gwt5BILa-xv04IK2ng.png')",
  };

  const mappedData = props.cards.map((card, i) => {
    return (
      <div key={i} className='linkCard'>
        <div className='linkCardImage' style={linkImageStyle}></div>
        <div className='linkCardLink'>
          <h2>
            <a href={card.linkHref}>{card.linkName}</a>
          </h2>
        </div>
      </div>
    );
  });

  return <div className='rightContent'>{mappedData}</div>;
};

export default MyLinks;
