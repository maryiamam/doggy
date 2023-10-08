import { AlertColor, Slide, Snackbar } from "@mui/material";
import { forwardRef } from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import "./Notification.scss";

export interface NotificationProps {
  open: boolean;
  severity: AlertColor;
  message: string;
  onClose: () => void;
}

export const defaultNotification: NotificationProps = {
  open: false,
  severity: "success",
  message: "",
  onClose: () => {},
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notification = ({
  open,
  severity,
  message,
  onClose,
}: NotificationProps) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    onClose();
  };

  return (
    <Snackbar
      className="notification"
      open={open}
      onClose={handleClose}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      TransitionComponent={(props) => <Slide {...props} direction="up" />}
    >
      <Alert className="alert" onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
