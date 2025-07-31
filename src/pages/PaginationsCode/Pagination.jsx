import React, { useState, useEffect } from 'react';
import { Box, Button, IconButton, useMediaQuery, useTheme, CircularProgress } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    pageLimit = 3,
    totalItems = 0
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [loading, setLoading] = useState(false);

    // Smooth scroll to top on page change
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [currentPage]);

    // Get exactly 3 page numbers centered around current page
    const getPageNumbers = () => {
        if (totalPages <= 3) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        let pages = [];

        // Always show first page if we're near the start
        if (currentPage <= 2) {
            pages = [1, 2, 3];
        }
        // Always show last page if we're near the end
        else if (currentPage >= totalPages - 1) {
            pages = [totalPages - 2, totalPages - 1, totalPages];
        }
        // Show current page with one before and one after
        else {
            pages = [currentPage - 1, currentPage, currentPage + 1];
        }

        return pages;
    };

    const handlePageChange = async (newPage) => {
        if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;

        setLoading(true);
        try {
            await onPageChange(newPage);
        } finally {
            setLoading(false);
        }
    };

    // Calculate start and end item numbers
    const startItem = (currentPage - 1) * pageLimit + 1;
    const endItem = Math.min(currentPage * pageLimit, totalItems);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px', // Increased gap
            marginTop: '80px',
            transition: 'all 0.3s ease',
        }}>
            {/* Items count info */}
            {totalItems > 0 && (
                <Box sx={{
                    color: '#5c6574',
                    fontSize: isMobile ? '1rem' : '1.25rem', // Larger font
                    opacity: loading ? 0.5 : 1,
                    transition: 'opacity 0.3s ease'
                }}>
                    Showing {startItem}-{endItem} of {totalItems} items
                </Box>
            )}

            {/* Pagination controls */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: isMobile ? '8px' : '12px', // Increased gap
                position: 'relative',
                '& .MuiButton-root': {
                    minWidth: isMobile ? '48px' : '56px', // Larger buttons
                    height: isMobile ? '48px' : '56px', // Larger buttons
                    padding: '0',
                    borderRadius: '50%',
                    color: '#5c6574',
                    fontWeight: 600,
                    fontSize: isMobile ? '1rem' : '1.25rem', // Larger font
                    transition: 'all 0.3s ease',
                    border: '2px solid #e0e0e0', // Thicker border
                    backgroundColor: '#fff',
                    '&.active': {
                        backgroundColor: '#EB0029',
                        color: '#fff !important',
                        boxShadow: '0 4px 12px rgba(235, 0, 41, 0.3)', // More prominent shadow
                        transform: 'translateY(-2px) scale(1.05)', // Slight scale up
                        border: 'none',
                    },
                    '&:hover:not(.active)': {
                        backgroundColor: '#EB0029',
                        color: '#fff !important',
                        transform: 'translateY(-2px) scale(1.05)', // Slight scale up
                        borderColor: '#EB0029',
                    },
                },
                '& .MuiIconButton-root': {
                    color: '#000',
                    width: isMobile ? '48px' : '56px', // Larger buttons
                    height: isMobile ? '48px' : '56px', // Larger buttons
                    borderRadius: '50%',
                    backgroundColor: '#fff',
                    border: '2px solid #e0e0e0', // Thicker border
                    transition: 'all 0.3s ease',
                    '& svg': {
                        fontSize: isMobile ? '1.5rem' : '1.75rem', // Larger icons
                    },
                    '&:hover:not(:disabled)': {
                        backgroundColor: '#EB0029',
                        color: '#fff',
                        borderColor: '#EB0029',
                        transform: 'scale(1.05)', // Slight scale up
                    },
                    '&:disabled': {
                        opacity: 0.5,
                        backgroundColor: '#f5f5f5',
                    },
                },
            }}>
                <IconButton
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1 || loading}
                    aria-label="previous page"
                >
                    <ChevronLeftIcon />
                </IconButton>

                {loading ? (
                    <CircularProgress size={32} sx={{ mx: 3 }} /> // Larger spinner
                ) : (
                    getPageNumbers().map((page) => (
                        <Button
                            key={page}
                            className={page === currentPage ? 'active' : ''}
                            onClick={() => handlePageChange(page)}
                            disabled={loading}
                            aria-current={page === currentPage ? 'page' : undefined}
                        >
                            {page}
                        </Button>
                    ))
                )}

                <IconButton
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages || loading}
                    aria-label="next page"
                >
                    <ChevronRightIcon />
                </IconButton>
            </Box>

            {/* Page indicator for context */}
            {totalPages > 3 && (
                <Box sx={{
                    color: '#5c6574',
                    fontSize: isMobile ? '0.875rem' : '1rem', // Larger font
                    opacity: 0.8,
                    mt: -1
                }}>
                    Page {currentPage} of {totalPages}
                </Box>
            )}
        </Box>
    );
};

export default React.memo(Pagination);