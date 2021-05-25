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

const Article = () => {
  // USE STYLES
  const classes = useStyles();

  // USE CONTEXT
  const context = useContext(ContextStore);
  const { reviewState, reviewDispatch } = context;

  // USE STATE
  const [dataReview, setDataReview] = useState([
    {
      quantity: '',
      fk_price_list_id: '',
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);

  // USE EFFECT
  useEffect(() => {
    getAllDataAPI();
    console.log(`dataReview: `, dataReview);
  }, []);

  const url = 'http://localhost:5000/input/';
  const endPoint = 'review';

  // GET
  const getAllDataAPI = async () => {
    await axios
      .get(url + endPoint + '_get_all_datas')
      .then((res) => {
        if (res.status === 200) {
          console.log(`GET RES DATA DATA: `, res.data.data);
          setDataReview(res.data.data);
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
      .post(url + endPoint + `_input`, data)
      .then((res) => {
        getAllDataAPI();
        console.log(`Article successfuly created!`);
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
  const deleteAPI = async (id, index) => {
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
    console.log(`DATA UPDATE: `, data);
    axios
      .put(url + endPoint + `_update`, data)
      .then((res) => {
        getAllDataAPI();
        console.log(`Review successfuly updated!`);
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
      updateAPI(reviewState);
      setIsUpdate(false);
    } else {
      postAPI(reviewState);
    }

    setDataReview([
      {
        ...dataReview,
        quantity: reviewState.quantity,
        fk_price_list_id: reviewState.fk_price_list_id,
      },
    ]);

    clearFormData();

    console.log(`REVIEW STATE SUBMIT: `, reviewState);
  };

  // HANDLE DELETE
  const handleDelete = (id, index) => {
    deleteAPI(id, index);
  };

  // HANDLE UPDATE
  const handleUpdate = (data, index) => {
    setIsUpdate(true);
    setIndexUpdate(index);
    reviewDispatch(cmsAction(`quantity`, data.quantity));
    reviewDispatch(cmsAction(`fk_price_list_id`, data.fk_price_list_id));
    console.log(`update from reviewState: `, reviewState);
  };

  // HANDLE CANCEL
  const handleCancel = () => {
    clearFormData();
    setIsUpdate(false);
  };

  // CLEAR FORM
  const clearFormData = () => {
    reviewDispatch(cmsAction(`quantity`, ''));
    reviewDispatch(cmsAction(`fk_price_list_id`, ''));
  };

  // FORM CHANGE
  const formChange = (name, value) => {
    reviewDispatch(cmsAction(name, value));
  };

  return (
    <Container>
      <h4>Review input</h4>
      <BoxInput>
        <form
          encType='multipart/form-data'
          className={classes.root}
          onSubmit={(e) => handleSubmit(e)}
          noValidate
          autoComplete='off'
        >
          <TextField
            value={reviewState.quantity}
            name='quantity'
            onChange={(e) => formChange(`quantity`, e.target.value)}
            id='outlined-basic'
            label='quantity'
            variant='outlined'
          />
          <TextField
            value={reviewState.fk_price_list_id}
            onChange={(e) => formChange('fk_price_list_id', e.target.value)}
            name='fk_price_list_id'
            id='outlined-basic'
            label='fk_price_list_id'
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
      <h4>Review Data</h4>
      <div>
        {dataReview.map(
          (data, index) => (
            console.log(`data article map: `, dataReview),
            (
              <ul className='map' key={index}>
                <li>
                  NO: <span>{index + 1}</span>
                </li>
                <li>
                  quantity: <span>{data.quantity}</span>
                </li>
                <li>
                  PRICE_LIST_ID: <span>{data.fk_price_list_id}</span>
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

export default Article;
