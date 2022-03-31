import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Modal,
  TextField,
  Button,
  Select,
  MenuItem,
  Typography,
  IconButton,
  Stack,
  FormControl,
  InputLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import createEvent from "../../services/api/axios/createEvent.api";

const style = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function NewEventModal() {
  const [open, setOpen] = useState(false);
  const [formValue, setFormValue] = useState({
    eventName: "",
    startDate: new Date(),
    endDate: new Date(),
    description: "",
    eventType: "",
  });

  const { handleSubmit, reset } = useForm({
    defaultValues: {
      eventName: "",
      startDate: new Date(),
      endDate: new Date(),
      description: "",
      eventType: "",
    },
  });

  const handelChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handelDateChange = (date, name) => {
    setFormValue({
      ...formValue,
      [name]: date,
    });
  };

  const onSubmit = (event) => {
    createEvent(formValue);
    reset();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormValue({});
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Create new Event
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            paddingLeft="10px"
          >
            <Typography variant="h6">Create new event</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack marginBottom={2} spacing={2} direction="column">
              <TextField
                required
                name="eventName"
                id="event-name"
                label="Name"
                value={formValue.eventName}
                onChange={handelChange}
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  inputProps={{
                    required: "required",
                  }}
                  name="startDate"
                  label="Start date *"
                  value={formValue.startDate}
                  onChange={(date) => handelDateChange(date, "startDate")}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  inputProps={{
                    required: "required",
                  }}
                  name="endDate"
                  label="End date *"
                  value={formValue.endDate}
                  minDate={formValue.startDate}
                  onChange={(date) => handelDateChange(date, "endDate")}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <TextField
                required
                name="description"
                id="event-description"
                label="Description"
                value={formValue.description}
                onChange={handelChange}
              />
              <FormControl fullWidth>
                <InputLabel id="eventType-select-label">Type *</InputLabel>
                <Select
                  inputProps={{
                    required: "required",
                  }}
                  name="eventType"
                  id="event-type"
                  value={formValue.eventType}
                  label="Type *"
                  onChange={(event) => handelChange(event)}
                >
                  <MenuItem value={"Online"}>Online</MenuItem>
                  <MenuItem value={"Offline"}>Offline</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Box display="flex" justifyContent="center">
              <Button variant="contained" type="submit">
                Save
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
