import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Noflights from "../assets/no-flight.png";

export default function FlightResultsAccordion({
  flights,
}: {
  flights: any[];
}) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  // Function to handle Snackbar close
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  // useEffect to check if flights is an array
  useEffect(() => {
    if (!Array.isArray(flights)) {
      setSnackbarMessage("Invalid flight data.");
      setSnackbarOpen(true);
    }
  }, [flights]);

  if (!Array.isArray(flights)) {
    return null;
  }

  if (flights.length === 0) {
    return (
      <div>
        <img className="m-auto" src={Noflights} alt="no-flights" />
      </div>
    );
  }

  return (
    <Stack className="mx-8 lg:mx-24" spacing={2}>
      {flights.map((flight: any, index: number) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              {flight.departureDate} - {flight.price} USD
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <strong>Departure:</strong> {flight.departureTime} from{" "}
              {flight.origin}
              <br />
              <strong>Arrival:</strong> {flight.arrivalTime} at{" "}
              {flight.destination}
              <br />
              <strong>Duration:</strong> {flight.duration}
              <br />
              <strong>Airline:</strong> {flight.airline}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Snackbar for error handling */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
