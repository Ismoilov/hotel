import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

function RoomFilter(props) {
  const context = useContext(RoomContext);
  const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;
  // get unique types
  let types = getUnique(props.rooms, 'type');
  // add all
  types = ['all', ...types];
  // map to jsx 
  types = types.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  });

  let people = getUnique(props.rooms, 'capacity');
  people = people.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  });

  return (
    <section className='filter-container'>
      <Title title='search rooms' />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select name="type" value={type} id="type" className="form-control" onChange={handleChange}>
            {types}
          </select>
        </div>
        {/* guests */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select name="capacity" value={capacity} id="capacity" className="form-control" onChange={handleChange}>
            {people}
          </select>
        </div>
        {/* End guests */}
        {/* Room price */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input type="range" name='price' min={minPrice} max={maxPrice} id='price' value={price} onChange={handleChange} className="form-control" />
        </div>
        {/* End Room price */}
        {/* Size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input type="number" name='minSize' id='size' value={minSize} onChange={handleChange} className='size-input' />
            <input type="number" name='maxSize' id='size' value={maxSize} onChange={handleChange} className='size-input' />
          </div>
        </div>
        {/* End Size */}
        {/* Extras */}
        <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" name='breakfast' id='breakfast' checked={breakfast} onChange={handleChange} />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input type="checkbox" name='pets' id='pets' checked={pets} onChange={handleChange} />
            <label htmlFor="pets">pets</label>
          </div>
        </div>  
        {/* End Extras */}
      </form>
    </section>
  );
}

export default RoomFilter;