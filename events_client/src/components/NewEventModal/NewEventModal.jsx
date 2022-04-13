import React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
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
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import dayjs from "dayjs";
import { parseISO } from "date-fns";
import countries from "i18n-iso-countries";
import enLocate from "i18n-iso-countries/langs/en.json";

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

  const today = new Date();
  countries.registerLocale(enLocate);
  const countryObj = countries.getNames("en", { select: "official" });
  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });
  const formSchema = Yup.object().shape({
    eventName: Yup.string()
      .min(3, "Event name length should be at least 3 characters")
      .max(50, "Event name cannot exceed more than 50 characters")
      .required("Event name is required"),
    startDate: Yup.date()
      .min(today, "Date cannot be in the past")
      .required("Start date is required"),
    endDate: Yup.date()
      .when(
        "startDate",
        (startDate, formSchema) => startDate && formSchema.min(startDate),
        "End date cannot be less than start date"
      )
      .required("End date is required"),
    description: Yup.string()
      .min(5, "Description length should be at least 5 characters")
      .max(300, "Description cannot exceed more than 300 characters")
      .required("Description is required"),
    eventType: Yup.string().required("Event type is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: async (data, context, options) => {
      return yupResolver(formSchema)(data, context, options);
    },
    defaultValues: {
      eventName: "",
      startDate: {},
      endDate: {},
      description: "",
      eventType: "",
      location: "",
    },
  });

  const onSubmit = (data) => {
    createEvent(data);
    reset();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    reset();
    setOpen(false);
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
                required
                name="eventName"
                id="event-name"
                label="Name"
                {...register("eventName")}
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
                <Controller
                  name="startDate"
                  control={control}
                  defaultValue={null}
                  render={({
                    field: { onChange, value },
                    fieldState: { error, invalid },
                  }) => (
                    <DatePicker
                      inputProps={{
                        required: "required",
                      }}
                      name="startDate"
                      label="Start date *"
                      value={value}
                      onChange={(value) => {
                        onChange(dayjs(value).format("YYYY-MM-DD"));
                        console.log(getValues("startDate"));
                      }}
                      renderInput={(params) => (
                        <TextField
                          helperText={invalid ? error.massage : null}
                          {...params}
                          error={invalid}
                        />
                      )}
                    />
                  )}
                />
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
                <Controller
                  name="endDate"
                  control={control}
                  defaultValue={parseISO(getValues("startDate"))}
                  render={({
                    field: { onChange, value },
                    fieldState: { error, invalid },
                  }) => (
                    <DatePicker
                      inputProps={{
                        required: "required",
                      }}
                      name="endDate"
                      label="End date *"
                      value={value}
                      onChange={(value) =>
                        onChange(dayjs(value).format("YYYY-MM-DD"))
                      }
                      renderInput={(params) => (
                        <TextField
                          helperText={invalid ? error.massage : null}
                          {...params}
                          error={invalid}
                        />
                      )}
                    />
                  )}
                />
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
              </LocalizationProvider>
              <TextField
                required
                name="description"
                id="event-description"
                label="Description"
                {...register("description")}
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
                <InputLabel id="eventType-select-label">Type *</InputLabel>
                <Controller
                  name="eventType"
                  control={control}
                  defaultValue={null}
                  render={({
                    field: { onChange, value },
                    fieldState: { error, invalid },
                  }) => (
                    <Select
                      inputProps={{
                        required: "required",
                      }}
                      name="eventType"
                      id="event-type"
                      label="Type *"
                      value={value}
                      onChange={(value) => onChange(value)}
                      renderInput={(params) => (
                        <TextField
                          helperText={invalid ? error.massage : null}
                          {...params}
                          error={invalid}
                        />
                      )}
                    >
                      <MenuItem value={"Online"}>Online</MenuItem>
                      <MenuItem value={"Offline"}>Offline</MenuItem>
                    </Select>
                  )}
                />
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
              {watch("eventType") === "Offline" && (
                <FormControl fullWidth>
                  <InputLabel id="location-select-label">Location *</InputLabel>
                  <Controller
                    name="location"
                    control={control}
                    defaultValue={null}
                    render={({
                      field: { onChange, value },
                      fieldState: { error, invalid },
                    }) => (
                      <Select
                        inputProps={{
                          required: "required",
                        }}
                        name="location"
                        id="location"
                        label="Location *"
                        value={value}
                        onChange={(value) => onChange(value)}
                        // renderInput={(params) => (
                        //   <TextField
                        //     helperText={invalid ? error.massage : null}
                        //     {...params}
                        //     error={invalid}
                        //   />
                        // )}
                      >
                        {!!countryArr?.length &&
                          countryArr.map(({ label, value }) => (
                            <MenuItem key={value} value={label}>
                              {label}
                            </MenuItem>
                          ))}
                      </Select>
                    )}
                  />
                </FormControl>
              )}
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
