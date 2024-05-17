import { Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { Container, Stack } from "@mui/system";

const NotFoundScreen = () => {
  return (
    <Stack>
      <Container
        sx={{
          display: "flex",
          marginTop: 2,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: grey[300],
        }}
      >
        <Typography sx={{ padding: 4, color: red[400], fontWeight: "bold" }}>
          Page Not Found
        </Typography>
      </Container>
    </Stack>
  );
};

export default NotFoundScreen;
