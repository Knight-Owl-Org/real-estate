import React from 'react';
import Header from '../components/header';
import SearchForm from './info/SearchForm';
import PropertyList from './info/PropertyList';

const Apartment = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start ">
      <Header />

      {/* Centered Content */}
      <div className="w-full flex justify-center py-12">
        <SearchForm />
      </div>
      <div className="w-full flex item-left justify-start py-12">
        <PropertyList />
      </div>
    </div>
  );
}

export default Apartment;
