import React, { useState, useEffect, useMemo } from "react";
import {
  Box,
  Grid,
  useTheme,
  CircularProgress,
  Typography,
} from "@mui/material";
import Sidebar from "../pages/Productspage/Sidebar";
import ProductCard from "../pages/Productspage/ProductCard";
import { products } from "../productsAssets";
import Pagination from "./PaginationsCode/Pagination";
import ResultsHeader from "../pages/Productspage/ResultsHeader";
import ProductListCard from "../pages/Productspage/ProductListCard";

const Transitioneye = () => {
  const theme = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [sortOption, setSortOption] = useState("default");
  const [viewMode, setViewMode] = useState("grid");
  const itemsPerPage = viewMode === "grid" ? 12 : 6;

  // Create extended product list with popularity and rating
  const allProducts = useMemo(() => {
    return [...products, ...products, ...products.slice(0, 6)].map(
      (product, index) => ({
        ...product,
        popularity: Math.floor(Math.random() * 1000),
        rating: (Math.random() * 5).toFixed(1),
        originalIndex: index,
      })
    );
  }, []);

  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [filters, setFilters] = useState({
    searchTerm: "",
    priceRange: [0, 400],
    categories: [],
    tags: [],
  });

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Filter and sort products whenever filters or sortOption changes
  useEffect(() => {
    setIsLoading(true);

    let result = [...allProducts];

    // Apply search filter
    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      result = result.filter((product) =>
        product.title.toLowerCase().includes(term)
      );
    }

    // Apply price filter
    result = result.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );

    // Apply category filter
    if (filters.categories.length > 0) {
      result = result.filter((product) =>
        filters.categories.includes(product.categoryId)
      );
    }

    // Apply tag filter
    if (filters.tags.length > 0) {
      result = result.filter(
        (product) =>
          product.tags && product.tags.some((tag) => filters.tags.includes(tag))
      );
    }

    // Apply sorting
    switch (sortOption) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "popular":
        result.sort((a, b) => b.popularity - a.popularity);
        break;
      case "rating":
        result.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        break;
      default:
        result.sort((a, b) => a.originalIndex - b.originalIndex);
    }

    setFilteredProducts(result);
    setCurrentPage(1);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [filters, sortOption, allProducts]);

  // Get current products
  const currentProducts = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  }, [currentPage, filteredProducts, itemsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
    setCurrentPage(1);
  };

  // Filter handlers
  const handleSearch = (searchTerm) => {
    setFilters((prevFilters) => ({ ...prevFilters, searchTerm }));
  };

  const handlePriceFilter = (priceRange) => {
    setFilters((prevFilters) => ({ ...prevFilters, priceRange }));
  };

  const handleCategoryFilter = (categories) => {
    setFilters((prevFilters) => ({ ...prevFilters, categories }));
  };

  const handleTagFilter = (tags) => {
    setFilters((prevFilters) => ({ ...prevFilters, tags }));
  };

  return (
    <Box
      sx={{
        padding: { xs: "0px 10px", sm: "0px 15px" },
        backgroundColor: "#F1EEE7",
        paddingTop: { xs: "80px", sm: "120px" },
        paddingBottom: { xs: "60px", sm: "120px" },
        [theme.breakpoints.down("lg")]: {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
        },
      }}
    >
      <Grid container spacing={4} sx={{ maxWidth: "1536px", margin: "0 auto" }}>
        {/* Sidebar Column */}
        <Grid
          item
          xl={3}
          lg={4}
          md={12}
          sx={{ display: { xs: "none", md: "block" } }}
          order={{ xs: 2, lg: 1 }}
        >
          <Sidebar
            onSearch={handleSearch}
            onPriceFilter={handlePriceFilter}
            onCategoryFilter={handleCategoryFilter}
            onTagFilter={handleTagFilter}
            initialFilters={filters}
          />
        </Grid>

        {/* Products Column */}
        <Grid
          item
          xl={9}
          lg={8}
          md={12}
          xs={12}
          order={{ xs: 1 }}
          sx={{
            width: {
              xl: "73%",
              lg: "73%",
              md: "100%",
              xs: "100%",
            },
            px: { xs: 1, sm: 0 },
          }}
        >
          <ResultsHeader
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={totalItems}
            sortOption={sortOption}
            onSortChange={handleSortChange}
            viewMode={viewMode}
            onViewModeChange={handleViewModeChange}
          />

          {isLoading ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
              <CircularProgress sx={{ color: "#EB0029" }} />
            </Box>
          ) : (
            <>
              {filteredProducts.length === 0 ? (
                <Box sx={{ textAlign: "center", py: 10 }}>
                  <Typography variant="h6">
                    No products found matching your criteria
                  </Typography>
                </Box>
              ) : viewMode === "grid" ? (
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "repeat(2, minmax(150px, 1fr))",
                      md: "repeat(3, minmax(180px, 1fr))",
                      lg: "repeat(4, minmax(200px, 1fr))",
                    },
                    gap: { xs: "15px", sm: "20px", md: "30px" },
                    width: "100%",
                    boxSizing: "border-box",
                    px: { xs: 1, sm: 0 },
                  }}
                >
                  {currentProducts.map((product, index) => (
                    <ProductCard
                      key={`${product.id}-${index}-${product.originalIndex}`}
                      product={product}
                      index={index}
                    />
                  ))}
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: { xs: "15px", sm: "20px", md: "30px" },
                    width: "100%",
                    boxSizing: "border-box",
                    px: { xs: 1, sm: 0 },
                  }}
                >
                  {currentProducts.map((product, index) => (
                    <ProductListCard
                      key={`${product.id}-${index}-${product.originalIndex}`}
                      product={product}
                      index={index}
                    />
                  ))}
                </Box>
              )}

              {filteredProducts.length > 0 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  sx={{
                    mt: 4,
                    "& .MuiPagination-ul": {
                      flexWrap: "nowrap",
                      overflowX: "auto",
                      paddingBottom: 1,
                    },
                  }}
                />
              )}
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Transitioneye;
