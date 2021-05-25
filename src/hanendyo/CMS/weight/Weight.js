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

const Contact = () => {
  // USE STYLES
  const classes = useStyles();

  // USE CONTEXT
  const context = useContext(ContextStore);
  const { weightState, weightDispatch } = context;

  // USE STATE
  const [dataWeight, setDataWeight] = useState([
    {
      weight: '',
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);

  // USE EFFECT
  useEffect(() => {
    getAllDatasAPI();
    console.log(`dataWeight: `, dataWeight);
  }, []);

  const url = 'http://localhost:5000/input/';
  const endPoint = 'weight';
  // GET
  const getAllDatasAPI = async () => {
    await axios
      .get(url + `${endPoint}_get_all_datas`)
      .then((res) => {
        if (res.status === 200) {
          console.log(`GET RES DATA DATA: `, res.data.data);
          setDataWeight(res.data.data);
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
      .post(url + `${endPoint}_input`, data, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        getAllDatasAPI();
        console.log(`Weight successfuly created!`);
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
      .delete(url + `${endPoint}_delete/` + id)
      .then((deleted) => {
        console.log(`DELETED: `, deleted);
        getAllDatasAPI();
      })
      .catch((err) => err);
  };

  // UPDATE
  const updateAPI = async (data) => {
    axios
      .put(url + `${endPoint}_update`, data, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        getAllDatasAPI();
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

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      updateAPI(weightState);
      setIsUpdate(false);
    } else {
      postAPI(weightState);
    }

    setDataWeight([
      {
        ...dataWeight,
        type: weightState.type,
      },
    ]);

    clearFormData();

    console.log(`WEIGHT STATE SUBMIT: `, weightState);
  };

  // HANDLE DELETE
  const handleDelete = (id, index) => {
    deleteAPI(id, index);
  };

  // HANDLE UPDATE
  const handleUpdate = (data, index) => {
    setIsUpdate(true);
    setIndexUpdate(index);
    weightDispatch(cmsAction(`type`, data.type));

    console.log(`update from weightState: `, weightState);
  };

  // HANDLE CANCEL
  const handleCancel = () => {
    clearFormData();
    setIsUpdate(false);
  };

  // CLEAR FORM
  const clearFormData = () => {
    weightDispatch(cmsAction(`type`, ''));
  };

  // FORM CHANGE
  const formChange = (name, value) => {
    weightDispatch(cmsAction(name, value));
  };

  return (
    <Container>
      <h4>Weight input</h4>
      <BoxInput>
        <form
          encType='multipart/form-data'
          className={classes.root}
          onSubmit={(e) => handleSubmit(e)}
          noValidate
          autoComplete='off'
        >
          <TextField
            value={weightState.type}
            name='type'
            onChange={(e) => formChange(`type`, e.target.value)}
            id='outlined-basic'
            label='Weight Type'
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
      <h4>Weight Data</h4>
      <div>
        {dataWeight.map(
          (data, index) => (
            console.log(`data weight map: `, dataWeight),
            (
              <ul className='map' key={index}>
                <li>
                  WEIGHT ID: <span>{data.pk_weight_id}</span>
                </li>
                <li>
                  WEIGHT: <span>{data.weight}</span>
                </li>
                {
                  <div>
                    <button
                      onClick={() => handleDelete(data.pk_weight_id, index)}
                    >
                      delete
                    </button>
                    <button onClick={() => handleUpdate(data, index)}>
                      Update
                    </button>
                    <br />
                  </div>
                }
                <br />
              </ul>
            )
          )
        )}
      </div>
    </Container>
  );
};

export default Contact;
