import React from "react";
import { useState } from "react";
import { Popover, Typography, Button } from "@mui/material";

export default function NewEventPopover(user) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

return (
<div>
    <Button size="small" variant="contained" onClick={handleClick}>
        Create new Event
    </Button>
    <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
    </Popover>
</div>
)}