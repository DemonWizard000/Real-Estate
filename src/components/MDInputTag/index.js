import { Cancel, Clear, Close, HighlightOffOutlined, Tag } from "@mui/icons-material";
import { FormControl, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MDInput from "components/MDInput";
import { useRef, useState } from "react";

const Tags = ({ data, handleDelete }) => {
  return (
    <Box
      sx={{
        background: "#e6e6e6",
        height: "100%",
        //display: "flex",
        borderRadius: "6px",
        //padding: "0 0 0 0",
        //margin: "1rem 0.5rem 0.1 0.1",
        mr:0.5,
        p:0.5,
        justifyContent: "center",
        alignContent: "center",
        color: "#00000",
      }}
    >
      <Stack direction='row' gap={0.5}>
        <Typography variant="subtitle2">{data}</Typography>
        <HighlightOffOutlined
          sx={{ 
            cursor: "pointer", 
          }}
          onClick={() => {
            handleDelete(data);
          }}
        />
      </Stack>
    </Box>
  );
};

export default function InputTags() {
  const [tags, SetTags] = useState([]);
  const tagRef = useRef();

  const handleDelete = (value) => {
    const newtags = tags.filter((val) => val !== value);
    SetTags(newtags);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    SetTags([...tags, tagRef.current.value]);
    tagRef.current.value = "";
  };
  return (
    <Box sx={{ flexGrow: 1}}>
      <form onSubmit={handleOnSubmit}>
        <MDInput
          inputRef={tagRef}
          fullWidth
          //sx={{ margin: "1rem 0"}}
          placeholder={tags.length < 5 ? "Enter tags" : ""}
          InputProps={{
            startAdornment: (
              <Box display={'flex'}>
                {tags.map((data, index) => {
                  return (
                    <Tags data={data} handleDelete={handleDelete} key={index} />
                  );
                })}
              </Box>
            ),
          }} />
      </form>
    </Box>
  );
}
