import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Link,
    makeStyles,
    TextField,
    Typography,
} from "@material-ui/core";
import { useContext } from "react";
import { ContextStore } from "../../../context/store/ContextStore";
import { postAPI, cmsAction } from "../../../context/actions/CmsAction";
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

const Plant = () => {
    // USE STYLES
    const classes = useStyles();

    // USE CONTEXT
    const context = useContext(ContextStore);
    const { plantState, plantDispatch } = context;

    // USE STATE
    const [dataArticle, setDataArticle] = useState([
        {
            plant_name: '',
            plant_image: '',
            plant_origin: '',
            plant_qualities: '',
            plant_use: '',
            days_to_sprout: '',
            matures_in: '',
            growth_type: '',
            fk_category_id: 0,
            fk_review_id: 0
        },
    ]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [indexUpdate, setIndexUpdate] = useState(0);

    // USE EFFECT
    useEffect(() => {
        getAllDatasAPI();
        console.log(`dataArticle: `, dataArticle);
    }, []);

    const url = "http://localhost:5000/input/";
    const endPoint = 'plant'
    // GET
    const getAllDatasAPI = async () => {
        await axios
            .get(url + `${endPoint}_get_all_datas`)
            .then((res) => {
                if (res.status === 200) {
                    console.log(`GET RES DATA DATA: `, res.data.data);
                    setDataArticle(res.data.data);
                } else {
                    console.log("Error");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // POST
    const postAPI = async (data) => {
        await axios
            .post(url + `${endPoint}_input`, data)
            .then((res) => {
                console.log(res);
                getAllDatasAPI();
                console.log(`get`);
            })
            .catch((err) => {
                console.log(err);
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
        // console.log(`ID ID ID: `, index);
        console.log(`DATA UPDATE: `, data);
        await axios
            .put(url + `${endPoint}_update`, data)
            .then((res) => {
                console.log(res);
                setIsUpdate(false);
                getAllDatasAPI();
                console.log(`update!`);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // HANDLE SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isUpdate) {
            updateAPI(plantState);
            setIsUpdate(false);
        } else {
            postAPI(plantState);
        }

        setDataArticle([
            {
                ...dataArticle,
                plant_name: plantState.plant_name,
                plant_image: plantState.plant_image,
                plant_origin: plantState.plant_origin,
                plant_qualities: plantState.plant_qualities,
                plant_use: plantState.plant_use,
                days_to_sprout: plantState.days_to_sprout,
                matures_in: plantState.matures_in,
                growth_type: plantState.growth_type,
                fk_category_id: plantState.fk_category_id,
                fk_review_id: plantState.fk_review_id
            },
        ]);

        clearFormData();

        console.log(`PLANT STATE SUBMIT: `, plantState);
        // console.log(`ARTICLE STATE AUTHOR: `, plantState.author);
        // console.log(`DATA ARTICLE SUBMIT: `, dataArticle);
        // console.log(`DATA ARTICLE AUTHOR: `, dataArticle.author);
        // console.log(`UPDATED ARTICLE STATE: `, plantState);
        // console.log(`UPDATED ARTICLE STATE AUTHOR: `, plantState.author);
    };

    // HANDLE DELETE
    const handleDelete = (id, index) => {
        deleteAPI(id, index);
    };

    // HANDLE UPDATE
    const handleUpdate = (data, index) => {
        // console.log(`index update: `, index);
        // console.log(`data id update: `, data.pk_article_id);
        setIsUpdate(true);
        setIndexUpdate(index);
        plantDispatch(cmsAction(`plant_name`, data.plant_name));
        plantDispatch(cmsAction(`plant_image`, data.plant_image));
        plantDispatch(cmsAction(`plant_origin`, data.plant_origin));
        plantDispatch(cmsAction(`plant_qualities`, data.plant_qualities));
        plantDispatch(cmsAction(`plant_use`, data.plant_use));
        plantDispatch(cmsAction(`days_to_sprout`, data.days_to_sprout));
        plantDispatch(cmsAction(`matures_in`, data.matures_in));
        plantDispatch(cmsAction(`growth_type`, data.growth_type));
        plantDispatch(cmsAction(`fk_category_id`, data.fk_category_id));
        plantDispatch(cmsAction(`fk_review_id`, data.fk_review_id));


        // console.log(`update from dataArticle: `, dataArticle[index]);
        // console.log(`update from dataArticle: `, dataArticle[index]);
        console.log(`update from plantState: `, plantState);
    };

    // HANDLE CANCEL
    const handleCancel = () => {
        clearFormData();
        setIsUpdate(false);
    };

    // CLEAR FORM
    const clearFormData = () => {
        plantDispatch(cmsAction(`plant_name`, ''));
        plantDispatch(cmsAction(`plant_image`, ''));
        plantDispatch(cmsAction(`plant_origin`, ''));
        plantDispatch(cmsAction(`plant_qualities`, ''));
        plantDispatch(cmsAction(`plant_use`, ''));
        plantDispatch(cmsAction(`days_to_sprout`, ''));
        plantDispatch(cmsAction(`matures_in`, ''));
        plantDispatch(cmsAction(`growth_type`, ''));
        plantDispatch(cmsAction(`fk_category_id`, ''));
        plantDispatch(cmsAction(`fk_review_id`, ''));

    };

    // FORM CHANGE
    const formChange = (name, value) => {
        plantDispatch(cmsAction(name, value));
    };

    return (
        <div className="cmsForm">
            <h3>Plant input</h3>
            <form
                enctype="multipart/form-data"
                className={classes.root}
                onSubmit={(e) => handleSubmit(e)}
                noValidate
                autoComplete="off"
            >
                <TextField
                    value={plantState.plant_name}
                    name="plant_name"
                    onChange={(e) => formChange(`plant_name`, e.target.value)}
                    id="outlined-basic"
                    label="Plant name"
                    variant="outlined"
                />
                <p>Plant Image</p>
                <input
                    label='Plant image'
                    id="image-upload"
                    name="image-upload"
                    type="file"
                // value={articleState.image}
                // onChange={(e) => console.log(`image: `, e.target.files[0].name)}
                // onChange={(e) => formChange(`image`, e.target.value)}
                // onChan
                />
                <TextField
                    value={plantState.plant_origin}
                    name="plant_origin"
                    onChange={(e) => formChange(`plant_origin`, e.target.value)}
                    id="outlined-basic"
                    label="Plant origin"
                    variant="outlined"
                />
                <TextField
                    value={plantState.plant_qualities}
                    name="plant_qualities"
                    onChange={(e) => formChange(`plant_qualities`, e.target.value)}
                    id="outlined-basic"
                    label="Plant qualities"
                    variant="outlined"
                />
                <TextField
                    value={plantState.plant_use}
                    name="plant_use"
                    onChange={(e) => formChange(`plant_use`, e.target.value)}
                    id="outlined-basic"
                    label="Plant use"
                    variant="outlined"
                />
                <TextField
                    value={plantState.days_to_sprout}
                    name="days_to_sprout"
                    onChange={(e) => formChange(`days_to_sprout`, e.target.value)}
                    id="outlined-basic"
                    label="Days to sprout"
                    variant="outlined"
                />
                <TextField
                    value={plantState.matures_in}
                    name="matures_in"
                    onChange={(e) => formChange(`matures_in`, e.target.value)}
                    id="outlined-basic"
                    label="Matures in"
                    variant="outlined"
                />
                <TextField
                    value={plantState.growth_type}
                    name="growth_type"
                    onChange={(e) => formChange(`growth_type`, e.target.value)}
                    id="outlined-basic"
                    label="Growth in"
                    variant="outlined"
                />
                <TextField
                    value={plantState.fk_category_id}
                    name="fk_category_id"
                    onChange={(e) => formChange(`fk_category_id`, e.target.value)}
                    id="outlined-basic"
                    label="Category_id"
                    variant="outlined"
                />
                <TextField
                    value={plantState.fk_review_id}
                    name="fk_review_id"
                    onChange={(e) => formChange(`fk_review_id`, e.target.value)}
                    id="outlined-basic"
                    label="Review_id"
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
                {dataArticle.map(
                    (data, index) => (
                        console.log(`data article map: `, dataArticle),
                        (
                            <ul className='map' key={index}>
                                <li>PLANT ID: <span>{data.pk_plant_id}</span></li>
                                <li>PLANT NAME: <span>{data.plant_name}</span></li>
                                <li>PLANT ORIGIN: <span>{data.plant_origin}</span></li>
                                <li>PLANT IMAGE: <span>{data.plant_image}</span></li>
                                <li>PLANT QUALITIES: <span>{data.plant_qualities}</span></li>
                                <li>PLANT USE: <span>{data.plant_use}</span></li>
                                <li>DAYS TO SPROUT: <span>{data.days_to_sprout}</span></li>
                                <li>MATURES IN: <span>{data.matures_in}</span></li>
                                <li>GROWTH IN: <span>{data.growth_type}</span></li>
                                <li>CATEGORY_ID: <span>{data.fk_category_id}</span></li>
                                <li>REVIEW_ID: <span>{data.fk_review_id}</span></li>
                                {
                                    <div>
                                        <button
                                            onClick={() => handleDelete(data.pk_plant_id, index)}
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
        </div>
    );
};

export default Plant;
