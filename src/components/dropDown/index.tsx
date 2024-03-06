import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import * as React from 'react'

interface IDropDownProps {
  valuesToDo: string[]
  onChange: (value: string) => void
}

export default function DropDown({
  valuesToDo,
  onChange,
}: IDropDownProps): React.JSX.Element {
  return (
    <Box sx={{ 'minWidth': 280 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={valuesToDo[0]}
          label="Age"
          onChange={(newValue): void => {
            onChange(newValue.target.value)
          }}
        >
          {valuesToDo.map((value, index) => {
            return (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  )
}
