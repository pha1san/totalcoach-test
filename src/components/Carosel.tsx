import { FC, ReactElement, useState } from "react";
import { Box, BoxProps, Slide, Stack } from "@mui/material";
import { IconButtonCircle } from "./Button";
import { ArrowForward, ArrowBack } from "@mui/icons-material";

export interface ICaroselProps extends BoxProps {
  itemList: ReactElement[];
  itemsPerPage?: number;
}

const Carosel: FC<ICaroselProps> = ({ itemList, itemsPerPage = 3, sx, ...props }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"right" | "left" | undefined>("left");

  const cardsPerPage = 3;

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
      {currentPage !== 0 && (
        <IconButtonCircle color="secondary" variant="contained" onClick={handlePrevPage} disabled={currentPage === 0}>
          <ArrowBack />
        </IconButtonCircle>
      )}
      <Box sx={{ width: "100%", height: "100%" }}>
        {itemList.map((_feed, index) => (
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
                {itemList.slice(index * cardsPerPage, index * cardsPerPage + cardsPerPage)}
              </Stack>
            </Slide>
          </Box>
        ))}
      </Box>
      {currentPage < Math.ceil((itemList.length || 0) / cardsPerPage) - 1 && (
        <IconButtonCircle
          color="secondary"
          variant="contained"
          onClick={handleNextPage}
          disabled={currentPage >= Math.ceil((itemList.length || 0) / cardsPerPage) - 1}
        >
          <ArrowForward />
        </IconButtonCircle>
      )}
    </Box>
  );
};

export default Carosel;
