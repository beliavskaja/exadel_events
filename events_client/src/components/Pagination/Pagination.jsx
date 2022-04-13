import React from "react";
import { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Pagination,
} from "@mui/material";

export default function EventsPagination({ fetchEvents, total }) {
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);

  const handleChange = (event) => {
    setLimit(event.target.value);
    setSkip(0);
    fetchEvents(0, event.target.value);
  };

  const changePage = (event, page) => {
    setSkip(limit * (page - 1));
    fetchEvents(limit * (page - 1), limit);
  };

  return (
    <Box
      sx={{ minWidth: 120 }}
      marginTop="20px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack marginTop={3} spacing={2}>
        <Pagination
          onChange={changePage}
          page={(skip + limit) / limit}
          count={Math.ceil(total / limit)}
          color="primary"
        />
      </Stack>
      <Box maxWidth={130}>
        <FormControl fullWidth>
          <InputLabel id="select-label">Page size</InputLabel>
          <Select
            size="small"
            labelId="select-label"
            id="select"
            value={limit}
            label="Page size"
            onChange={handleChange}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
