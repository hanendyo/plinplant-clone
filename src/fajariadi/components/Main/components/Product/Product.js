import React, { useState, useEffect, useContext } from 'react';
import {
  Container,
  SearchBar,
  SectionProduct,
  ProductSlider,
} from './Product.element';
import { FaSearch } from 'react-icons/fa';
// import {
//   products,
//   productsCategory,
// } from '../../../../../master/constant/data/dummy-data';
import ProductsContainer from './ProductsContainer';
import { ContextStore } from '../../../../../context/store/ContextStore';

const Product = () => {
  const [search, setSearch] = useState('');

  const { tablePlantState } = useContext(ContextStore);

  useEffect(() => {}, []);

  const searching = search
    .toLowerCase()
    .split('')
    .filter((item) => item.trim())
    .join('');

  const searchedProduct = tablePlantState.map((item) =>
    item.plant_name
      .toLowerCase()
      .split('')
      .filter((item) => item.trim())
      .join('')
  );

  const searched = searchedProduct.map((item) => item.includes(searching));

  const productsCategory = tablePlantState
    .map((item) => item.fk_category_id)
    .filter((item, index, arr) => arr.indexOf(item) === index);

  return (
    <SectionProduct id='content'>
      <Container>
        <SearchBar>
          <h4>Pertama, mari cari tanaman favoritmu</h4>

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
            <>
              {searched.includes(true) ? (
                <ProductsContainer search={search} searching={searching} />
              ) : (
                <p style={{ textAlign: 'center' }}>
                  Mohon maaf, tanaman yang Anda cari belum tersedia.
                </p>
              )}
            </>
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
