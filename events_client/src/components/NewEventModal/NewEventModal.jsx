import React from "react";
import { useState } from "react";
// import { useForm } from "react-hook-form";
import { Box, Modal, TextField, Button, Select, MenuItem, Typography, IconButton, Stack, FormControl, InputLabel } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import createEvent from '../../services/api/axios/createEvent.api';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';

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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [eventName, setEventName] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [description, setDescription] = useState("");
  const [eventType, setEventType] = useState("");
  const [formValue, setFormValue] = useState({
    eventName,
    startDate,
    endDate,
    description,
    eventType
  });

//   const formSchema = Yup.object().shape({
//     eventName: Yup.string()
//       .required("Event name is required"),
//     startDate: Yup.string()
//       .required("Start date is required"),
//     endDate: Yup.string()
//       .required("End date is required"),
//     description: Yup.string()
//       .required("Description is required"),
//     type: Yup.string()
//       .required("Type is required"),
//   });

//   const {
//     register,
//     formState: {
//         errors,
//         isValid
//     },
//     reset,
// } = useForm({
//     mode: "onBlur",
//     resolver: yupResolver(formSchema)
// });

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  };

//   const handleStartDateChange = (event) => {
//   setFormValue({
//     ...formValue,
//     [event.target.name]: event.target.value
//   });
//   console.log("b", formValue)
// };

// const handleEndDateChange = (event) => {
//   setFormValue({
//     ...formValue,
//     [event.target.name]: event.target.value
//   });
//   console.log("c", formValue)
// };

const handleDescriptionChange = (event) => {
  setDescription(event.target.value);
  setFormValue({
    ...formValue,
    [event.target.name]: event.target.value
  });
}; 

const handleEventTypeChange = (event) => {
  setEventType(event.target.value);
  setFormValue({
    ...formValue,
    [event.target.name]: event.target.value
  });
}; 

const handleSubmit = (event) => {
    createEvent(formValue);
    event.preventDefault();
    // reset();
}


  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Create new Event
      </Button>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display="flex" >
            <Typography variant="h6">Create new event</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Stack spacing={2} direction="column">
            <TextField
            // {...register('eventName')}
              required
              id="event-name"
              label="Name"
              name="eventName"
              value={eventName}
              onChange={handleEventNameChange}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
              // {...register('startDate')}
                label="Start date"
                name="startDate"
                value={startDate}
                onChange={(newStartDate) => {
                  setStartDate(newStartDate);
                  setFormValue({
                    ...formValue, 
                    startDate: newStartDate
                  });
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
              // {...register('endDate')}
                label="End date"
                name="endDate"
                value={endDate}
                minDate={startDate}
                onChange={(newEndDate) => {
                  setEndDate(newEndDate);
                  setFormValue({
                    ...formValue,
                    endDate: newEndDate
                  });
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField
            // {...register('description')}
              required
              id="event-description"
              label="Description"
              name="description"
              value={description}
              onChange={handleDescriptionChange}
            />
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
              // {...register('type')}
                // inputProps={{
                //   required: "required"
                // }}
                id="event-type"
                name="eventType"
                value={eventType}
                label="Type"
                onChange={handleEventTypeChange}
              >
                <MenuItem value={"Online"}>Online</MenuItem>
                <MenuItem value={"Offline"}>Offline</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Button onClick={handleSubmit} variant="outlined">Save</Button>
        </Box>
      </Modal>
    </div>
  );
}
