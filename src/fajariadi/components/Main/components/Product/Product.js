import React, { useState, useEffect } from 'react';
import {
  Container,
  SearchBar,
  SectionProduct,
  ProductSlider,
} from './Product.element';
import { FaSearch } from 'react-icons/fa';
import { productsCategory } from '../../../../../master/constant/data/dummy-data';
import ProductsContainer from './ProductsContainer';

const Product = () => {
  const [search, setSearch] = useState('');

  useEffect(() => {}, []);

  return (
    <SectionProduct>
      <Container>
        <SearchBar>
          <h4>Lorem ipsum dolor sit amet, consectetur</h4>

          <div>
            <input
              type='text'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Contoh: Aglonema'
            />

            <div>
              <FaSearch />
            </div>
          </div>
        </SearchBar>

        <ProductSlider>
          {search ? (
            <p>Search Work!</p>
          ) : (
            <>
              {productsCategory.map((category, index) => (
                <ProductsContainer slider category={category} key={index} />
              ))}
            </>
          )}
        </ProductSlider>
      </Container>
    </SectionProduct>
  );
};

export default Product;
