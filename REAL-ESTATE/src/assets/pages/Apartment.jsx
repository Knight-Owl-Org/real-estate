import React from 'react';
import Header from '../components/Header';
import SearchForm from './info/SearchForm';
import PropertyList from './info/PropertyList';
import ImageGallery from './info/ImageGallery';

const Apartment = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start ">
      <Header />

      {/* Centered Content */}
      <div className="w-full flex justify-center py-12">
        <SearchForm />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-start py-12">
        {/* PropertyList takes 1/3 of the width on md+ screens */}
        <div className="w-full md:w-1/3">
          <PropertyList />
        </div>

        {/* ImageGallery takes the remaining 2/3 of the width on md+ screens */}
        <div className="w-full md:w-2/3">
          <ImageGallery />
        </div>
      </div>
    </div>
  );
}

export default Apartment;
