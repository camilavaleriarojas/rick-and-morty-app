import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CardProps } from "./types";

const CardComponent = ({ data }: CardProps) => {
  return (
    <Card sx={{ width: 300 }}>
      <CardHeader title={data.name} subheader={data.status} />
      <CardMedia component="img" height="194" width="194" image={data.image} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.species}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
