import { Avatar, TableCell, styled, tableCellClasses } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PageviewIcon from '@mui/icons-material/Pageview';
import Style from '../sass/BokingList.module.css';
import { pink } from '@mui/material/colors';
import DropdownMenu from '../../../../admin/components/bookingList/DropdownMenu/DropdownMenu';
import { formatDate } from '../../../../Hooks/formatDate/formatDate';

export default function TableWithAction({
  Bokinglist,
  handleOpenDelete,
  handleOpen,
}: any) {
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: 'rgba(226, 229, 235, 1)',
      color: 'rgba(31, 38, 62, 1)',
      fontSize: '1rem',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  console.log(Bokinglist);
  const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
      backgroundColor: ' rgba(248, 249, 251, 1)',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell
              sx={{ paddingBlock: '2rem', fontWeight: '700' }}
              align="center"
            >
              room Number
            </StyledTableCell>
            <StyledTableCell sx={{ fontWeight: '700' }} align="center">
              Price
            </StyledTableCell>
            <StyledTableCell sx={{ fontWeight: '700' }} align="center">
              Start Date
            </StyledTableCell>
            <StyledTableCell sx={{ fontWeight: '700' }} align="center">
              End Date
            </StyledTableCell>
            <StyledTableCell sx={{ fontWeight: '700' }} align="center">
              user
            </StyledTableCell>
            <StyledTableCell
              sx={{ fontWeight: '700' }}
              align="center"
            ></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Bokinglist?.map((Bokinglist: any) => (
            <StyledTableRow key={Bokinglist?._id}>
              {Bokinglist?.room?.roomNumber != null ? (
                <StyledTableCell align="center" component="th" scope="row">
                  {Bokinglist?.room?.roomNumber}
                </StyledTableCell>
              ) : (
                <StyledTableCell
                  align="center"
                  component="th"
                  scope="row"
                  className={Style.avatar}
                >
                  <Avatar sx={{ bgcolor: pink[500], marginLeft: '40px' }}>
                    <PageviewIcon />
                  </Avatar>
                </StyledTableCell>
              )}
              <StyledTableCell align="center">
                {Bokinglist?.totalPrice}
                {/* {formatDate(Bokinglist?.createdAt)} */}
              </StyledTableCell>
              <StyledTableCell align="center">
                {formatDate(Bokinglist?.startDate)}
                {/* {Bokinglist?.createdBy.userName} */}
              </StyledTableCell>
              <StyledTableCell align="center">
                {formatDate(Bokinglist?.endDate)}
                {/* {formatDate(Bokinglist?.updatedAt)} */}
              </StyledTableCell>
              <StyledTableCell align="center">
                {Bokinglist?.user?.userName}
                {/* {formatDate(Bokinglist?.updatedAt)} */}
              </StyledTableCell>
              <StyledTableCell align="center">
                <DropdownMenu
                  handleOpenDelete={() => handleOpenDelete(Bokinglist?._id)}
                  // Bokinglist={Bokinglist}
                  handleOpen={handleOpen}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
