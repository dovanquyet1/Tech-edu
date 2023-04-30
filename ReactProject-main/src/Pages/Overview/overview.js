import React from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import "./notify.css";

const Notify = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="dropdown">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Badge badgeContent={4} variant="dot" color="primary">
          <NotificationsIcon
            color="black"
            style={{ width: "40px", height: "40px", marginTop: "-8px" }}
          />
        </Badge>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          Your teacher just added a new exercise<br></br>5 minutes ago
        </MenuItem>
        <MenuItem onClick={handleClose}>
          You have an unfinished assignment<br></br>5 minutes ago
        </MenuItem>
        <MenuItem onClick={handleClose}>
          There will be a test early next week<br></br>5 minutes ago
        </MenuItem>
        <MenuItem onClick={handleClose}>
          The teacher just finished marking the final exam, see the score now
          <br></br>5 minutes ago
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Notice of payment of tuition fees for the 1st semester<br></br>5
          minutes ago
        </MenuItem>
        <MenuItem onClick={handleClose}>
          The whole class is absent from Python class on 11/30/2022<br></br>5
          minutes ago
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Notify;


const Overview = () => {
  const [style, setStyle] = useState(0);

  return (
    <Soverview>
      <ul>
        <li>
          <a
            href="#classroom"
            className={style === 0 ? "styleActive" : ""}
            onClick={() => setStyle(0)}
          >
            <box-icon type="solid" size="xs" name="cube"></box-icon> Classroom
          </a>
        </li>
        <li>
          <a
            href="#assignments"
            className={style === 1 ? "styleActive" : ""}
            onClick={() => setStyle(1)}
          >
            <box-icon size="xs" name="edit-alt"></box-icon> Assignment
          </a>
        </li>
        <li>
          <a
            href="#documents"
            className={style === 2 ? "styleActive" : ""}
            onClick={() => setStyle(2)}
          >
            <box-icon size="xs" type="solid" name="file-doc"></box-icon>{" "}
            Document
          </a>
        </li>
        <li>
          <a
            href="#records"
            className={style === 3 ? "styleActive" : ""}
            onClick={() => setStyle(3)}
          >
            <box-icon size="xs" name="video-recording"></box-icon> Record
          </a>
        </li>
        <li>
          <a
            href="#achievements"
            className={style === 4 ? "styleActive" : ""}
            onClick={() => setStyle(4)}
          >
            <box-icon size="xs" name="medal"></box-icon> Achievement
          </a>
        </li>
      </ul>
      <div className="Schild">
        <Classroom />
        <Assignments />
        <Documents />
        <Records />
        <Achievements />
      </div>
    </Soverview>
  );
};

export default Overview;

const Soverview = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  position: fixed;
  left: 0;
  top: 8.4%;
  height: 10000px;
  width: 300px;
  border: 1px solid gainsboro;
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-wrap: wrap;
    list-style: none;
    margin-top: 40px;

    a {
      color: black;
      text-decoration: none;
      font-size: 18px;
      padding: 10px 10px;
    }
  }

  a:hover {
    border-radius: 10px;
    background-color: gainsboro;
    color: black;
    transition: 0.5s;
  }

  .styleActive {
    transition: 0.5s;
    border-radius: 10px;
    background-color: #6284ff;
    color: white;
    position: relative;
    left: 20%;
  }
  .Schild {
    width: 600%;
    overflow-y: scroll;
    scroll-behavior: smooth;
    height: 865px;
    margin-left: 150%;
    margin-top: -107%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
`;
