import React, { useRef, useState } from "react";
import { Button, TextField } from "@mui/material";

const SampleUpload = (props) => {
  const { label, onChange } = props;
  const [attachment, setAttachment] = useState();
  const buttonRef = useRef(null);

  const handleChange = (event) => {
    console.log("event", event);
    const files = Array.from(event.target.files);
    const [file] = files;
    setAttachment(file);
    if (!!onChange) onChange({ target: { value: file } });
  };

  //github.com/mui/material-ui/issues/9716

  console.log("buttonRef", buttonRef?.current);

  return (
    <TextField
      disabled
      value={attachment?.name}
      label={label}
      sx={{
        "& input": {
          cursor: "pointer",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        },
      }}
      error={true}
      placeholder="Upload"
      onClick={() => buttonRef?.current?.click()}
      {...props}
      onMouseEnter={() => console.log("here")}
      InputProps={{
        endAdornment: (
          <Button
            variant="contained"
            component="label"
            sx={{ minWidth: "136px" }}
          >
            Upload File
            <input
              type="file"
              hidden
              onChange={handleChange}
              ref={buttonRef}
              accept="image/*"
            />
          </Button>
        ),
      }}
    />
  );
};

export default SampleUpload;
