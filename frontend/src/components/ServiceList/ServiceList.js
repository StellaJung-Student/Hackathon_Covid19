import React from 'react';
import ServiceItem from './ServiceItem/ServiceItem';
import './ServiceList.css';

function ServiceList({ services }) {
  console.log(services);
  return (
    <>
      <ul className='service-list'>
        {services.map((e) => (
          <ServiceItem
            key={e.name}
            name={e.name}
            description={e.description}
            address={e.address}
            url={e.url}
            rating='3'
          />
        ))}
      </ul>
    </>
  );
}

export default ServiceList;
