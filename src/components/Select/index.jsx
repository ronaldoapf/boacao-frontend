import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Popover from '@material-ui/core/Popover';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { Input } from '../Input'
import { SelectContainer, OptionsContainer } from './style'
import withField from '../Field/withField';

const Select = ({
  name,
  value,
  label,
  options,
  disabled,
  setFieldValue,
}) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleOpen = (ev) => {
    if(disabled) return
    setAnchorEl(ev.currentTarget)
  }
  const handleClose = () => setAnchorEl(null)

  const open = Boolean(anchorEl)

  const handleChange = (option) => {
    setFieldValue(name, option.value)
  }

  const valueText = options.find(option => option.value === value)?.label || null

  const onOptionSelection = option => () => {
    handleChange(option)
    handleClose()
  }

  return (
    <> 
      <SelectContainer onClick={handleOpen}>
        <Input
          readOnly
          isSelect
          disabled={disabled}
          label={label}
          value={valueText}
          icon={ArrowDropDownIcon}
        />
      </SelectContainer>
      <Popover
        id={open? 'options-box' : null}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 16,
          horizontal: 'left',
        }}
      >
        <OptionsContainer minWidth={anchorEl?.offsetWidth}>
          <List aria-label={`options for select ${name}`}>
            {options.map((option) => (
              <ListItem
                button
                dense
                key={option.value}
                onClick={onOptionSelection(option)}
                selected={value === option.value}
              >
                <ListItemText primary={option.label} />
              </ListItem>
            ))}
        </List>
        </OptionsContainer>
      </Popover>
    </>
  )
}

Select.propTypes ={
  value: PropTypes.any,
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  setFieldValue: PropTypes.func,
}

export default withField(memo(Select));