import React from "react";
import { Card, Typography, Link } from "@mui/material";

const MessageCard = () => {
  return (
    <Card sx={{ borderRadius: 0, p: 1, mb: 1 }}>
      <Typography sx={{ fontWeight: 600, mb: 1 }}>
        <span style={{ color: "blue" }}>From</span> Dineth Kumar
      </Typography>
      <Typography mb={1} color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, nisi.
        Eveniet in quas atque iusto reprehenderit iste ea sint accusamus
        commodi? Voluptate corporis, modi explicabo expedita ullam veritatis
        dolor voluptatum.
      </Typography>

      <Link href="mailto:dinethkumar@yahoo.com">
        Reply: dinethkumar@yahoo.com
      </Link>
    </Card>
  );
};

export default MessageCard;
