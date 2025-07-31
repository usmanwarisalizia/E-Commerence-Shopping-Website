import React from 'react';
import {
    Box,
    Typography,
    TextField,
    IconButton
} from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';

const ResultsHeader = ({
    currentPage,
    itemsPerPage,
    totalItems,
    sortOption,
    onSortChange,
    viewMode,
    onViewModeChange
}) => {
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    return (
        <Box sx={{
            width: '100%',
            margin: '0 auto 32px',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: { xs: 3, sm: 2 },
            borderBottom: '1px solid #f0f0f0',
            paddingBottom: '24px',
            position: 'relative',
            '&:after': {
                content: '""',
                position: 'absolute',
                bottom: '-1px',
                left: 0,
                width: '120px',
                height: '2px',
                backgroundColor: '#eb0029'
            }
        }}>
            {/* Results Count */}
            <Typography variant="body1" sx={{
                color: '#5c6574',
                fontSize: { xs: '13px', sm: '14px' },
                fontWeight: 500,
                letterSpacing: '0.2px',
                order: { xs: 1, sm: 0 }
            }}>
                Showing <Box component="span" sx={{ color: '#eb0029', fontWeight: 600 }}>{startItem}-{endItem}</Box> of{' '}
                <Box component="span" sx={{ fontWeight: 600 }}>{totalItems}</Box> Results
            </Typography>

            {/* Sort Controls */}
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'flex-start', sm: 'center' },
                gap: { xs: 2, sm: '16px' },
                width: { xs: '100%', sm: 'auto' },
                order: { xs: 0, sm: 1 }
            }}>
                {/* Sort By Label */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    width: { xs: '100%', sm: 'auto' }
                }}>
                    <Typography variant="body1" sx={{
                        color: '#5c6574',
                        fontSize: { xs: '13px', sm: '14px' },
                        fontWeight: 500,
                        whiteSpace: 'nowrap'
                    }}>
                        Sort by:
                    </Typography>

                    {/* Sort Dropdown */}
                    <TextField
                        select
                        size="small"
                        value={sortOption}
                        onChange={onSortChange}
                        SelectProps={{ native: true }}
                        sx={{
                            backgroundColor: '#fff',
                            width: { xs: '100%', sm: '200px' },
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '4px',
                                '& fieldset': {
                                    borderColor: '#ddd',
                                    transition: 'border-color 0.3s ease'
                                },
                                '&:hover fieldset': {
                                    borderColor: '#eb0029',
                                    boxShadow: '0 0 0 1px #eb0029'
                                },
                            },
                            '&.Mui-focused .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#eb0029',
                                    boxShadow: '0 0 0 1px #eb0029'
                                }
                            },
                            '& .MuiSelect-select': {
                                padding: '8px 32px 8px 12px',
                                fontSize: '14px'
                            },
                            '& .MuiSvgIcon-root': {
                                color: '#eb0029',
                                right: '8px'
                            }
                        }}
                    >
                        <option value="default">Default Sorting</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="popular">Most Popular</option>
                        <option value="rating">Highest Rating</option>
                        <option value="newest">Newest Arrivals</option>
                    </TextField>
                </Box>

                {/* View Toggle */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '6px',
                    padding: '4px',
                    alignSelf: { xs: 'flex-end', sm: 'center' }
                }}>
                    <IconButton
                        onClick={() => onViewModeChange('grid')}
                        sx={{
                            color: viewMode === 'grid' ? '#ffffff' : '#5c6574',
                            backgroundColor: viewMode === 'grid' ? '#eb0029' : 'transparent',
                            padding: '6px',
                            borderRadius: '4px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                color: viewMode === 'grid' ? '#ffffff' : '#eb0029',
                                backgroundColor: viewMode === 'grid' ? '#d10022' : '#f0f0f0'
                            }
                        }}
                        aria-label="Grid view"
                    >
                        <GridViewIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                        onClick={() => onViewModeChange('list')}
                        sx={{
                            color: viewMode === 'list' ? '#ffffff' : '#5c6574',
                            backgroundColor: viewMode === 'list' ? '#eb0029' : 'transparent',
                            padding: '6px',
                            borderRadius: '4px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                color: viewMode === 'list' ? '#ffffff' : '#eb0029',
                                backgroundColor: viewMode === 'list' ? '#d10022' : '#f0f0f0'
                            }
                        }}
                        aria-label="List view"
                    >
                        <ViewListIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default ResultsHeader;