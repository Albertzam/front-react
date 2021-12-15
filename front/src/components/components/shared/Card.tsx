import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Delete from "@material-ui/icons/DeleteForever";
import Update from "@material-ui/icons/Create";
import React from "react";

import { useGlobalStyles } from "../../../styles/global";

interface props {
  name: string;
  status: string;
  date?: Date;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onClickEliminate: React.MouseEventHandler<HTMLButtonElement>;
}
export const Cards = ({
  name,
  status,
  date,
  onClick,
  onClickEliminate,
}: props) => {
  const globalClasses = useGlobalStyles();

  return (
    <Card className={globalClasses.card}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" style={{ color: "#dd0040" }}>
          Creado el {new Date(date?.toString() as string).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" style={{ color: "#dd0040" }}>
          Estado: {status == "A" ? "activo" : "inactivo"}
        </Typography>
      </CardContent>
      <IconButton
        //onClick={() => handleUpdate(row.original)}
        edge="start"
        size="small"
        //disabled={SdiRoles.ADMIN !== role}
        onClick={onClickEliminate}
        className={globalClasses.buttonsGen}
      >
        <Delete />
      </IconButton>
      <IconButton
        //onClick={() => handleUpdate(row.original)}
        edge="start"
        size="small"
        //disabled={SdiRoles.ADMIN !== role}
        onClick={onClick}
        className={globalClasses.buttonsGen}
      >
        <Update />
      </IconButton>
    </Card>
  );
};
