import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Chip,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Snackbar,
} from "@mui/material";
import Job from "../../pages/Job";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import brand from "../../assets/brand.jpg";
import { useMutation } from "@tanstack/react-query";
import { saveJob } from "../../api/user.api.mjs";
import { FormattedTime } from "../util/FormattedDay.mjs";

const JobCard = ({ setJob, job }) => {
  const { key, title, companyImg, company, tags, dop, createdAt } = job;

  const [open, setOpen] = useState(false);

  const naviagate = useNavigate();

  const mutation = useMutation({
    mutationFn: saveJob,
    onSuccess: () => {
      setOpen(true);
    },
    onError: () => {},
  });

  const handleSave = () => {
    mutation.mutateAsync({ key: key, email: "isuruakalanka071@gmail.com" });
  };

  const handleNavigate = () => {
    naviagate(`/job/${key}`);
  };

  const handleClick = () => {
    console.log(key);
    setJob(key);
  };

  return (
    <>
      <Card
        sx={{
          mb: 2,
          borderRadius: 0,
          maxWidth: "600px",
          borderBottom: "2px solid blue",
          transition: "all .2s ease-in-out",
          "&:hover": {
            borderBottom: "2px solid red",
            transform: "scale(1.005)",
            position: "relative",
            top: "-10px",
          },
        }}
      >
        <Box
          onClick={handleNavigate}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <CardMedia
                component="img"
                alt=""
                sx={{
                  border: "2px solid blue",
                  width: "4.8rem",
                  height: "4.8rem",
                  borderRadius: "3px",
                  mt: 4,
                  ml: 2,
                }}
                image={companyImg ? companyImg : brand}
              />

              <Box
                sx={{
                  display: "flex",
                  mb: 1,
                  gap: 1,
                  justifyContent: "right",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ textAlign: "right" }}
                  color="primary"
                >
                  {" "}
                  {FormattedTime(createdAt)}
                </Typography>

                <BookmarkBorderOutlinedIcon
                  onClick={handleSave}
                  sx={{
                    ":hover": {
                      bgcolor: "#fffee",
                      cursor: "pointer",
                      color: "#005BBB",
                    },
                  }}
                  fontSize="medium"
                />
              </Box>
            </Box>

            <CardContent sx={{ width: "100%" }}>
              <Typography
                variant="h5"
                color="status.danger"
                fontSize={"1.4rem"}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight={600}
              >
                {company}
              </Typography>

              <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                {tags.map((tag, index) => (
                  <Chip
                    key={index}
                    color="primary"
                    label={tag}
                    href="#basic-chip"
                    variant="outlined"
                  />
                ))}
              </Box>
            </CardContent>
          </Box>
        </Box>
        <Box
          onClick={handleClick}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Box sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              alt=""
              sx={{
                width: "3.8rem",
                height: "3.8rem",
                borderRadius: "3px",
                mt: 4,
                ml: 1,
              }}
              image={companyImg ? companyImg : brand}
            />

            <CardContent sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  mb: 1,
                  gap: 1,
                  justifyContent: "right",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ textAlign: "right" }}
                  color="primary"
                >
                  {FormattedTime(createdAt)}
                </Typography>

                <BookmarkBorderOutlinedIcon
                  onClick={handleSave}
                  sx={{
                    ":hover": {
                      bgcolor: "#fffee",
                      cursor: "pointer",
                      color: "#005BBB",
                    },
                  }}
                  fontSize="medium"
                />
              </Box>

              <Typography
                variant="h5"
                color="status.danger"
                fontSize={"1.4rem"}
              >
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {company}
              </Typography>

              <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                {tags.map((tag, index) => (
                  <Chip
                    key={index}
                    color="primary"
                    label={tag}
                    href="#basic-chip"
                    variant="outlined"
                  />
                ))}
              </Box>
            </CardContent>
          </Box>
        </Box>
      </Card>

      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        message="Successfully Save"
      />
    </>
  );
};

const randomColor = () => {
  const randomIndex = Math.floor(Math.random() * color.length);
  return color[randomIndex];
};

const color = ["primary", "neutral", "danger", "success", "warning"];

export default JobCard;
