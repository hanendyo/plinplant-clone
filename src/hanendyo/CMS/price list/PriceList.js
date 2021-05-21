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
import "../CMS.css";

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

const PriceList = () => {
    // USE STYLES
    const classes = useStyles();

    // USE CONTEXT
    const context = useContext(ContextStore);
    const { priceListState, priceListDispatch } = context;

    // USE STATE
    const [priceList, setPriceList] = useState([
        {
            seed_price: "",
            tuber_price: "",
            young_price: "",
            mature_price: "",
            fk_plant_breeding_id: "",
        },
    ]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [indexUpdate, setIndexUpdate] = useState(0);
    const [fileImage, setFileImage] = useState(null);

    // USE EFFECT
    useEffect(() => {
        getAllDataAPI();
        console.log(`priceList: `, priceList);
    }, []);

    const url = "http://localhost:5000/input/";
    const endPoint = "article";

    // GET
    const getAllDataAPI = async () => {
        await axios
            .get(url + endPoint + "_get_all_datas")
            .then((res) => {
                if (res.status === 200) {
                    console.log(`GET RES DATA DATA: `, res.data.data);
                    setPriceList(res.data.data);
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
        data.append("seed_price", form.seed_price);
        data.append("mature_price", form.mature_price);
        data.append("fk_plant_breeding_id", form.fk_plant_breeding_id);
        data.append("young_price", form.young_price);
        data.append("tuber_price", form.tuber_price);

        axios
            .post(url + endPoint + `_input`, data, {
                headers: {
                    "fk_plant_breeding_id-type": "multipart/form-data",
                },
            })
            .then((res) => {
                getAllDataAPI();
                console.log(`Price list successfuly created!`);
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
    const updateAPI = async (form) => {
        console.log(`DATA UPDATE: `, data);
        const data = new FormData();
        console.log(`formdata:`, form);
        data.append("seed_price", form.seed_price);
        data.append("mature_price", form.mature_price);
        data.append("fk_plant_breeding_id", form.fk_plant_breeding_id);
        data.append("young_price", form.young_price);
        data.append("tuber_price", form.tuber_price);

        axios
            .put(url + endPoint + `_update`, data, {
                headers: {
                    "fk_plant_breeding_id-type": "multipart/form-data",
                },
            })
            .then((res) => {
                getAllDataAPI();
                console.log(`Article successfuly updated!`);
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
            updateAPI(priceListState);
            setIsUpdate(false);
        } else {
            postAPI(priceListState);
        }

        setPriceList([
            {
                ...priceList,
                seed_price: priceListState.seed_price,
                image: priceListState.image,
                young_price: priceListState.young_price,
                mature_price: priceListState.mature_price,
                fk_plant_breeding_id: priceListState.fk_plant_breeding_id,
            },
        ]);

        clearFormData();

        console.log(`ARTICLE STATE SUBMIT: `, priceListState);
    };

    // HANDLE DELETE
    const handleDelete = (id, index) => {
        deleleAPI(id, index);
    };

    // HANDLE UPDATE
    const handleUpdate = (data, index) => {
        setIsUpdate(true);
        setIndexUpdate(index);
        priceListDispatch(cmsAction(`seed_price`, data.seed_price));
        priceListDispatch(cmsAction(`mature_price`, data.mature_price));
        priceListDispatch(cmsAction(`fk_plant_breeding_id`, data.fk_plant_breeding_id));
        priceListDispatch(cmsAction(`young_price`, data.young_price));
        priceListDispatch(cmsAction(`tuber_price`, data.tuber_price));
        priceListDispatch(cmsAction(`pk_article_id`, data.pk_article_id));
        console.log(`update from priceListState: `, priceListState);
    };

    // HANDLE CANCEL
    const handleCancel = () => {
        clearFormData();
        setIsUpdate(false);
    };

    // CLEAR FORM
    const clearFormData = () => {
        priceListDispatch(cmsAction(`seed_price`, ""));
        priceListDispatch(cmsAction(`mature_price`, ""));
        priceListDispatch(cmsAction(`fk_plant_breeding_id`, ""));
        priceListDispatch(cmsAction(`young_price`, ""));
        priceListDispatch(cmsAction(`tuber_price`, null));
    };

    // FORM CHANGE
    const formChange = (name, value) => {
        priceListDispatch(cmsAction(name, value));
    };

    const formImage = (e) => {
        const img = e.target.files[0];
        priceListDispatch(cmsAction("tuber_price", img));
        setFileImage(URL.createObjectURL(img));
    };

    return (
        <div className="article cmsForm">
            <h3>Price list input</h3>
            <form
                encType="multipart/form-data"
                className={classes.root}
                onSubmit={(e) => handleSubmit(e)}
                noValidate
                autoComplete="off"
            >
                <TextField
                    value={priceListState.seed_price}
                    name="seed_price"
                    onChange={(e) => formChange(`seed_price`, e.target.value)}
                    id="outlined-basic"
                    label="seed_price"
                    variant="outlined"
                />

                <TextField
                    value={priceListState.tuber_price}
                    onChange={(e) => formChange("tuber_price", e.target.value)}
                    name="tuber_price"
                    id="outlined-basic"
                    label="Created at"
                    variant="outlined"
                />

                <TextField
                    value={priceListState.young_price}
                    onChange={(e) => formChange("young_price", e.target.value)}
                    name="young_price"
                    id="outlined-basic"
                    label="Created at"
                    variant="outlined"
                />

                <TextField
                    value={priceListState.mature_price}
                    onChange={(e) => formChange("mature_price", e.target.value)}
                    name="mature_price"
                    id="outlined-basic"
                    label="mature_price"
                    variant="outlined"
                />

                <TextField
                    value={priceListState.fk_plant_breeding_id}
                    onChange={(e) => formChange("fk_plant_breeding_id", e.target.value)}
                    name="fk_plant_breeding_id"
                    id="outlined-multiline-static"
                    label="fk_plant_breeding_id"
                    multiline
                    rows={10}
                    variant="outlined"
                />

                <TextField
                    value={priceListState.fk_stock_id}
                    onChange={(e) => formChange("fk_stock_id", e.target.value)}
                    name="fk_stock_id"
                    id="outlined-multiline-static"
                    label="fk_stock_id"
                    multiline
                    rows={10}
                    variant="outlined"
                />

                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    {isUpdate ? "Update" : "Submit"}
                </Button>
                {isUpdate && (
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={() => handleCancel()}
                    >
                        Cancel
                    </Button>
                )}
            </form>
            <div>
                <br />
                <h3>Result: </h3>
                {priceList.map(
                    (data, index) => (
                        console.log(`data article map: `, priceList),
                        (
                            <ul className="map" key={index}>
                                <li>
                                    NO: <span>{index + 1}</span>
                                </li>
                                <li>
                                    ARTICLE ID: <span>{data.pk_article_id}</span>
                                </li>
                                {/* <li>
                  IMAGE: <span>{data.image}</span>'
                </li> */}
                                <li>
                                    seed_price: <span>{data.seed_price}</span>
                                </li>
                                <li>
                                    CREATED AT: <span>{data.young_price}</span>
                                </li>
                                <li>
                                    mature_price: <span>{data.mature_price}</span>
                                </li>
                                <li>
                                    fk_plant_breeding_id: <span>{data.fk_plant_breeding_id}</span>
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
        </div>
    );
};

export default PriceList;
