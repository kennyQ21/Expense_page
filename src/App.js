import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import DeleteIcon from '@mui/icons-material/Delete';


export default function BoxWithItems() {
  const [openCreditModal, setOpenCreditModal] = useState(false);
  const [openLedgerModal, setOpenLedgerModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs('2022-11-18'));
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [zone, setZone] = useState('Select Zone');
  const [branch, setBranch] = useState('Select Branch');
  const [academicYear, setAcademicYear] = useState('Select year');
  const [paymentMode, setPaymentMode] = useState('Cash');
  const [approvedBy, setApprovedBy] = useState('Select Type');
  const [additionalRow, setAdditionalRow] = useState(false);
  const [fileName, setFileName] = useState('No file is chosen');
  const [approvedBy1, setApprovedBy1] = useState('Select Type');
  const [LedgerType, setLedgerType] = useState('Select Type');


  const handleOpenCreditModal = () => {
    setOpenCreditModal(true);
  };

  const handleCloseCreditModal = () => {
    setOpenCreditModal(false);
  };

  const handleOpenLedgerModal = () => {
    setOpenLedgerModal(true);
  };

  const handleCloseLedgerModal = () => {
    setOpenLedgerModal(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false); // Close calendar when date is selected
  };
  
    const handleFileChange = (event) => {
      if (event.target.files.length > 0) {
        setFileName(event.target.files[0].name);
      } else {
        setFileName('No file chosen');
      }
    };

    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: 40 * 7,  // Maximum height of 7 items
        },
      },
    };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ backgroundColor: '#add8e6', padding: '15px' }}>
        <Box
          component="section"
          sx={{
            p: 2,
            border: '1px solid lightblue',
            backgroundColor: '#fff',
            borderRadius: '8px', // Adding border radius
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Typography variant="h6" style={{ fontWeight: 'bold', marginRight: '850px' }}>Petty Cash</Typography>
            </Grid>
            <Grid item>
              <Typography style={{fontSize: '16px'}}>Expense</Typography>
            </Grid>
            <Grid item>
              <KeyboardArrowRightOutlinedIcon fontSize="medium" sx={{}} />
            </Grid>
            <Grid item>
              <Typography style={{fontSize: '16px'}}>Expense Management</Typography>
            </Grid>
            <Grid item>
              <KeyboardArrowRightOutlinedIcon fontSize="medium" sx={{}} />
            </Grid>
            <Grid item>
              <Typography style={{fontSize: '16px', fontWeight: '550'}}>Petty Cash</Typography>
            </Grid>
          </Grid>
        </Box>
        <Button variant="contained" onClick={handleOpenCreditModal} style={{ marginRight: '13px', marginLeft: '1100px', marginTop: '20px', borderRadius: '10px', paddingLeft: '25px', paddingRight: '25px', fontSize: '11px' }}>Credit Amount</Button>
        <Button variant="contained" onClick={handleOpenLedgerModal} style={{ marginTop: '20px', borderRadius: '10px', paddingLeft: '28px', paddingRight: '28px', fontSize: '11px' }}>Add to Ledger</Button>
      </Box>

      {/* Credit Amount Modal */}
      <Dialog open={openCreditModal} onClose={handleCloseCreditModal} fullWidth maxWidth="lg">
        <DialogContent>
          <Grid container spacing={5} sx={{}}>
            <Grid item xs={3}>
              <p>Zone</p>
              <FormControl fullWidth>
                <Select
                  value={zone}
                  onChange={(event) => setZone(event.target.value)}
                  displayEmpty
                  style={{ width: '100%', height: '35px' }}
                >
                  <MenuItem value="Zone1">Zone 1</MenuItem>
                  <MenuItem value="Zone2">Zone 2</MenuItem>
                  <MenuItem value="Zone3">Zone 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <p>Branch</p>
              <FormControl fullWidth>
                <Select
                  value={branch}
                  onChange={(event) => setBranch(event.target.value)}
                  displayEmpty
                  style={{ width: '100%', height: '35px' }}
                >
                  <MenuItem value="Branch1">Branch 1</MenuItem>
                  <MenuItem value="Branch2">Branch 2</MenuItem>
                  <MenuItem value="Branch3">Branch 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <p>Academic year</p>
              <FormControl fullWidth>
                <Select
                  value={academicYear}
                  onChange={(event) => setAcademicYear(event.target.value)}
                  displayEmpty
                  style={{ width: '100%', height: '35px' }}
                >
                  <MenuItem value="2024-2025">2024-2025</MenuItem>
                  <MenuItem value="2023-2024">2023-2024</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Divider sx={{ mt: '30px', mb: '30px' }} />
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <p>Payment mode</p>
              <FormControl fullWidth>
                <Select
                  value={paymentMode}
                  onChange={(event) => setPaymentMode(event.target.value)}
                  displayEmpty
                  style={{ width: '90%', height: '35px' }}
                >
                  <MenuItem value="Cash">Cash</MenuItem>
                  <MenuItem value="Cheque">Cheque</MenuItem>
                  <MenuItem value="Online">Online</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <p>Amount</p>
              <TextField fullWidth label="" InputProps={{
                  style: { height: '35px', width: '90%'}, // Adjust the height here
                }} />
            </Grid>
            <Grid item xs={3}>
              <p>To</p>
              <TextField fullWidth label="" InputProps={{
                  style: { height: '35px', width: '90%' }, // Adjust the height here
                }}/>
            </Grid>
            <Grid item xs={3}>
              <p>Approved by</p>
              <FormControl fullWidth>
                <Select
                  value={approvedBy}
                  onChange={(event) => setApprovedBy(event.target.value)}
                  displayEmpty
                  style={{ width: '90%', height: '35px' }}
                >
                  <MenuItem value="Warden">Warden</MenuItem>
                  <MenuItem value="Principal">Principal</MenuItem>
                  <MenuItem value="Lecturer">Lecturer</MenuItem>
                  <MenuItem value="Accountant">Accountant</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mt: '10px' }}>
              <Grid item sx={{ marginRight: '100px', marginLeft: '10px' }} xs={3}>
                <p>Date</p>
                <Button 
                  variant="outlined" 
                  fullWidth 
                  onClick={() => setIsCalendarOpen(true)}
                  sx={{ color: 'black', borderColor: 'black' }}
                >
                  <CalendarMonthIcon fontSize="medium" variant='outlined'/>
                  {selectedDate ? `${selectedDate.format('DD')} ${selectedDate.format('MMM').toLowerCase()} ${selectedDate.format('YYYY')}` : 'Select Date'}
                </Button>
                {isCalendarOpen && (
                  <DatePicker
                    open={isCalendarOpen}
                    onClose={() => setIsCalendarOpen(false)}
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                )}
              </Grid>
              <Grid item xs={4} sx={{mt: '50px'}}>
                <TextField fullWidth multiline rows={1} label="Remarks" InputLabelProps={{  }} />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseCreditModal} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCloseCreditModal} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>

      {/* Add to Ledger Modal */}
      <Dialog open={openLedgerModal} onClose={handleCloseLedgerModal} fullWidth maxWidth="lg">
        <DialogContent>
          <Grid container spacing={8}>
            <Grid item xs={3}>
              <p>Zone</p>
              <FormControl fullWidth>
                <Select
                  value={zone}
                  onChange={(event) => setZone(event.target.value)}
                  displayEmpty
                  style={{ width: '100%', height: '35px' }}
                >
                  <MenuItem value="Zone1">Zone 1</MenuItem>
                  <MenuItem value="Zone2">Zone 2</MenuItem>
                  <MenuItem value="Zone3">Zone 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <p>Branch</p>
              <FormControl fullWidth>
                <Select
                  value={branch}
                  onChange={(event) => setBranch(event.target.value)}
                  displayEmpty
                  style={{ width: '100%', height: '35px' }}
                >
                  <MenuItem value="Branch1">Branch 1</MenuItem>
                  <MenuItem value="Branch2">Branch 2</MenuItem>
                  <MenuItem value="Branch3">Branch 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <p>Academic year</p>
              <FormControl fullWidth>
                <Select
                  value={academicYear}
                  onChange={(event) => setAcademicYear(event.target.value)}
                  displayEmpty
                  style={{ width: '100%', height: '35px' }}
                >
                  <MenuItem value="2024-2025">2024-2025</MenuItem>
                  <MenuItem value="2023-2024">2023-2024</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Divider sx={{ mt: '30px', mb: '30px' }} />
          <Grid container justifyContent="flex-end" sx={{ mb: '20px' }}>
            <Grid item xs={2.25}>
              <Button 
                variant="contained" 
                onClick={() => setAdditionalRow(true)} 
                style={{ borderRadius: '5px', fontSize: '13px' }}
                disabled={additionalRow} // Disable button if row already exists
              >
                <AddCircleOutlinedIcon sx={{ fontSize: '18px', mr: '6px'}} />
                Add expense ledger
              </Button>
            </Grid>
          </Grid>
          <Box
            component="section"
            sx={{
              p: 2,
              border: '1px',
              backgroundColor: 'lightgrey',
              borderRadius: '4px',
            }}
          >
            <Grid container spacing={18} alignItems="center">
              <Grid item>
                <Typography>Ledger type</Typography>
              </Grid>
              <Grid item>
                <Typography>Ledger account</Typography>
              </Grid>
              <Grid item>
                <Typography>Nature of expense</Typography>
              </Grid>
              <Grid item>
                <Typography>Amount</Typography>
              </Grid>
              <Grid item>
                <Typography>Balance</Typography>
              </Grid>
            </Grid>
          </Box>
          <Grid container spacing={1} sx={{ mt: '10px' }}>
            <Grid item xs={2} sx={{ mr: '40px', ml: '15px' }}>
              <FormControl fullWidth>
                <Select
                  value={LedgerType}
                  onChange={(event) => setLedgerType(event.target.value)}
                  displayEmpty
                  style={{ width: '90%', height: '35px' }}
                >
                  <MenuItem value="Expense">Cash</MenuItem>
                  <MenuItem value="Liability">Cheque</MenuItem>
                  <MenuItem value="Asset">Online</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2} sx={{ mr: '65px' }}>
              <FormControl fullWidth>
                <Select
                  value={approvedBy}
                  onChange={(event) => setApprovedBy(event.target.value)}
                  displayEmpty
                  style={{ width: '90%', height: '35px' }}
                >
                  <MenuItem value="Account1">Account 1</MenuItem>
                  <MenuItem value="Account2">Account 2</MenuItem>
                  <MenuItem value="Account3">Account 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2} sx={{ mr: '70px' }}>
              <FormControl fullWidth>
                <Select
                  value={approvedBy1}
                  onChange={(event) => setApprovedBy1(event.target.value)}
                  displayEmpty
                  style={{ width: '90%', height: '35px' }}
                  MenuProps={MenuProps}
                >
                  <MenuItem value="Expense1">BIE expenditure</MenuItem>
                  <MenuItem value="Expense2">BIE examination fee</MenuItem>
                  <MenuItem value="Expense3">BIE Recognition fee</MenuItem>
                  <MenuItem value="Expense4">BIE Affiliation fee</MenuItem>
                  <MenuItem value="Expense5">Practical Lab Equipment</MenuItem>
                  <MenuItem value="Expense6">First Aid Kit or General medicines</MenuItem>
                  <MenuItem value="Expense7">Tea and Coffee</MenuItem>
                  <MenuItem value="Expense8">Detergent and Cleaning items</MenuItem>
                  <MenuItem value="Expense9">Snacks</MenuItem>
                  <MenuItem value="Expense10">Stationary</MenuItem>
                  <MenuItem value="Expense11">Pooja essentials</MenuItem>
                  <MenuItem value="Expense12">Labour Charges</MenuItem>
                  <MenuItem value="Expense13">Transport Charges</MenuItem>
                  <MenuItem value="Expense14">Fuel Conveyance</MenuItem>
                  <MenuItem value="Expense15">Generator / AC / Fan / Electrical Maintenance</MenuItem>
                  <MenuItem value="Expense16">Xerox / Printing</MenuItem>
                  <MenuItem value="Expense17">Stationary or Postages</MenuItem>
                  <MenuItem value="Expense18">Newspaper and Journals</MenuItem>
                  <MenuItem value="Expense19">Telephone Bill</MenuItem>
                  <MenuItem value="Expense20">Internet Bill</MenuItem>
                  <MenuItem value="Expense21">Water Bill</MenuItem>
                  <MenuItem value="Expense22">Electricity Bill</MenuItem>
                </Select>
              </FormControl>
            </Grid>           
            <Grid item xs={2} sx={{ mr: '40px' }}>
              <TextField fullWidth label="" InputProps={{
                style: { height: '35px', width: '90%' },
              }} />
            </Grid>
          </Grid>
          {additionalRow && (
            <Grid container spacing={1} sx={{ mt: '10px', alignItems: 'center' }}>
              <Grid item xs={2} sx={{ mr: '40px', ml: '15px' }}>
                <FormControl fullWidth>
                  <Select
                    value={paymentMode}
                    onChange={(event) => setPaymentMode(event.target.value)}
                    displayEmpty
                    style={{ width: '90%', height: '35px' }}
                  >
                    <MenuItem value="Cash">Cash</MenuItem>
                    <MenuItem value="Cheque">Cheque</MenuItem>
                    <MenuItem value="Online">Online</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2} sx={{ mr: '65px' }}>
                <FormControl fullWidth>
                  <Select
                    value={approvedBy}
                    onChange={(event) => setApprovedBy(event.target.value)}
                    displayEmpty
                    style={{ width: '90%', height: '35px' }}
                  >
                    <MenuItem value="Account1">Account 1</MenuItem>
                    <MenuItem value="Account2">Account 2</MenuItem>
                    <MenuItem value="Account3">Account 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2} sx={{ mr: '70px' }}>
              <FormControl fullWidth>
                <Select
                  value={approvedBy1}
                  onChange={(event) => setApprovedBy1(event.target.value)}
                  displayEmpty
                  style={{ width: '90%', height: '35px' }}
                  MenuProps={MenuProps}
                >
                  <MenuItem value="Expense1">BIE expenditure</MenuItem>
                  <MenuItem value="Expense2">BIE examination fee</MenuItem>
                  <MenuItem value="Expense3">BIE Recognition fee</MenuItem>
                  <MenuItem value="Expense4">BIE Affiliation fee</MenuItem>
                  <MenuItem value="Expense5">Practical Lab Equipment</MenuItem>
                  <MenuItem value="Expense6">First Aid Kit or General medicines</MenuItem>
                  <MenuItem value="Expense7">Tea and Coffee</MenuItem>
                  <MenuItem value="Expense8">Detergent and Cleaning items</MenuItem>
                  <MenuItem value="Expense9">Snacks</MenuItem>
                  <MenuItem value="Expense10">Stationary</MenuItem>
                  <MenuItem value="Expense11">Pooja essentials</MenuItem>
                  <MenuItem value="Expense12">Labour Charges</MenuItem>
                  <MenuItem value="Expense13">Transport Charges</MenuItem>
                  <MenuItem value="Expense14">Fuel Conveyance</MenuItem>
                  <MenuItem value="Expense15">Generator / AC / Fan / Electrical Maintenance</MenuItem>
                  <MenuItem value="Expense16">Xerox / Printing</MenuItem>
                  <MenuItem value="Expense17">Stationary or Postages</MenuItem>
                  <MenuItem value="Expense18">Newspaper and Journals</MenuItem>
                  <MenuItem value="Expense19">Telephone Bill</MenuItem>
                  <MenuItem value="Expense20">Internet Bill</MenuItem>
                  <MenuItem value="Expense21">Water Bill</MenuItem>
                  <MenuItem value="Expense22">Electricity Bill</MenuItem>
                </Select>
              </FormControl>
            </Grid>
              <Grid item xs={2} sx={{ mr: '40px' }}>
                <TextField fullWidth label="" InputProps={{
                  style: { height: '35px', width: '90%' },
                }} />
              </Grid>
              <Grid item>
                <Button
                  variant='circle'
                  color="grey"
                  onClick={() => setAdditionalRow(false)}
                >
                  <DeleteIcon />
                </Button>
              </Grid>
            </Grid>
          )}
            <Grid container spacing={2} sx={{ mt: '20px'}}>
              <Grid item xs={3}>
                <p>Approved by</p>
                <FormControl fullWidth>
                  <Select
                    value={approvedBy}
                    onChange={(event) => setApprovedBy(event.target.value)}
                    displayEmpty
                    style={{ width: '90%', height: '35px' }}
                  >
                    <MenuItem value="Warden">Warden</MenuItem>
                    <MenuItem value="Principal">Principal</MenuItem>
                    <MenuItem value="Lecturer">Lecturer</MenuItem>
                    <MenuItem value="Accountant">Accountant</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3} sx={{ml:'20px',width:'900px'}}>
                <p>Attachment</p>
                <Box display="flex" alignItems="center">
                  <Button
                    variant="contained"
                    component="label"
                    sx={{height: '35px', width: '250px',color: 'black', borderColor: 'black',backgroundColor: 'lightgrey'}}
                  >
                    Choose File
                    <input
                      type="file"
                      hidden
                      onChange={handleFileChange}
                    />
                  </Button>
                  <Box sx={{ fontSize: '18px',ml:'10px' }}>{fileName}</Box>
                </Box>
              </Grid>
              </Grid>
        </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseLedgerModal} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCloseLedgerModal} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
    </LocalizationProvider>
  );
}
