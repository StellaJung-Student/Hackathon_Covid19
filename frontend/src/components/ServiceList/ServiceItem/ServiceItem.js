import React from 'react';
import './ServiceItem.css';
import { Link } from 'react-router-dom';

const ServiceItem = ({
  name,
  description,
  address,
  rating,
  url = 'https://www.pngfind.com/pngs/m/665-6659827_enterprise-comments-default-company-logo-png-transparent-png.png',
}) => {
  return (
    <li className='service-item-container'>
      <div
        className='service-item-image'
        style={{
          backgroundImage: `url(
          ${url}
        )`,
        }}
      ></div>
      <div className='service-item-info'>
        <Link
          to={`/reservation/${name}/reserve`}
          className='service-item-title'
        >
          {name}
        </Link>
        <div>{description}</div>
        <div className='service-item-bottom'>
          <div>{address}</div>
          <div>Rating {rating} out of 5</div>
        </div>
      </div>
    </li>
  );
};

export default ServiceItem;
