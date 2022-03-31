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
  Input,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import createEvent from "../../services/api/axios/createEvent.api";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

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
  const [formValue, setFormValue] = useState({
    eventName: "",
    startDate: "",
    endDate: "",
    description: "",
    eventType: "",
  });

  const formSchema = Yup.object().shape({
    eventName: Yup.string().required("Event name is required"),
    // startDate: Yup.string()
    //   .required("Start date is required"),
    // endDate: Yup.string()
    //   .required("End date is required"),
    description: Yup.string().required("Description is required"),
    eventType: Yup.string().required("Event type is required"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(formSchema),
    defaultValues: {
      eventName: "",
      startDate: "",
      endDate: "",
      description: "",
      eventType: "",
    },
  });

  const handelChange = (event) => {
    console.log(event);
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handelDateChange = (date, name) => {
    console.log(formValue);
    setFormValue({
      ...formValue,
      [name]: date.toString(),
    });
  };

  const onSubmit = (event) => {
    console.log(formValue);
    createEvent(formValue);
    reset();
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
            <Stack marginBottom={2} spacing={1} direction="column">
              <TextField
                {...register("eventName", {
                  required: "Please enter event name",
                })}
                required
                name="eventName"
                id="event-name"
                label="Name"
                value={formValue.eventName}
                onChange={handelChange}
              />
              <div>
                {errors?.eventName && (
                  <p
                    style={{
                      height: 10,
                      margin: "5px",
                      fontSize: "10px",
                      color: "red",
                    }}
                  >
                    {errors?.eventName?.message || "Error!"}
                  </p>
                )}
              </div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  {...register("startDate", {
                    required: "Please enter event name",
                  })}
                  name="startDate"
                  label="Start date"
                  value={formValue.startDate}
                  onChange={(date) => handelDateChange(date, "startDate")}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <div>
                {errors?.startDate && (
                  <p
                    style={{
                      height: 10,
                      margin: "5px",
                      fontSize: "10px",
                      color: "red",
                    }}
                  >
                    {errors?.startDate?.message || "Error!"}
                  </p>
                )}
              </div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  {...register("endDate", {
                    required: "Please enter event name",
                  })}
                  name="endDate"
                  label="End date"
                  value={formValue.endDate}
                  minDate={formValue.startDate}
                  onChange={(date) => handelDateChange(date, "endDate")}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <div>
                {errors?.endDate && (
                  <p
                    style={{
                      height: 10,
                      margin: "5px",
                      fontSize: "10px",
                      color: "red",
                    }}
                  >
                    {errors?.endDate?.message || "Error!"}
                  </p>
                )}
              </div>
              <TextField
                {...register("description", {
                  required: "Please enter event name",
                })}
                required
                name="description"
                id="event-description"
                label="Description"
                value={formValue.description}
                onChange={handelChange}
              />
              <div>
                {errors?.description && (
                  <p
                    style={{
                      height: 10,
                      margin: "5px",
                      fontSize: "10px",
                      color: "red",
                    }}
                  >
                    {errors?.description?.message || "Error!"}
                  </p>
                )}
              </div>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  {...register("eventType", {
                    required: "Please enter event name",
                  })}
                  required
                  name="eventType"
                  id="event-type"
                  value={formValue.eventType}
                  label="Type"
                  onChange={(event) => handelChange(event)}
                >
                  <MenuItem value={"Online"}>Online</MenuItem>
                  <MenuItem value={"Offline"}>Offline</MenuItem>
                </Select>
              </FormControl>
              <div>
                {errors?.eventType && (
                  <p
                    style={{
                      height: 10,
                      margin: "5px",
                      fontSize: "10px",
                      color: "red",
                    }}
                  >
                    {errors?.eventType?.message || "Error!"}
                  </p>
                )}
              </div>
            </Stack>
            <Input type="submit" value={"Save"}></Input>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
