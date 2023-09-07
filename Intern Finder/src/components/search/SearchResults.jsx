import { useContext, useState } from "react";
import JobCard from "../cards/JobCard";
import Job from "../../pages/Job";
import { Paper, Box, Pagination } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { searchJobs } from "../../api/search.api.mjs";
import { SearchContext } from "../../context/SearchProvider";

const SearchResults = () => {
  const [job, setJob] = useState();
  const [page, setPage] = useState(1);
  const { search } = useContext(SearchContext);

  const { isLoading, data: results } = useQuery({
    queryFn: searchJobs,
    queryKey: ["jobs", search],
    onSuccess: (data) => {},
    onError: () => {},
  });

  const itemsPerPage = 10;
  const pageCount = Math.ceil(results?.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedResults = results?.slice(startIndex, endIndex);

  const jobList = paginatedResults?.map((job) => (
    <JobCard setJob={setJob} job={job} />
  ));

  console.log(search);

  return (
    <Box
      sx={{
        p: 2,
        display: "grid",
        gridTemplateColumns: { sm: "1fr", lg: "1.8fr 2fr" },
        gap: 2,
        maxWidth: "1500px",
        margin: "auto",
      }}
    >
      <Box variant="outlined" sx={{ maxHeight: "1000px", overflow: "auto" }}>
        {jobList}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            sx={{ mb: 2 }}
            count={pageCount}
            color="primary"
            variant="outlined"
            shape="rounded"
            page={page}
            onChange={(event, value) => setPage(value)}
          />
        </Box>
      </Box>

      {job && (
        <Box
          variant="outlined"
          component={Paper}
          sx={{
            display: { xs: "none", md: "block" },
            height: "1000px",
            overflow: "auto",
          }}
        >
          <Job id={job} />
        </Box>
      )}
    </Box>
  );
};

export default SearchResults;
