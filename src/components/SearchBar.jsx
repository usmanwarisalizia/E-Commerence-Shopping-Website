// SearchBar.js
import React, { useState } from 'react';
import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const SearchBar = () => {
    const [search, setSearch] = useState('');

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f9fafa',
                py: 4
            }}
        >
            <TextField
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                variant="outlined"
                size="small"
                sx={{
                    width: '50%',
                    backgroundColor: '#fff',
                    borderRadius: '999px',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '999px',
                        paddingRight: '4px',
                        '& fieldset': {
                            borderColor: '#d1d5db',
                        },
                        '&:hover fieldset': {
                            borderColor: '#9ca3af',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#6b7280',
                        },
                        '& input': {
                            padding: '8px 14px',
                            fontSize: '14px',
                        },
                    },
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            {search ? (
                                <IconButton onClick={() => setSearch('')} size="small">
                                    <CloseIcon sx={{ fontSize: 18 }} />
                                </IconButton>
                            ) : (
                                <SearchIcon sx={{ fontSize: 18, color: '#4b5563' }} />
                            )}
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
};

export default SearchBar;
