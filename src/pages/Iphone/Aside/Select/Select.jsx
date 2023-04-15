import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const FilterSelect = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem className='catalog__aside-item' value={'default'}>По умолчанию</MenuItem>
                    <MenuItem className='catalog__aside-item' value={'desc'}>По убыванию</MenuItem>
                    <MenuItem className='catalog__aside-item' value={'asc'}>По возрастанию</MenuItem>
                    <MenuItem className='catalog__aside-item' value={'abc'}>По алфавиту</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default FilterSelect;