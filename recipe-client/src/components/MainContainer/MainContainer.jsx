import React from "react";

import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import American from "../../images/American.jpeg";

import "./mainContainer.css";
import { useFetchRecipe } from "../../helpers/ApiHelpers";
import { withRouter } from "react-router-dom";

// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
// import { makeStyles } from "@material-ui/core/styles";
// const useStyles = makeStyles({
//   drawer: {
//     width: "240px",
//   },
// });

const drawerWidth = 240;

function MainContainer() {
  const { data, error, loading } = useFetchRecipe();

  if (loading) return <p>Still Loading!</p>;
  if (error) throw error;

  return (
    <div>
      <h5 className="for-you">For You</h5>
      <div className="mainContainer-card">
        {data.hits.map((item, index) => (
          <Card sx={{ width: 250 }} key={`${index}`}>
            <CardMedia
              component="img"
              alt="Meal Image"
              height="180"
              image={`${item.recipe.image}`}
            />
            <CardContent>
              <Typography
                className="typography-h1"
                gutterBottom
                variant="h5"
                component="div"
              >
                <a src={`${item.recipe.url}`}>{`${item.recipe.label}`}</a>
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Cuisine Type: {`${item.recipe.cuisineType[0]}`}
              </Typography>
            </CardContent>

            <CardActions>
              <Link
                className="recipe-link"
                href={`${item.recipe.url}`}
                underline="none"
              >
                RECIPE
              </Link>
            </CardActions>
          </Card>
          // <ImageListItem key={`${index}`}>
          //   <img
          //     src={`${item.recipe.image}?w=248&fit=crop&auto=format`}
          //     srcSet={`${item.recipe.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
          //     alt={item.recipe.label}
          //     loading="lazy"
          //   />
          //   <a src={`${item.recipe.url}`}>
          //     <ImageListItemBar
          //       title={item.recipe.label}
          //       actionIcon={
          //         <IconButton
          //           sx={{ color: "rgba(255, 255, 255, 0.54)" }}
          //           aria-label={`info about ${item.title}`}
          //         >
          //           <InfoIcon />
          //         </IconButton>
          //       }
          //     />
          //   </a>
          // </ImageListItem>
        ))}
      </div>
    </div>
  );
}

export default withRouter(MainContainer);
