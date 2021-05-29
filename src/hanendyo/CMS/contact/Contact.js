import React, { useEffect, useState } from "react";
import {
  Button,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { useContext } from "react";
import { ContextStore } from "../../../context/store/ContextStore";
import { postAPI, cmsAction } from "../../../context/actions/CmsAction";
import axios from "axios";
import {TableListPhone,ContentBox, ButtonList, Container, BoxForm, BoxTable,BoxTablePhone, SpanImage, ButtonContainer, ImageBox, List, ListData} from "../style/Form"
import { colors } from "../../../master/constant/style";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex",
    },
    button: {
      width: "80%",
      margin: "5px 0",
      backgroundColor: "rgb(187, 203, 194)",
      color: "primary",
    },
  },
}));

const Contact = () => {
  // USE STYLES
  const classes = useStyles();

  // USE CONTEXT
  const context = useContext(ContextStore);
  const { contactState, contactDispatch } = context;

  // USE STATE
  const [dataContact, setDataContact] = useState([
    {
      recipient_name: '',
      address: '',
      phone_number: '',
      fk_city_id: ''
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);

  // USE EFFECT
  useEffect(() => {
    getAllDatasAPI();
    console.log(`dataContact: `, dataContact);
  }, []);

  const url = "http://localhost:5000/input/";
  const endPoint = 'contact'
  // GET
  const getAllDatasAPI = async () => {
    await axios
      .get(url + `${endPoint}_get_all_datas`)
      .then((res) => {
        if (res.status === 200) {
          console.log(`GET RES DATA DATA: `, res.data.data);
          setDataContact(res.data.data);
        } else {
          console.log("Error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // POST
  const postAPI = async (form) => {
    const data = new FormData();
    console.log(`formdata:`, form);
    data.append("recipient_name", form.recipient_name);
    data.append("address", form.address);
    data.append("phone_number", form.phone_number);
    data.append("pk_city_id", form.pk_city_id);

    axios
      .post(url + `${endPoint}_input`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        getAllDatasAPI();
        console.log(`Category successfuly created!`);
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
      .put(url + `${endPoint}_update`, data)
      .then((res) => {
        getAllDatasAPI();
        console.log(`Contact successfuly updated!`);
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
      updateAPI(contactState);
      setIsUpdate(false);
    } else {
      postAPI(contactState);
    }

    setDataContact([
      {
        ...dataContact,
        recipient_name: contactState.recipient_name,
        address: contactState.address,
        phone_number: contactState.phone_number,
        fk_city_id: contactState.fk_city_id
      },
    ]);

    clearFormData();

    console.log(`CONTACT STATE SUBMIT: `, contactState);
  };

  // HANDLE DELETE
  const handleDelete = (id, index) => {
    deleteAPI(id, index);
  };

  // HANDLE UPDATE
  const handleUpdate = (data, index) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // console.log(`index update: `, index);
    console.log(`data id update: `, data.pk_contact_id);
    setIsUpdate(true);
    setIndexUpdate(index);
    contactDispatch(cmsAction(`pk_contact_id`, data.pk_contact_id));
    contactDispatch(cmsAction(`recipient_name`, data.recipient_name));
    contactDispatch(cmsAction(`address`, data.address));
    contactDispatch(cmsAction(`phone_number`, data.phone_number));
    contactDispatch(cmsAction(`fk_city_id`, data.fk_city_id));

    // console.log(`update from dataContact: `, dataContact[index]);
    // console.log(`update from dataContact: `, dataContact[index]);
    console.log(`update from contactState: `, contactState);
  };

  // HANDLE CANCEL
  const handleCancel = () => {
    clearFormData();
    setIsUpdate(false);
  };

  // CLEAR FORM
  const clearFormData = () => {
    contactDispatch(cmsAction(`recipient_name`, ""));
    contactDispatch(cmsAction(`address`, ''));
    contactDispatch(cmsAction(`phone_number`, ''));
    contactDispatch(cmsAction(`fk_city_id`, ''));

  };

  // FORM CHANGE
  const formChange = (name, value) => {
    contactDispatch(cmsAction(name, value));
  };

  return (
    <Container>
      <h4>Contact input</h4>
      <BoxForm>
      <form
        encType="multipart/form-data"
        className={classes.root}
        onSubmit={(e) => handleSubmit(e)}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={contactState.recipient_name}
          name="recipient_name"
          onChange={(e) => formChange(`recipient_name`, e.target.value)}
          id="outlined-basic"
          label="Recipient name"
          variant="outlined"
        />
        <TextField
          value={contactState.address}
          name="address"
          onChange={(e) => formChange(`address`, e.target.value)}
          id="outlined-basic"
          label="Address"
          variant="outlined"
        />
        <TextField
          value={contactState.phone_number}
          name="phone_number"
          onChange={(e) => formChange(`phone_number`, e.target.value)}
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
        />
        <TextField
          value={contactState.fk_city_id}
          name="fk_city_id"
          onChange={(e) => formChange(`fk_city_id`, e.target.value)}
          id="outlined-basic"
          label="City ID"
          variant="outlined"
        />
        <ButtonContainer>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          style = {{backgroundColor:`${colors.green}`}}
        >
          {isUpdate ? "Update" : "Submit"}
        </Button>
        {isUpdate && (
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => handleCancel()}
            style = {{marginTop:'20px',backgroundColor:`${colors.green}`}}
          >
            Cancel
          </Button>
        )}
        </ButtonContainer>
        
      </form>
      </BoxForm>
      <br />
        <h4>Contact Data</h4>
      
      <BoxTable>
        <List>
        <li>CONTACT ID</li>
          <li>NAME</li>
          <li>ADDRESS</li>
          <li>PHONE NUMBER</li>
          <li>FK CITY ID</li>
          <li>ACTION</li>
        </List>
      
        {dataContact.map(
          (data, index) => (
            <ListData key={index}>
                <li>{data.pk_contact_id}</li>
                <li>{data.recipient_name}</li>
                <li>{data.address}</li>
                <li>{data.phone_number}</li>
                <li>{data.fk_city_id}</li>
              {
              <ButtonList>
                <Button 
                  onClick={() => handleUpdate(data, index)}
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  type="update"
                  style={{marginBottom:"10px", backgroundColor:`${colors.green}`}}
                  >
                  Update
                </Button>
                <Button 
                  onClick={() => handleDelete(data.pk_contact_id, index)}
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  type="delete"
                  style={{backgroundColor:`${colors.green}`}}
                  >
                  
                  delete
                </Button>
                
              </ButtonList>
              }
            </ListData>
          )
        )}
        {/* {dataContact.map(
          (data, index) => (
            console.log(`data contact map: `, dataContact),
            (
              <ul className='map' key={index}>
                <li>CONTACT ID: <span>{data.pk_contact_id}</span></li>
                <li>RECIPIENT NAME: <span>{data.recipient_name}</span></li>
                <li>ADDRESS: <span>{data.address}</span></li>
                <li>PHONE NUMBER: <span>{data.phone_number}</span></li>
                <li>CITY ID: <span>{data.fk_city_id}</span></li>
                {
                  <div>
                    <button
                      onClick={() => handleDelete(data.pk_contact_id, index)}
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
        )} */}
      </BoxTable>
    </Container>
  );
};

export default Contact;
