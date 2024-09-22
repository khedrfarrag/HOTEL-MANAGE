export const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '70%', md: '50%', lg: '40%', xl: '30%' },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: { xs: 2, sm: 3, md: 4 },
  borderRadius: '.8rem',
};

export const stylesTextField = {
  width: '100%',
  '& .MuiInputBase-input': {
    fontSize: { xs: '0.85rem', sm: '1rem' },
  },
};

export const stylesStackButton = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: { xs: 'center', sm: 'end' },
  marginTop: '2rem',
};

export const styleButton ={
    width: { xs: '100%', sm: 'auto' },
    fontSize: { xs: '0.85rem', sm: '1rem' },
    padding: { xs: '0.5rem 1rem', md: '0.75rem 2rem' },
  }
