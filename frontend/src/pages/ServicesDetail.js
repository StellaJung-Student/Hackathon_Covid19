import React, { useState, useEffect } from 'react';
import DetailMenu from '../components/DetailMenu/DetailMenu';
import ServiceList from '../components/ServiceList/ServiceList';
import { useDispatch } from 'react-redux';
import { getCompanies } from '../actions/company_actions';

function ServicesDetail({ match: params }) {
  const dispatch = useDispatch();
  const [services, setServices] = useState([]);
  useEffect(() => {
    dispatch(getCompanies())
      .then((res) => {
        setServices(res.payload.data);
      })
      .catch((err) => console.log(err));
  }, [dispatch]);
  return (
    <>
      <DetailMenu title={params.params.id} />
      <ServiceList services={services} />
    </>
  );
}

export default ServicesDetail;
