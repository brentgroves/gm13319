import React from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SpeedIcon from "@material-ui/icons/Speed";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import EmailIcon from "@material-ui/icons/Email";
import AssignmentIcon from '@material-ui/icons/Assignment';

//https://v0.material-ui.com/#/components/list
//https://medium.com/@ali.atwa/getting-started-with-material-ui-for-react-59c82d9ffd93

export default function SideMenu(params) {
  // eslint-disable-next-line
  const { Push } = params;

  const handleIssues = () => {
    // Push('/toollife');
    alert(`Tooling Issues`);
  };
  const handleEfficiencies = () => {
    // Push('/machining_times');
    alert(`Plant Efficiencies`);
  };
  const handleSubscribeEmail = () => {
    // Push('/SubscribeEmail');
    alert(`SubscribeEmail`);
  };
  const handleTasks = () => {
    // Push('/machining_times');
    window.open(
      "https://tasks.office.com/busche-cnc.com/en-US/Home/Planner/",
      "_blank"
    );
  };
  return (
    <List>
      <ListSubheader>Issues</ListSubheader>
      <Divider />
      <ListItem button onClick={handleIssues}>
        <ListItemIcon>
          <SpeedIcon />
        </ListItemIcon>
        <ListItemText primary="Issues" />
      </ListItem>
      <ListItem button onClick={handleEfficiencies}>
        <ListItemIcon>
          <AirplanemodeActiveIcon />
        </ListItemIcon>
        <ListItemText primary="Efficiency" />
      </ListItem>
      {/* <ListItem button onClick={handleIssuesPlant8}>
        <ListItemIcon>
          <DirectionsRunIcon />
        </ListItemIcon>
        <ListItemText primary="Plant 9" />
      </ListItem> */}
      <Divider />
      <ListSubheader>Post</ListSubheader>
      <Divider />
      <ListItem button onClick={handleSubscribeEmail}>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary="Email" />
      </ListItem>
      <Divider />
      <ListSubheader>Planner</ListSubheader>
      <Divider />
      <ListItem button onClick={handleTasks}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Tasks" />
      </ListItem>
    </List>
  );
}
