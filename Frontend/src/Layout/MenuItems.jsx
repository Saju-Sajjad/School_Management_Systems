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

  export const classes = [
    { value: 'Class A', label: 'Class A' },
    { value: 'Class B', label: 'Class B' },
    { value: 'Class C', label: 'Class C' },
    { value: 'Class D', label: 'Class D' },
    { value: 'Class E', label: 'Class E' },
  ];

  export const bloodGroups = [
    { value: 'A+', label: 'A+' },
    { value: 'A-', label: 'A-' },
    { value: 'B+', label: 'B+' },
    { value: 'B-', label: 'B-' },
    { value: 'AB+', label: 'AB+' },
    { value: 'AB-', label: 'AB-' },
    { value: 'O+', label: 'O+' },
    { value: 'O-', label: 'O-' },
  ];
  
