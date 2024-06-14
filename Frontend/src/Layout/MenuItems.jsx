// src/MenuItems.js
import MenuItem from '@mui/material/MenuItem';

export const profileMenuItems = [
  { label: 'Profile', action: 'profile' },
  { label: 'My account', action: 'myAccount' },
  { label: 'Logout', action: 'logout' },
];

export const notificationMenuItems = [
  { label: 'Notification 1', action: 'notification1' },
  { label: 'Notification 2', action: 'notification2' },
];

export const renderMenuItems = (items, handleClose) =>
  items.map((item, index) => (
    <MenuItem key={index} onClick={() => handleClose(item.action)}>
      {item.label}
    </MenuItem>
  ));
