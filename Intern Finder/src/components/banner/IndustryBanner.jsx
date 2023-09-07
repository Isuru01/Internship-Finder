import { useState, useEffect } from "react";
import { Box, Typography, Button, Card, Chip, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";
import bg4 from "../../assets/bg4.png";
import bg5 from "../../assets/bg5.png";
import indust1 from "../../assets/indust1.jpg";
import indust2 from "../../assets/indust2.jpg";
import indust3 from "../../assets/indust3.jpg";

const IndustryBanner = () => {
  const naviagte = useNavigate();

  const handleClick = () => {
    naviagte("/search");
  };

  const [currentImg, setCurrentImg] = useState(indust1);
  const images = [indust1, indust2, indust3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((currentImg) => {
        const currentIndex = images.indexOf(currentImg);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fields = [
    { industry: "Management ", count: 20 },
    { industry: "IT & Tech", count: 120 },
    { industry: "Banking", count: 20 },
    { industry: "Engineering", count: 10 },
    { industry: "Education", count: 10 },
    { industry: "HealthCare ", count: 30 },
  ].map((el) => (
    <Box sx={{ minWidth: "130px", m: 2 }}>
      <Typography
        color="primary"
        sx={{ fontSize: "1.2rem", fontWeight: "600", mb: 1 }}
      >
        {el.industry}
      </Typography>
      <Typography color="text.secondary" sx={{ fontSize: "1.4rem" }}>
        {el.count}+
      </Typography>
    </Box>
  ));

  return (
    <Box sx={{ backgroundImage: `url(${bg4})` }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          margin: "auto",
          maxWidth: "1500px",
        }}
      >
        {/* <img
          src={currentImg}
          style={{
            borderRadius: "20px",
            margin: "4rem 0 4rem 4rem",
            objectFit: "cover",
            width: "500px",
            height: "600px",
            transition: "opacity 1s ease-out",
          }}
        /> */}

        <CardMedia
          component="img"
          alt=""
          sx={{
            borderRadius: { xs: "0", md: "20px" },
            objectFit: "cover",
            margin: { xs: 0, md: "4rem 0 4rem 0" },
            width: { xs: "100%", md: "500px" },
            height: { xs: "280px", md: "600px" },
            borderRadius: "3px",
            transition: "opacity 1s ease-out",
          }}
          image={currentImg}
        />
        <Box sx={{ margin: "auto", p: 4 }}>
          <Typography
            variant="h2"
            color="#0057B7"
            sx={{ fontSize: { xs: "2rem", md: "3.2rem" }, fontWeight: 500 }}
            gutterBottom
          >
            Find Your Dream Team In
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ fontSize: "1.2rem" }}
            gutterBottom
          >
            It's never been easier like this. <br />
            Find newest intern oppurtunities from across the web
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 1,
            }}
          >
            {fields}
          </Box>

          <Typography
            color="text.secondary"
            sx={{ fontSize: "1.2rem", mt: 2 }}
            gutterBottom
          >
            Find the oppurtunities that suits to your working style
          </Typography>

          <Box sx={{ mb: 4, display: "flex", gap: 1 }}>
            <Chip variant="outlined" label="Hybrid" />
            <Chip variant="outlined" label="Full Time" />
            <Chip variant="outlined" label="Remote" />
          </Box>

          <Button
            onClick={handleClick}
            variant="outlined"
            sx={{ borderRadius: 0 }}
          >
            Check Out Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default IndustryBanner;
