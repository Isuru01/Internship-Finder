import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  Box,
  TextField,
  Autocomplete,
  Chip,
  Select,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";
import Editor from "../Editor";
import { createJob } from "../../api/jobs.api.mjs";
import CloudinaryUploadWidget from "../CloudinaryUploadWidget";

const VacancyForm = () => {
  const [job, setJob] = useState({
    title: "",
    company: "",
    type: "",
    location: "",
    field: "",
    companyImg: "",
    link: "",
    tags: [],
    body: "",
  });

  const handleChange = (name, value) => {
    setJob((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const muatation = useMutation({
    mutationFn: createJob,
    onSuccess: () => {},
    onError: () => {},
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    muatation.mutateAsync(job);
  };

  console.log(job);

  return (
    <Box>
      <Typography color="primary" sx={{ fontSize: "1.2rem", mb: 2 }}>
        Create New Vacancy
      </Typography>

      <form>
        <Box
          variant="outlined"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Box fullWidth sx={{ display: "flex", gap: 2 }}>
            <TextField
              name="title"
              fullWidth
              label="Title"
              variant="outlined"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />

            <TextField
              name="company"
              fullWidth
              label="Company"
              variant="outlined"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </Box>
          <Box fullWidth sx={{ display: "flex", gap: 2 }}>
            <Autocomplete
              name="field"
              disablePortal
              fullWidth
              id="combo-box-demo"
              options={fields}
              onChange={(event, value) => handleChange("field", value.label)}
              renderInput={(params) => <TextField {...params} label="Field" />}
            />

            <Autocomplete
              name="type"
              disablePortal
              fullWidth
              id="combo-box-demo"
              options={types}
              onChange={(event, value) => handleChange("type", value.label)}
              renderInput={(params) => (
                <TextField {...params} label="Job Type" />
              )}
            />
          </Box>

          <Box fullWidth sx={{ display: "flex", gap: 2 }}>
            <TextField
              name="link"
              sx={{ width: "60%" }}
              label="Link"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              variant="outlined"
            />

            <TextField
              name="location"
              sx={{ width: "60%" }}
              label="Location"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              variant="outlined"
            />
          </Box>

          <CloudinaryUploadWidget setJob={setJob} />

          <Autocomplete
            multiple
            variant="outlined"
            id="combo-box-demo"
            sx={{ width: "60%" }}
            options={[]}
            freeSolo
            name="tags"
            value={job.tags}
            onChange={(event, value) => handleChange("tags", value)}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Tags"
                placeholder="Favorites"
              />
            )}
          />
          <Editor setJob={setJob} />
          <Button variant="contained" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

const fields = [
  { label: "Bussiness Analysis" },
  { label: "Software Engineering" },
  { label: "Tech" },
];

const types = [
  { label: "Full Time" },
  { label: "Part Time" },
  { label: "Hybrid" },
];

export default VacancyForm;
