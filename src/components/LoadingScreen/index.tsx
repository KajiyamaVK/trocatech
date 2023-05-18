import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

interface ILoadingScreenProps {
  state: boolean;
}

export default function LoadingScreen({ state }: ILoadingScreenProps) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={state}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
