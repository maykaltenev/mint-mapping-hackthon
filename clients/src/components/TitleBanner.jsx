import React, { useContext } from 'react'
import { Autocomplete, TextField, Stack, Typography, Slider } from "@mui/material";
import {selectOptions} from "../assets/options.js"
import { UserContext } from '../context/UserContext.js';

export default function TitleBanner({category, preSelected}) {
    const {percentage, setPercentage} = useContext(UserContext)

    function handleSlider(event, newValue) {
        setPercentage(newValue)
    }

  return (
    <Stack direction="row" sx={{width: '100%'}} spacing={4} alignItems="center">
        <Autocomplete
            sx={{width: '55%', my: 2}}
            multiple
            id="tags-standard"
            options={selectOptions}
            getOptionLabel={(option) => option}
            defaultValue={preSelected}
            renderInput={(params) => (
            <TextField
                {...params}
                label={category} />
            )} />

        <Stack spacing={2} direction="row" sx={{ mb: 1, width: '30%' }} alignItems="center">
            <Typography variant="overline">Match</Typography>
            <Slider defaultValue={100}
                    step={10}
     
                    valueLabelDisplay="on"
                    value={percentage} onChange={handleSlider} />
            <Typography variant="overline">Percentage</Typography>
        </Stack>
      </Stack>
  )
}
