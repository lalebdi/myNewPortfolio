import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Facebook = ({ userName }) => (
  <CircleIcon href={`https://drive.google.com/file/d/1eygRU4drntbNeJoTTxmwnPCkmqFZt5U2/${userName}`} iconName="FacebookIcon" />
);

Facebook.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Facebook;


