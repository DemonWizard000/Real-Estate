
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import MDBox from "components/MDBox";
import { Card, FormControl, MenuItem, Select } from "@mui/material";
import MDTypography from "components/MDTypography";
import Footer from "examples/Footer";
import MDInput from "components/MDInput";
import CustomEditor from "examples/Editor";
import InputTags from "components/MDInputTag";
import MDButton from "components/MDButton";
import { ArrowDropDown } from "@mui/icons-material";



const Blog = () => {
  const navigate = useNavigate();
  const [readingTime, setReadingTime] = useState('')

  if (!localStorage.getItem("jwtToken")) {
    navigate("/authentication/sign-in");
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={1} pb={0}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={0}
                py={1}
                px={1}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info">
                <MDTypography variant="h6" color="white">
                  New Article
                </MDTypography>
              </MDBox>
              <MDBox px={2}>
                <MDBox pt={2}>
                  <FormControl fullWidth>
                    <label style={{fontSize: '15px'}} id="category-label" >Category:</label>
                    <Select
                      IconComponent={() => (
                        <ArrowDropDown sx={{width: 40}} fontSize="medium"/>
                      )}
                      labelId="category-label"
                      sx={{       
                        // width: 250,
                        height: 40,
                      }}
                    >
                      <MenuItem value={1}>All</MenuItem>
                      <MenuItem value={2}>Popular Areas</MenuItem>
                      <MenuItem value={3}>Portfolio</MenuItem>
                      <MenuItem value={4}>Agents</MenuItem>
                      <MenuItem value={5}>Market</MenuItem>
                      <MenuItem value={6}>Lifestyle</MenuItem>
                      <MenuItem value={5}>Architecture</MenuItem>
                      <MenuItem value={5}>Company News</MenuItem>
                    </Select>
                  </FormControl>
                </MDBox>
                <MDBox pt={2}>
                  <label style={{fontSize: '15px'}} id="picture-label" >Blog Thumbnail:</label>
                  <MDInput
                    id="picture-label"
                    type="file"
                    name="bannerImg"
                    // onChange={this.handleImageChangeSingle}
                    // value={this.state.bannerImg}
                    fullWidth
                  />
                </MDBox>
                <MDBox pt={2}>
                <label style={{fontSize: '15px'}} id="title-label" >Title:</label>
                  <MDInput
                    id="title-label"
                    type="text"
                    name="title"
                    // onChange={}
                    // value={}
                    label="Title"
                    fullWidth
                  />
                </MDBox>
                <MDBox pt={2}>
                  <label style={{fontSize: '15px'}} id="short-label" >Short Description:</label>
                  <MDInput
                    id="short-label"
                    type="text"
                    name="summary"
                    // onChange={}
                    // value={}
                    label="Please write down the short description"
                    fullWidth
                  />
                </MDBox>
                <MDBox pt={2}>
                  <label style={{fontSize: '15px'}} id="blog-label" >Blog Editor:</label>
                  <CustomEditor 
                    id="blog-label"
                    onChange={setReadingTime}
                  />
                </MDBox>
                <MDBox pt={2}>
                <label style={{fontSize: '15px'}} id="tag-label" >Tags:</label>
                  {/* <MDInput
                    id="tag-label"
                    type="text"
                    name="tag"
                    // onChange={}
                    // value={}
                    label="Tag"
                    fullWidth
                  /> */}
                  <InputTags />
                </MDBox>
                <MDBox py={2}>
                <label style={{fontSize: '15px'}} id="readtime-label" >Read Time:</label>
                  <MDInput
                    id="readtime-label"
                    type="text"
                    name="time"
                    // onChange={}
                    value={readingTime}
                    fullWidth
                  />
                </MDBox>
                <MDBox mb={2} mt={2}>
                  <MDButton type="submit" variant="gradient" color="info" fullWidth>
                    <MDTypography variant="h6" color="white">Save</MDTypography>
                  </MDButton>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );

}

export default Blog;