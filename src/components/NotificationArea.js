/**
 * @file NotificationArea container module
 * @author Theodor Shaytanov <theodor.shaytanov@gmail.com>
 * @created 25.01.18
 */

import CloseIcon from "material-ui-icons/Close";
import IconButton from "material-ui/IconButton";
import PropTypes from "prop-types";
import React from "react";
import Snackbar from "material-ui/Snackbar";

class NotificationArea extends React.PureComponent {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired
  };

  render() {
    return (
      <Snackbar
        SnackbarContentProps={{
          "aria-describedby": "message-id"
        }}
        action={[
          <IconButton
            aria-label="Close"
            color="inherit"
            key="close"
            onClick={this.props.handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        message={<span>{this.props.message}</span>}
        open={this.props.open}
      />
    );
  }
}

export default NotificationArea;
