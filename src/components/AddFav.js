import React from 'react';

function AddFav() {
  return (
    <div className='leftContent'>
      <img src='https://miro.medium.com/max/863/1*BFV8Gwt5BILa-xv04IK2ng.png' />
      <form>
        <h2 className='formTitle'>Add a Favourite</h2>
        <div>
          <label for='linkTitle' className='formLabel'>
            Enter a favourite name
          </label>
          <input
            type='text'
            name='linkTitle'
            minLength='1'
            maxLength='25'
            placeholder='25 characters max'
          />
        </div>
        <div>
          <label for='linkHref' className='formLabel'>
            Enter a favourite name
          </label>
          <input
            type='text'
            name='linkHref'
            minLength='7'
            placeholder='https://examplelink.com/'
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddFav;
