import React, { useState, useEffect } from 'react';
import {
  Container,
  SearchBar,
  SectionProduct,
  ProductSlider,
} from './Product.element';
import { FaSearch } from 'react-icons/fa';
import {
  products,
  productsCategory,
} from '../../../../../master/constant/data/dummy-data';
import ProductsContainer from './ProductsContainer';

const Product = () => {
  const [search, setSearch] = useState('');

  useEffect(() => {}, []);

  const searchedProduct = products.map((item) =>
    item.name
      .toLowerCase()
      .split('')
      .filter((item) => item.trim())
      .join('')
  );
  console.log(searchedProduct);

  const searched = searchedProduct.map((item) =>
    item.includes(search.toLowerCase())
  );

  console.log(searched);

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
          {search && searched ? (
            <p>oke!</p>
          ) : (
            // <ProductsContainer search product={searchedProduct} />
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
