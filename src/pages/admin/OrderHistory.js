import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';

const OrderHistory = ({ orders }) => {
  const {translations} = useLanguage();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const getStatusColor = (status) => {
    const statusColors = {
      pending: 'warning',
      processing: 'info',
      shipped: 'primary',
      delivered: 'success',
      cancelled: 'error',
    };
    return statusColors[status.toLowerCase()] || 'default';
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 2,
          background: "linear-gradient(135deg,rgba(178, 185, 158, 0.07),rgb(95, 246, 105))",
 // Linear gradient background
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
        {/* Order History */}
        {translations?.admin?.order_tab?.order_history || "Loading..."}
      </Typography>
      
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{translations?.admin?.order_tab?.order_id || "Loading..."}</TableCell>
              {!isMobile && <TableCell>{translations?.admin?.order_tab?.customer || "Loading..."}</TableCell>}
              <TableCell>{translations?.admin?.order_tab?.total || "Loading..."}</TableCell>
              <TableCell>{translations?.admin?.order_tab?.status || "Loading..."}</TableCell>
              <TableCell>{translations?.admin?.order_tab?.date || "Loading..."}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order._id} hover>
                <TableCell>{order._id.slice(-6)}</TableCell>
                {!isMobile && (
                  <TableCell>
                    <Box>
                      <Typography variant="body2">{order.userId.name}</Typography>
                      <Typography variant="caption" color="textSecondary">
                        {order.userId.email}
                      </Typography>
                    </Box>
                  </TableCell>
                )}
                <TableCell>₹{order.totalAmount.toFixed(2)}</TableCell>
                <TableCell>
                  <Chip
                    label={order.orderStatus}
                    color={getStatusColor(order.orderStatus)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  {new Date(order.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default OrderHistory;
