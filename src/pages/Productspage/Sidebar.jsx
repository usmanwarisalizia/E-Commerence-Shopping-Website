import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Chip,
  Slider,
  Input,
  CardMedia,
  useTheme,
  useMediaQuery,
  Collapse,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";
import {
  Search as SearchIcon,
  Star,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
import { recentItems, tags, products } from "../../productsAssets";
import SectionTitle from "../Productspage/SectionTitle";

// Define categories based on product types
const categories = [
  { id: 1, name: "Eyeglasses", count: 8 },
  { id: 2, name: "Sunglasses", count: 7 },
  { id: 3, name: "Reading Glasses", count: 3 },
  { id: 4, name: "Computer Glasses", count: 2 },
  { id: 5, name: "Designer Frames", count: 5 },
];

const Sidebar = ({
  onSearch,
  onPriceFilter,
  onCategoryFilter,
  onTagFilter,
  initialFilters = {},
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [priceRange, setPriceRange] = useState([0, 400]);
  const [minPriceInput, setMinPriceInput] = useState(0);
  const [maxPriceInput, setMaxPriceInput] = useState(400);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState(
    initialFilters.categories || []
  );
  const [selectedTags, setSelectedTags] = useState(initialFilters.tags || []);
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    tags: true,
    price: true,
    recent: true,
    search: true,
  });

  // Initialize with default values or from props
  useEffect(() => {
    if (initialFilters.priceRange) {
      setPriceRange(initialFilters.priceRange);
      setMinPriceInput(initialFilters.priceRange[0]);
      setMaxPriceInput(initialFilters.priceRange[1]);
    }
    if (initialFilters.searchTerm) {
      setSearchTerm(initialFilters.searchTerm);
    }
    if (initialFilters.categories) {
      setSelectedCategories(initialFilters.categories);
    }
    if (initialFilters.tags) {
      setSelectedTags(initialFilters.tags);
    }
  }, [initialFilters]);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
    setMinPriceInput(newValue[0]);
    setMaxPriceInput(newValue[1]);
  };

  const handleMinInputChange = (e) => {
    const value = Math.min(Number(e.target.value), priceRange[1] - 1);
    setMinPriceInput(value);
    setPriceRange([value, priceRange[1]]);
  };

  const handleMaxInputChange = (e) => {
    const value = Math.max(Number(e.target.value), priceRange[0] + 1);
    setMaxPriceInput(value);
    setPriceRange([priceRange[0], value]);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  const handleKeyPress = (e) => {
    handleSearch();
  };

  const applyPriceFilter = () => {
    if (onPriceFilter) {
      onPriceFilter(priceRange);
    }
  };

  const toggleCategory = (categoryId) => {
    const newSelected = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((id) => id !== categoryId)
      : [...selectedCategories, categoryId];
    setSelectedCategories(newSelected);
    if (onCategoryFilter) {
      onCategoryFilter(newSelected);
    }
  };

  const toggleTag = (tag) => {
    const newSelected = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newSelected);
    if (onTagFilter) {
      onTagFilter(newSelected);
    }
  };

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  return (
    <Box
      sx={{
        padding: { xs: "30px 20px", sm: "40px 30px" },
        width: { xs: "100%", sm: "352px" },
        backgroundColor: "var(--white)",
        marginBottom: "30px",
        borderRadius: "16px",
        boxShadow: theme.shadows[1],
        minHeight: "800px",
        "& .MuiTypography-h6": { fontSize: "1.25rem", fontWeight: 600 },
        "& .MuiTypography-body2, & .MuiTypography-caption, & .MuiTypography-subtitle2":
          {
            fontSize: "1.05rem",
          },
      }}
    >
      {/* Search */}
      <Box sx={{ marginBottom: theme.spacing(4) }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: theme.spacing(1),
            cursor: "pointer",
          }}
          onClick={() => toggleSection("search")}
        >
          <SectionTitle>Search</SectionTitle>
          {expandedSections.search ? <ExpandLess /> : <ExpandMore />}
        </Box>
        <Collapse in={expandedSections.search}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              fullWidth
              placeholder="Search products..."
              size="small"
              sx={{
                marginRight: theme.spacing(1),
                backgroundColor: "#f4f1ea",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0px",
                  "& fieldset": { borderColor: "#ddd", borderWidth: "1px" },
                  "&:hover fieldset": { borderColor: "#aaa" },
                  "&.Mui-focused fieldset": {
                    borderColor: "#eb0029",
                    borderWidth: "1px",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  padding: "12px 16px",
                  fontSize: "1.05rem",
                },
              }}
              value={searchTerm}
              onChange={(e) => {
                const value = e.target.value;
                setSearchTerm(value);
                onSearch?.(value); // This will update products immediately, even when cleared
              }}
            />
            <Button
              variant="contained"
              onClick={handleSearch}
              sx={{
                minWidth: "auto",
                borderRadius: "0px",
                padding: theme.spacing(1.5),
                height: "44px",
                backgroundColor: "#eb0029",
                "&:hover": { backgroundColor: "#c50022" },
              }}
            >
              <SearchIcon fontSize={isMobile ? "medium" : "large"} />
            </Button>
          </Box>
        </Collapse>
      </Box>

      <Divider sx={{ marginBottom: theme.spacing(3) }} />

      {/* Categories */}
      <Box sx={{ marginBottom: theme.spacing(4) }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: theme.spacing(1),
            cursor: "pointer",
          }}
          onClick={() => toggleSection("categories")}
        >
          <SectionTitle>Categories</SectionTitle>
          {expandedSections.categories ? <ExpandLess /> : <ExpandMore />}
        </Box>
        <Collapse in={expandedSections.categories}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: theme.spacing(1),
            }}
          >
            {categories.map((category) => (
              <FormControlLabel
                key={category.id}
                control={
                  <Checkbox
                    checked={selectedCategories.includes(category.id)}
                    onChange={() => toggleCategory(category.id)}
                    color="primary"
                    size={isMobile ? "small" : "medium"}
                  />
                }
                label={
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "1.05rem",
                      color: selectedCategories.includes(category.id)
                        ? theme.palette.primary.main
                        : "inherit",
                    }}
                  >
                    {category.name} ({category.count})
                  </Typography>
                }
                sx={{
                  margin: 0,
                  "& .MuiFormControlLabel-label": { width: "100%" },
                }}
              />
            ))}
          </Box>
        </Collapse>
      </Box>

      <Divider sx={{ marginBottom: theme.spacing(3) }} />

      {/* Tags */}
      <Box sx={{ marginBottom: theme.spacing(4) }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: theme.spacing(1),
            cursor: "pointer",
          }}
          onClick={() => toggleSection("tags")}
        >
          <SectionTitle>Tags</SectionTitle>
          {expandedSections.tags ? <ExpandLess /> : <ExpandMore />}
        </Box>
        <Collapse in={expandedSections.tags}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: theme.spacing(1.5),
            }}
          >
            {tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                clickable
                variant={selectedTags.includes(tag) ? "filled" : "outlined"}
                onClick={() => toggleTag(tag)}
                sx={{
                  fontSize: "1rem",
                  padding: theme.spacing(0.5),
                  height: "auto",
                  borderRadius: "4px",
                  transition: "all 0.3s ease",
                  backgroundColor: selectedTags.includes(tag)
                    ? "#f4f1ea"
                    : "inherit",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    transform: "translateY(-2px)",
                    boxShadow: theme.shadows[2],
                  },
                  "& .MuiChip-label": {
                    padding: theme.spacing(0.5),
                  },
                }}
              />
            ))}
          </Box>
        </Collapse>
      </Box>

      <Divider sx={{ marginBottom: theme.spacing(3) }} />

      {/* Price Filter */}
      <Box sx={{ marginBottom: theme.spacing(4) }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: theme.spacing(1),
            cursor: "pointer",
          }}
          onClick={() => toggleSection("price")}
        >
          <SectionTitle>Filter By Price</SectionTitle>
          {expandedSections.price ? <ExpandLess /> : <ExpandMore />}
        </Box>
        <Collapse in={expandedSections.price}>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={400}
            sx={{
              marginBottom: theme.spacing(3),
              color: "#eb0029",
              "& .MuiSlider-thumb": {
                width: isMobile ? 20 : 24,
                height: isMobile ? 20 : 24,
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: "0px 0px 0px 8px rgba(235, 0, 41, 0.16)",
                },
              },
              "& .MuiSlider-valueLabel": {
                fontSize: "0.95rem",
                padding: theme.spacing(0.75),
                borderRadius: "4px",
              },
              "& .MuiSlider-rail": {
                height: isMobile ? 6 : 8,
              },
              "& .MuiSlider-track": {
                height: isMobile ? 6 : 8,
              },
            }}
            valueLabelFormat={(value) => `$${value}`}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: theme.spacing(2),
              flexWrap: "wrap",
              marginTop: theme.spacing(2),
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="body2"
                sx={{ marginRight: theme.spacing(1) }}
              >
                Price:
              </Typography>
              <Typography variant="body2">$</Typography>
              <Input
                value={minPriceInput}
                onChange={handleMinInputChange}
                inputProps={{ min: 0, max: 399, type: "number" }}
                sx={{
                  width: "70px",
                  margin: theme.spacing(0, 1),
                  "&:before, &:after": { borderBottom: "none !important" },
                  "& input": {
                    fontSize: "1.05rem",
                    padding: theme.spacing(1),
                  },
                }}
              />
            </Box>
            <Typography variant="body2">-</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body2">$</Typography>
              <Input
                value={maxPriceInput}
                onChange={handleMaxInputChange}
                inputProps={{ min: 1, max: 400, type: "number" }}
                sx={{
                  width: "70px",
                  margin: theme.spacing(0, 1),
                  "&:before, &:after": { borderBottom: "none !important" },
                  "& input": {
                    fontSize: "1.05rem",
                    padding: theme.spacing(1),
                  },
                }}
              />
            </Box>
            <Button
              variant="contained"
              size={isMobile ? "small" : "medium"}
              onClick={applyPriceFilter}
              sx={{
                backgroundColor: "#eb0029",
                borderRadius: "4px",
                "&:hover": { backgroundColor: "#c50022" },
                fontSize: "1rem",
                padding: theme.spacing(1, 2),
              }}
            >
              Filter
            </Button>
          </Box>
        </Collapse>
      </Box>

      <Divider sx={{ marginBottom: theme.spacing(3) }} />

      {/* Recently Viewed */}
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: theme.spacing(1),
            cursor: "pointer",
          }}
          onClick={() => toggleSection("recent")}
        >
          <SectionTitle>Recently Viewed</SectionTitle>
          {expandedSections.recent ? <ExpandLess /> : <ExpandMore />}
        </Box>
        <Collapse in={expandedSections.recent}>
          {recentItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                marginBottom: theme.spacing(3),
                "&:hover": { "& img": { transform: "scale(1.05)" } },
              }}
            >
              <Box
                sx={{
                  width: "90px",
                  height: "90px",
                  marginRight: theme.spacing(2),
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "6px",
                  flexShrink: 0,
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.name}
                  sx={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                />
                {item.regularPrice > item.offerPrice && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      backgroundColor: "error.main",
                      color: "white",
                      padding: theme.spacing(0.75, 1.5),
                      borderRadius: "0 6px 0 6px",
                      fontSize: "0.85rem",
                      fontWeight: "bold",
                    }}
                  >
                    SALE
                  </Box>
                )}
              </Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, fontSize: "1.1rem" }}
                >
                  {item.name}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    margin: theme.spacing(0.5, 0),
                  }}
                >
                  <Star
                    color="primary"
                    fontSize={isMobile ? "small" : "medium"}
                  />
                  <Typography
                    variant="caption"
                    sx={{ marginLeft: theme.spacing(0.75), fontSize: "1rem" }}
                  >
                    {item.rating}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: theme.spacing(1.5),
                    alignItems: "center",
                  }}
                >
                  {item.regularPrice > item.offerPrice ? (
                    <>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          textDecoration: "line-through",
                          fontSize: "1rem",
                        }}
                      >
                        ${item.regularPrice.toFixed(2)}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="primary"
                        sx={{
                          fontWeight: 700,
                          fontSize: "1.1rem",
                        }}
                      >
                        ${item.offerPrice.toFixed(2)}
                      </Typography>
                    </>
                  ) : (
                    <Typography
                      variant="body2"
                      color="primary"
                      sx={{
                        fontWeight: 700,
                        fontSize: "1.1rem",
                      }}
                    >
                      ${item.regularPrice.toFixed(2)}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Collapse>
      </Box>
    </Box>
  );
};

export default Sidebar;
