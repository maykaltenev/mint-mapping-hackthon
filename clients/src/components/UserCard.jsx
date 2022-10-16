import React, { useState, useEffect } from "react";
import {
  Stack,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import ReactBoxFlip from "react-box-flip";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";

function FrontCard({ user, handleClick }) {
  const [preview, setPreview] = useState(user.description);

  useEffect(() => {
    if (preview.length > 99) {
      setPreview(preview.slice(0, 99).concat("..."));
    }
  }, [preview]);

  return (
    <Card variant="outlined" sx={{ maxWidth: 360 }} onClick={handleClick}>
      <CardHeader
        avatar={<Avatar src={user.photo} />}
        title={`${user.firstName} ${user.lastName}`}
        subheader={user.position ? user.position : null}
      />

      <CardContent>
        {user.description && (
          <Typography variant="body2" sx={{ mb: 2 }}>
            {preview}
          </Typography>
        )}
        {user.activityAreas && (
          <Stack direction="row" spacing={2}>
            <Typography>Activity area</Typography>
            <Typography>{user.activityAreas.join("/")}</Typography>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}

function BackCard({ user, handleClick }) {
  const date = (item) => new Date(item).toLocaleDateString("eu");
  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }} onClick={handleClick}>
      <CardContent>
        <img
          src={user.photo}
          style={{ width: "20%" }}
          alt={`${user.firstName} ${user.lastName}`}
        />
        <Typography
          color={"primary"}
        >{`${user.firstName} ${user.lastName}`}</Typography>
        {user.position && <Typography>{user.position}</Typography>}
        {user.email && (
          <Button startIcon={<MailOutlineIcon />}>{user.email}</Button>
        )}
        {user.phone && <Button startIcon={<PhoneIcon />}>{user.phone}</Button>}
        {user.website && <Button startIcon={<LanguageIcon />} />}
        <Divider sx={{ my: 1 }} />
        <Typography
          variant="caption"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Profil besteht seit dem {date(user.dateCreated)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function UserCard({ user }) {
  const [isFlipped, setIsFlipped] = useState(false);
  function handleClick() {
    setIsFlipped(!isFlipped);
  }

  return (
    <>
      <ReactBoxFlip isFlipped={isFlipped}>
        <FrontCard user={user} handleClick={handleClick} />
        <BackCard user={user} handleClick={handleClick} />
      </ReactBoxFlip>
    </>
  );
}
