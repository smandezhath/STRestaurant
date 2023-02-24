import { Container } from "@mui/system";
import React from "react";


const PostPage = () => {
    return (
        <div className="postPage">
            <Container maxWidth="sm">
                <h2>Restaurant Details</h2>
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Category</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Category"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Chinese"}>Chinese</MenuItem>
                    <MenuItem value={"French"}>French</MenuItem>
                    <MenuItem value={"Italian"}>Italian</MenuItem>
                    <MenuItem value={"Asian"}>Asian</MenuItem>
                  </Select>
                </FormControl>
                <TextField id="outlined-basic" label="Name" variant="outlined" />

            </Container>

        </div>
    );
};


export default PostPage;