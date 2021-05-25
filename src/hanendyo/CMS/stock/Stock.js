import React, { useEffect, useState } from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { useContext } from 'react';
import { ContextStore } from '../../../context/store/ContextStore';
import { cmsAction } from '../../../context/actions/CmsAction';
import axios from 'axios';
import { colors } from '../../../master/constant/style/index';
import { Container, BoxInput, SpanImage, ButtonContainer } from '../style/Form';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      display: 'flex',
    },
    button: {
      width: '80%',
      margin: '5px 0',
      backgroundColor: 'rgb(187, 203, 194)',
      color: 'primary',
    },
  },
}));

const PriceList = () => {
  // USE STYLES
  const classes = useStyles();

  // USE CONTEXT
  const context = useContext(ContextStore);
  const { stockState, stockDispatch } = context;

  // USE STATE
  const [dataStock, setDataStock] = useState([
    {
      seed_stock: '',
      tuber_stock: '',
      young_stock: '',
      mature_stock: '',
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);

  // USE EFFECT
  useEffect(() => {
    getAllDataAPI();
    console.log(`dataStock: `, dataStock);
  }, []);

  const url = 'http://localhost:5000/input/';
  const endPoint = 'article';

  // GET
  const getAllDataAPI = async () => {
    await axios
      .get(url + endPoint + '_get_all_datas')
      .then((res) => {
        if (res.status === 200) {
          console.log(`GET RES DATA DATA: `, res.data.data);
          setDataStock(res.data.data);
        } else {
          console.log('Error');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // POST
  const postAPI = async (data) => {
    axios
      .post(url + endPoint + `_input`, data, {
        headers: {
          'fk_plant_breeding_id-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        getAllDataAPI();
        console.log(`Stock successfuly created!`);
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(`ERROR!`);
        console.log(err);
        return err;
      });
  };

  // DELETE
  const deleleAPI = async (id, index) => {
    await axios
      .delete(url + endPoint + '_delete/' + id)
      .then((deleted) => {
        console.log(`DELETED: `, deleted);
        getAllDataAPI();
      })
      .catch((err) => err);
  };

  // UPDATE
  const updateAPI = async (data) => {
    axios
      .put(url + endPoint + `_update`, data, {
        headers: {
          'fk_plant_breeding_id-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        getAllDataAPI();
        console.log(`Stock successfuly updated!`);
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(`ERROR!`);
        console.log(err);
        return err;
      });
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      updateAPI(stockState);
      setIsUpdate(false);
    } else {
      postAPI(stockState);
    }

    setDataStock([
      {
        ...dataStock,
        seed_stock: stockState.seed_stock,
        image: stockState.image,
        young_stock: stockState.young_stock,
        mature_stock: stockState.mature_stock,
        fk_plant_breeding_id: stockState.fk_plant_breeding_id,
      },
    ]);

    clearFormData();

    console.log(`STOCK STATE SUBMIT: `, stockState);
  };

  // HANDLE DELETE
  const handleDelete = (id, index) => {
    deleleAPI(id, index);
  };

  // HANDLE UPDATE
  const handleUpdate = (data, index) => {
    setIsUpdate(true);
    setIndexUpdate(index);
    stockDispatch(cmsAction(`seed_stock`, data.seed_stock));
    stockDispatch(cmsAction(`mature_stock`, data.mature_stock));
    stockDispatch(cmsAction(`fk_plant_breeding_id`, data.fk_plant_breeding_id));
    stockDispatch(cmsAction(`young_stock`, data.young_stock));
    stockDispatch(cmsAction(`tuber_stock`, data.tuber_stock));
    stockDispatch(cmsAction(`pk_article_id`, data.pk_article_id));
    console.log(`update from stockState: `, stockState);
  };

  // HANDLE CANCEL
  const handleCancel = () => {
    clearFormData();
    setIsUpdate(false);
  };

  // CLEAR FORM
  const clearFormData = () => {
    stockDispatch(cmsAction(`seed_stock`, ''));
    stockDispatch(cmsAction(`mature_stock`, ''));
    stockDispatch(cmsAction(`fk_plant_breeding_id`, ''));
    stockDispatch(cmsAction(`young_stock`, ''));
    stockDispatch(cmsAction(`tuber_stock`, null));
  };

  // FORM CHANGE
  const formChange = (name, value) => {
    stockDispatch(cmsAction(name, value));
  };

  return (
    <Container>
      <h4>Stock input</h4>
      <BoxInput>
        <form
          encType='multipart/form-data'
          className={classes.root}
          onSubmit={(e) => handleSubmit(e)}
          noValidate
          autoComplete='off'
        >
          <TextField
            value={stockState.seed_stock}
            name='seed_stock'
            onChange={(e) => formChange(`seed_stock`, e.target.value)}
            id='outlined-basic'
            label='Seed stock'
            variant='outlined'
          />

          <TextField
            value={stockState.tuber_stock}
            onChange={(e) => formChange('tuber_stock', e.target.value)}
            name='tuber_stock'
            id='outlined-basic'
            label='Tuber stock'
            variant='outlined'
          />

          <TextField
            value={stockState.young_stock}
            onChange={(e) => formChange('young_stock', e.target.value)}
            name='young_stock'
            id='outlined-basic'
            label='Young stock'
            variant='outlined'
          />

          <TextField
            value={stockState.mature_stock}
            onChange={(e) => formChange('mature_stock', e.target.value)}
            name='mature_stock'
            id='outlined-basic'
            label='Mature stock'
            variant='outlined'
          />

          <Button
            className={classes.button}
            variant='contained'
            color='primary'
            type='submit'
            style={{ backgroundColor: `${colors.green}`, marginLeft: '25px' }}
          >
            {isUpdate ? 'Update' : 'Submit'}
          </Button>

          {isUpdate && (
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              onClick={() => handleCancel()}
            >
              Cancel
            </Button>
          )}
        </form>
      </BoxInput>
      <br />
      <h4>Stock Data </h4>
      <div>
        {dataStock.map(
          (data, index) => (
            console.log(`data article map: `, dataStock),
            (
              <ul className='map' key={index}>
                <li>
                  NO: <span>{index + 1}</span>
                </li>
                <li>
                  STOCK ID: <span>{data.pk_article_id}</span>
                </li>
                <li>
                  SEED STOCK: <span>{data.seed_stock}</span>
                </li>
                <li>
                  YOUNG STOCK: <span>{data.young_stock}</span>
                </li>
                <li>
                  MATURE STOCK: <span>{data.mature_stock}</span>
                </li>
                <li>
                  PLANT_BREEDING_ID: <span>{data.fk_plant_breeding_id}</span>
                </li>
                {
                  <div>
                    <button
                      onClick={() => handleDelete(data.pk_article_id, index)}
                    >
                      delete
                    </button>
                    <button onClick={() => handleUpdate(data, index)}>
                      Update
                    </button>
                    <br />
                  </div>
                }
              </ul>
            )
          )
        )}
      </div>
    </Container>
  );
};

export default PriceList;
