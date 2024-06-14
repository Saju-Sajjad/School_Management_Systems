import { Grid, Paper, Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import { BsArrowDownLeft, BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';
import { MdAttachMoney, MdPeopleOutline, MdSchool } from 'react-icons/md';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

// Sample Data for the Chart
const studentChartData = [
  { name: 'Class A', value: 200 },
  { name: 'Class B', value: 180 },
  { name: 'Class C', value: 220 },
  { name: 'Class D', value: 240 },
  { name: 'Class E', value: 250 },
];

// Sample Data for Recent Transactions Table
const transactions = [
  { id: 1, date: '2024-06-10', amount: 500, description: 'Tuition Fee Payment' },
  { id: 2, date: '2024-06-09', amount: 300, description: 'Library Fees' },
  { id: 3, date: '2024-06-08', amount: 700, description: 'Sports Club Membership' },
  { id: 4, date: '2024-06-07', amount: 250, description: 'School Supplies Purchase' },
  { id: 5, date: '2024-06-06', amount: 400, description: 'Field Trip Fees' },
];

function AdminDashboard() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const dashboardCards = [
    {
      id: 1,
      title: 'Total Students',
      icon: MdPeopleOutline,
      value: 1234,
      percent: 65,
      color: '#3B82F6',
    },
    {
      id: 2,
      title: 'Total Teachers',
      icon: BsArrowUpRight,
      value: 56,
      percent: 80,
      color: '#10B981',
    },
    {
      id: 3,
      title: 'Total Classes',
      icon: MdSchool,
      value: 30,
      percent: 45,
      color: '#F59E0B',
    },
    {
      id: 4,
      title: 'Total Earnings',
      icon: MdAttachMoney,
      value: 10000,
      percent: 35,
      color: '#EF4444',
    },
  ];

  return (
    <Box p={3}>
      <Grid container spacing={3}>
        {dashboardCards.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={3}>
            <Paper variant="outlined" sx={{ p: 2, bgcolor: card.color, border: '1px solid #E5E7EB', borderRadius: 8 }}>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: '#FFFFFF',
                      color: card.color,
                      borderRadius: '50%',
                    }}
                  >
                    <card.icon fontSize="large" />
                  </Box>
                </Grid>
                <Grid item>
                  <Typography variant="h6" sx={{ color: '#FFFFFF' }}>{card.title}</Typography>
                </Grid>
              </Grid>
              <Box mt={2}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#FFFFFF' }}>
                  {card.id === 4 ? `$${card.value}` : card.value}
                </Typography>
              </Box>
              <Box mt={1} display="flex" alignItems="center">
                {card.percent > 50 && <BsArrowUpRight style={{ color: 'green' }} />}
                {card.percent <= 50 && card.percent >= 30 && <BsArrowDownRight style={{ color: 'orange' }} />}
                {card.percent < 30 && <BsArrowDownLeft style={{ color: 'red' }} />}
                <Typography variant="body2" sx={{ ml: 1, color: '#FFFFFF' }}>
                  {card.percent}%
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}

        {/* Bar Chart for Student Numbers per Class */}
        <Grid item xs={12}>
          <Paper variant="outlined" sx={{ p: 2, bgcolor: '#303f9f', border: '1px solid #E5E7EB', borderRadius: 8 }}>
            <Typography variant="h6" sx={{ color: '#FFFFFF' }}>Student Distribution per Class</Typography>
            <Box mt={2} height={isSmallScreen ? 300 : 400}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={studentChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fill: 'white' }} />
                  <YAxis tick={{ fill: 'white' }} />
                  <Tooltip
              
                  />
                  <Bar dataKey="value" fill="#E91E63" barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>


      </Grid>
    </Box>
  );
}

export default AdminDashboard;
