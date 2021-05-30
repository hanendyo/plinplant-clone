import React, { useEffect, useState } from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { useContext } from 'react';
import { ContextStore } from '../../../context/store/ContextStore';
import { cmsAction } from '../../../context/actions/CmsAction';
import axios from 'axios';
import {
  TableListPhone,
  ContentBox,
  ButtonList,
  Container,
  BoxForm,
  BoxTable,
  BoxTablePhone,
  SpanImage,
  ButtonContainer,
  ImageBox,
  List,
  ListData,
} from '../style/Form';
import { colors } from '../../../master/constant/style';

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

const Review = () => {
  // USE STYLES
  const classes = useStyles();

  // USE CONTEXT
  const context = useContext(ContextStore);
  const { reviewState, reviewDispatch } = context;

  // USE STATE
  const [dataReview, setDataReview] = useState([
    {
      comment: '',
      rating: '',
      fk_user_id: '',
      fk_plant_id: '',
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
  const postAPI = async (form) => {
    const data = new FormData();
    console.log('POST API', data);
    data.append('comment', form.comment);
    data.append('rating', form.rating);
    data.append('fk_user_id', form.fk_user_id);
    data.append('fk_plant_id', form.fk_plant_id);

    axios
      .post(url + endPoint + `_input`, data)
      .then((res) => {
        getAllDataAPI();
        console.log(`Review successfuly created!`);
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
        comment: reviewState.comment,
        rating: reviewState.rating,
        fk_user_id: reviewState.fk_user_id,
        fk_plant_id: reviewState.fk_plant_id,
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
    reviewDispatch(cmsAction(`comment`, data.comment));
    reviewDispatch(cmsAction(`rating`, data.rating));
    reviewDispatch(cmsAction(`fk_user_id`, data.fk_user_id));
    reviewDispatch(cmsAction(`fk_plant_id`, data.fk_plant_id));
    reviewDispatch(cmsAction(`pk_review_id`, data.pk_review_id));
    console.log(`update from reviewState: `, reviewState);
  };

  // HANDLE CANCEL
  const handleCancel = () => {
    clearFormData();
    setIsUpdate(false);
  };

  // CLEAR FORM
  const clearFormData = () => {
    reviewDispatch(cmsAction(`comment`, ''));
    reviewDispatch(cmsAction(`rating`, ''));
  };

  // FORM CHANGE
  const formChange = (name, value) => {
    reviewDispatch(cmsAction(name, value));
  };

  return (
    <Container>
      <h4>Review input</h4>
      <BoxForm>
        <form
          encType='multipart/form-data'
          className={classes.root}
          onSubmit={(e) => handleSubmit(e)}
          noValidate
          autoComplete='off'
        >
          <TextField
            value={reviewState.rating}
            onChange={(e) => formChange('rating', e.target.value)}
            name='rating'
            id='outlined-basic'
            label='Rating (input 1-5)'
            variant='outlined'
          />
          <TextField
            value={reviewState.comment}
            name='comment'
            onChange={(e) => formChange(`comment`, e.target.value)}
            id='outlined-basic'
            label='Comment'
            variant='outlined'
          />
          <TextField
            value={reviewState.fk_user_id}
            onChange={(e) => formChange('fk_user_id', e.target.value)}
            name='fk_user_id'
            id='outlined-basic'
            label='Input User ID'
            variant='outlined'
          />
          <TextField
            value={reviewState.fk_plant_id}
            name='fk_plant_id'
            onChange={(e) => formChange(`fk_plant_id`, e.target.value)}
            id='outlined-basic'
            label='Input Plant ID'
            variant='outlined'
          />

          <ButtonContainer>
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              type='submit'
              style={{ backgroundColor: `${colors.green}` }}
            >
              {isUpdate ? 'Update' : 'Submit'}
            </Button>
            {isUpdate && (
              <Button
                className={classes.button}
                variant='contained'
                color='primary'
                onClick={() => handleCancel()}
                style={{
                  marginTop: '20px',
                  backgroundColor: `${colors.green}`,
                }}
              >
                Cancel
              </Button>
            )}
          </ButtonContainer>
        </form>
      </BoxForm>
      <br />
      <h3>REVIEW DATA</h3>
      <BoxTable>
        <List>
          <li>REVIEW ID</li>
          <li>COMMENT</li>
          <li>RATING</li>
          <li>USER ID</li>
          <li>PLANT ID</li>
          <li>ACTION</li>
        </List>
        {dataReview.map((data, index) => (
          <ListData key={index}>
            <li>{data.pk_review_id}</li>
            <li>{data.comment}</li>
            <li>{data.rating}</li>
            <li>{data.fk_user_id}</li>
            <li>{data.fk_plant_id}</li>
            {
              <ButtonList>
                <Button
                  onClick={() => handleUpdate(data, index)}
                  className={classes.button}
                  variant='contained'
                  color='primary'
                  type='update'
                  style={{
                    marginBottom: '10px',
                    backgroundColor: `${colors.green}`,
                  }}
                >
                  Update
                </Button>
                <Button
                  onClick={() => handleDelete(data.pk_review_id, index)}
                  className={classes.button}
                  variant='contained'
                  color='primary'
                  type='delete'
                  style={{ backgroundColor: `${colors.green}` }}
                >
                  delete
                </Button>
                <br />
              </ButtonList>
            }
          </ListData>
          // <ul className="map" key={index}>
          //     <li>
          //         NO: <span>{index + 1}</span>
          //     </li>
          //     <li>
          //         comment: <span>{data.comment}</span>
          //     </li>
          //     <li>
          //         PRICE_LIST_ID: <span>{data.rating}</span>
          //     </li>
          //     {
          //         <div>
          //             <button
          //                 onClick={() => handleDelete(data.pk_review_id, index)}
          //             >
          //                 delete
          //             </button>
          //             <button onClick={() => handleUpdate(data, index)}>
          //                 Update
          //             </button>
          //             <br />
          //         </div>
          //     }
          // </ul>
        ))}
      </BoxTable>
    </Container>
  );
};

export default Review;
