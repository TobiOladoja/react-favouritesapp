import React from 'react';

function MyLinks() {
  const linkImageStyle = {
    backgroundImage:
      "url('https://miro.medium.com/max/863/1*BFV8Gwt5BILa-xv04IK2ng.png')",
  };

  return (
    <div className='rightContent'>
      <div className='linkCard'>
        <div className='linkCardImage' style={linkImageStyle}></div>
        <div className='linkCardLink'>
          <h2>
            <a href='#'>My Links</a>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default MyLinks;
