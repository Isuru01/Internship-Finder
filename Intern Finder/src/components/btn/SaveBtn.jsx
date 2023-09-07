import React from "react";

const SaveBtn = () => {
  return (
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
  );
};

export default SaveBtn;
