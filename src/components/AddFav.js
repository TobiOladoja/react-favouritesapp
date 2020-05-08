import React from 'react';

function AddFav({
  newCard,
  setNewCard,
  cardData,
  setCardData,
  dispatchCardSet,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='leftContent'>
      <img src='https://miro.medium.com/max/863/1*BFV8Gwt5BILa-xv04IK2ng.png' />
      <form onSubmit={handleSubmit}>
        <h2 className='formTitle'>Add a Favourite</h2>
        <div>
          <label htmlFor='linkTitle' className='formLabel'>
            Enter a favourite name
          </label>
          <input
            value={newCard.linkName}
            onChange={(e) =>
              setNewCard({ ...newCard, linkName: e.currentTarget.value })
            }
            type='text'
            name='linkTitle'
            minLength='1'
            maxLength='25'
            placeholder='25 characters max'
          />
        </div>
        <div>
          <label htmlFor='linkHref3' className='formLabel'>
            Enter a favourite name
          </label>
          <input
            value={newCard.linkHref}
            onChange={(e) =>
              setNewCard({ ...newCard, linkHref: e.currentTarget.value })
            }
            type='text'
            name='linkHref3'
            minLength='7'
            placeholder='https://examplelink.com/'
          />
        </div>
        <button onClick={() => dispatchCardSet(newCard)}>Add</button>
      </form>
    </div>
  );
}

export default AddFav;
