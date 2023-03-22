import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch, useSelector} from "react-redux";
import {changeBrand} from "../../redux/reducers/products";
import {useNavigate} from "react-router-dom";


const brands = ['apple', 'samsung', 'xiaomi', 'honor', 'huawei']

const SelectBrand = () => {

    const navigate = useNavigate()

    const { filter} = useSelector(store => store.persistedReducer.products)

    const dispatch = useDispatch()

    const [brand, setBrand] = useState(filter.brand || '')

    const handleChange = (e) => {
        setBrand(e.target.value)
    };

    useEffect(() => {
        dispatch(changeBrand(brand))
    },[brand])



    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Бренд</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={brand}
                    onChange={handleChange}
                    onClick={() => navigate('/iphone')}
                >
                    {
                        brands.map((brand) => (
                            <MenuItem key={brand} value={brand}>{brand}</MenuItem>
                        ))
                    }
                    <MenuItem  value=''>no</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default SelectBrand;