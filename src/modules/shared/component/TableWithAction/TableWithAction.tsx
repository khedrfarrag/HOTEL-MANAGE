import { Box, TableCell, styled, tableCellClasses } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { formatDate } from '../../../Hooks/formatDate/formatDate';
import { DropdownMenuProps } from '../../../../Interfaces/Table/TableResponse';
import DropdownMenu from '../../../shared/component/DropdownMenu/DropdownMenu';
import { FacilityListRespones } from '../../../../Interfaces/Facilities/FacilityList';
import { RoomsListView } from '../../../../Interfaces/Rooms/RoomsResponse';

export default function TableWithAction({
  list,
  handleOpenDelete,
  handleOpen,
  flag,
}: DropdownMenuProps) {
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
          {flag == 'facilitiesList' ? (
            <TableRow>
              <StyledTableCell
                sx={{ paddingBlock: '2rem', fontWeight: '700' }}
                align="center"
              >
                name
              </StyledTableCell>
              <StyledTableCell sx={{ fontWeight: '700' }} align="center">
                created At
              </StyledTableCell>
              <StyledTableCell sx={{ fontWeight: '700' }} align="center">
                created By
              </StyledTableCell>
              <StyledTableCell sx={{ fontWeight: '700' }} align="center">
                updatedAt
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontWeight: '700' }}
                align="center"
              ></StyledTableCell>
            </TableRow>
          ) : (
            ''
          )}

          {flag == 'roomsList' ? (
            <TableRow>
              <StyledTableCell
                sx={{ paddingBlock: '2rem', fontWeight: '700' }}
                align="center"
              >
                room Number
              </StyledTableCell>
              <StyledTableCell sx={{ fontWeight: '700' }} align="center">
                Image
              </StyledTableCell>
              <StyledTableCell sx={{ fontWeight: '700' }} align="center">
                Price
              </StyledTableCell>
              <StyledTableCell sx={{ fontWeight: '700' }} align="center">
                Discount
              </StyledTableCell>
              <StyledTableCell sx={{ fontWeight: '700' }} align="center">
                Capacity
              </StyledTableCell>
              <StyledTableCell sx={{ fontWeight: '700' }} align="center">
                created At
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontWeight: '700' }}
                align="center"
              ></StyledTableCell>
            </TableRow>
          ) : (
            ''
          )}
        </TableHead>

        <TableBody>
          {flag == 'facilitiesList'
            ? list.map((list: FacilityListRespones) => (
                <StyledTableRow key={list._id}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {list.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {formatDate(list.createdAt)}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {list.createdBy.userName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {formatDate(list.updatedAt)}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <DropdownMenu
                      handleOpenDelete={() => handleOpenDelete(list._id)}
                      list={list}
                      handleOpen={handleOpen}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))
            : ''}

          {flag == 'roomsList'
            ? list.map((list: RoomsListView) => (
                <StyledTableRow key={list._id}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {list.roomNumber}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Box
                      component="img"
                      sx={{
                        height: 90,
                        width: '100%',
                        maxWidth: 110,
                        objectFit: 'cover',
                      }}
                      alt="Example Image"
                      src={list.images[0]}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">{list.price}</StyledTableCell>
                  <StyledTableCell align="center">
                    {list.discount}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {list.capacity}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {formatDate(list.createdAt)}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <DropdownMenu
                      handleOpenDelete={() => handleOpenDelete(list._id )}
                      list={list}
                      handleOpen={handleOpen}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))
            : ''}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
