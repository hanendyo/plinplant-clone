import React, { useEffect, useState } from "react";
import {
    Button,
    makeStyles,
    TextField,
} from "@material-ui/core";
import { useContext } from "react";
import { ContextStore } from "../../../context/store/ContextStore";
import { cmsAction } from "../../../context/actions/CmsAction";
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

const Stock = () => {
    // USE STYLES
    const classes = useStyles();

    // USE CONTEXT
    const context = useContext(ContextStore);
    const { stockState, stockDispatch } = context;

    // USE STATE
    const [dataStock, setDataStock] = useState([
        {
            seed_stock: "",
            tuber_stock: "",
            young_stock: "",
            mature_stock: "",
        },
    ]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [indexUpdate, setIndexUpdate] = useState(0);

    // USE EFFECT
    useEffect(() => {
        getAllDataAPI();
        console.log(`dataStock: `, dataStock);
    }, []);

    const url = "http://localhost:5000/input/";
    const endPoint = "stock";

    // GET
    const getAllDataAPI = async () => {
        await axios
            .get(url + endPoint + "_get_all_datas")
            .then((res) => {
                if (res.status === 200) {
                    console.log(`GET RES DATA DATA: `, res.data.data);
                    setDataStock(res.data.data);
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
        data.append('seed_stock', form.seed_stock)
        data.append('tuber_stock', form.tuber_stock)
        data.append('young_stock', form.young_stock)
        data.append('mature_stock', form.mature_stock)
        axios
            .post(url + endPoint + `_input`, data, {
                headers: {
                    "fk_plant_breeding_id-type": "multipart/form-data",
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
            .delete(url + endPoint + "_delete/" + id)
            .then((deleted) => {
                console.log(`DELETED: `, deleted);
                getAllDataAPI();
            })
            .catch((err) => err);
    };

    // UPDATE
    const updateAPI = async (data) => {
        axios
            .put(url + endPoint + `_update`, data)
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
                tuber_stock: stockState.tuber_stock,
                young_stock: stockState.young_stock,
                mature_stock: stockState.mature_stock,
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
        stockDispatch(cmsAction(`young_stock`, data.young_stock));
        stockDispatch(cmsAction(`tuber_stock`, data.tuber_stock));
        stockDispatch(cmsAction(`pk_stock_id`, data.pk_stock_id));
        console.log(`update from stockState: `, stockState);
    };

    // HANDLE CANCEL
    const handleCancel = () => {
        clearFormData();
        setIsUpdate(false);
    };

    // CLEAR FORM
    const clearFormData = () => {
        stockDispatch(cmsAction(`seed_stock`, ""));
        stockDispatch(cmsAction(`mature_stock`, ""));
        stockDispatch(cmsAction(`young_stock`, ""));
        stockDispatch(cmsAction(`tuber_stock`, ''));
    };

    // FORM CHANGE
    const formChange = (name, value) => {
        stockDispatch(cmsAction(name, value));
    };

    return (
        <Container>
            <h4>STOCK INPUT</h4>
            <BoxForm>
            <form
                encType="multipart/form-data"
                className={classes.root}
                onSubmit={(e) => handleSubmit(e)}
                noValidate
                autoComplete="off"
            >
                <TextField
                    value={stockState.seed_stock}
                    name="seed_stock"
                    onChange={(e) => formChange(`seed_stock`, e.target.value)}
                    id="outlined-basic"
                    label="Seed stock"
                    variant="outlined"
                />

                <TextField
                    value={stockState.tuber_stock}
                    onChange={(e) => formChange("tuber_stock", e.target.value)}
                    name="tuber_stock"
                    id="outlined-basic"
                    label="Tuber stock"
                    variant="outlined"
                />

                <TextField
                    value={stockState.young_stock}
                    onChange={(e) => formChange("young_stock", e.target.value)}
                    name="young_stock"
                    id="outlined-basic"
                    label="Young stock"
                    variant="outlined"
                />

                <TextField
                    value={stockState.mature_stock}
                    onChange={(e) => formChange("mature_stock", e.target.value)}
                    name="mature_stock"
                    id="outlined-basic"
                    label="Mature stock"
                    variant="outlined"
                />
                <ButtonContainer>
                    <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{backgroundColor:`${colors.green}`}}
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
                <h4>STOCK DATA</h4>
                <BoxTable>
                <List>
                    <li>STOCK ID</li>
                    <li>SEED</li>
                    <li>TUBER</li>
                    <li>YOUNG</li>
                    <li>MATURE</li>
                    <li>ACTION</li>
                </List>
                {dataStock.map(
                    (data, index) => (
                        <ListData key={index}>
                            <li>{data.pk_stock_id}</li>
                            <li>{data.seed_stock}</li>
                            <li>{data.tuber_stock}</li>
                            <li>{data.young_stock}</li>
                            <li>{data.mature_stock}</li>
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
                                onClick={() => handleDelete(data.pk_stock_id, index)}
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                type="delete"
                                style={{backgroundColor:`${colors.green}`}}
                                >
                                
                                delete
                                </Button>
                                <br />
                            </ButtonList>
                            }
                        </ListData>
                        // (
                        //     <ul className="map" key={index}>
                        //         <li>
                        //             NO: <span>{index + 1}</span>
                        //         </li>
                        //         <li>
                        //             STOCK ID: <span>{data.pk_stock_id}</span>
                        //         </li>
                        //         <li>
                        //             SEED STOCK: <span>{data.seed_stock}</span>
                        //         </li>
                        //         <li>
                        //             YOUNG STOCK: <span>{data.young_stock}</span>
                        //         </li>
                        //         <li>
                        //             MATURE STOCK: <span>{data.mature_stock}</span>
                        //         </li>
                              
                        //         {
                        //             <div>
                        //                 <button
                        //                     onClick={() => handleDelete(data.pk_stock_id, index)}
                        //                 >
                        //                     delete
                        //                 </button>
                        //                 <button onClick={() => handleUpdate(data, index)}>
                        //                     Update
                        //                 </button>
                        //                 <br />
                        //             </div>
                        //         }
                        //     </ul>
                        // )
                    )
                )}
            </BoxTable>
        </Container>
    );
};

export default Stock;
