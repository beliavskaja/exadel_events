import React from "react";
import { useState } from "react";
import {
  Box,
  FormControl,
  Typography,
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
      <Stack spacing={2}>
        <Pagination
          onChange={changePage}
          page={(skip + limit) / limit}
          count={Math.ceil(total / limit)}
          color="primary"
        />
      </Stack>
      <Box display="flex" alignItems="center">
        <Typography variant="body2" marginRight={1}>
          Page size
        </Typography>
        <Box maxWidth={190}>
          <FormControl fullWidth>
            <Select
              size="small"
              id="select"
              value={limit}
              onChange={handleChange}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}
