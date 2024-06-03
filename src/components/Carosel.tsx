import { FC, ReactElement, useState } from "react";

import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { Box, BoxProps, Slide, Stack } from "@mui/material";

import { IconButtonCircle } from "./Button";

export interface ICaroselProps extends BoxProps {
  itemList: ReactElement[]; // List of items to be displayed in the carousel
  itemsPerPage?: number; // Number of items to be displayed per page
}

const Carosel: FC<ICaroselProps> = ({ itemList, itemsPerPage = 3, sx, ...props }) => {
  const [currentPage, setCurrentPage] = useState(0); // State to keep track of the current page
  const [slideDirection, setSlideDirection] = useState<"right" | "left" | undefined>("left"); // State for the direction that the cards will slide in

  // Handler for navigating to the next and prev page
  const handleNextPage = () => {
    setSlideDirection("left");
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handlePrevPage = () => {
    setSlideDirection("right");
    setCurrentPage((prevPage) => prevPage - 1);
  };

  if (itemList.length <= 0) return;

  return (
    <Box
      {...props}
      sx={{
        ...{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          gap: 2,
        },
        ...sx,
      }}
    >
      {/* Previous Page Button */}
      {currentPage !== 0 && (
        <IconButtonCircle color="secondary" variant="contained" onClick={handlePrevPage} disabled={currentPage === 0}>
          <ArrowBack />
        </IconButtonCircle>
      )}

      <Box sx={{ width: "100%", height: "100%" }}>
        {/* this is the box that holds the cards and the slide animation*/}
        {itemList.map((_, index) => (
          <Box
            key={`item-${index}`}
            sx={{
              width: "100%",
              height: "100%",
              display: currentPage === index ? "block" : "none",
            }}
          >
            {/* this is the slide animation that will be used to slide the cards in and out*/}
            <Slide direction={slideDirection} in={currentPage === index}>
              <Stack
                spacing={3}
                direction="row"
                alignContent="center"
                justifyContent="flex-start"
                sx={{ width: "100%", height: "100%" }}
              >
                {/* this slices the cards array to only display the amount you have previously determined per page*/}
                {itemList.slice(index * itemsPerPage, index * itemsPerPage + itemsPerPage)}
              </Stack>
            </Slide>
          </Box>
        ))}
      </Box>

      {/* Next Page Button */}
      {currentPage < Math.ceil((itemList.length || 0) / itemsPerPage) - 1 && (
        <IconButtonCircle
          color="secondary"
          variant="contained"
          onClick={handleNextPage}
          disabled={currentPage >= Math.ceil((itemList.length || 0) / itemsPerPage) - 1}
        >
          <ArrowForward />
        </IconButtonCircle>
      )}
    </Box>
  );
};

export default Carosel;
