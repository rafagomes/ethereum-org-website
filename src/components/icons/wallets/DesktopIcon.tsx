import * as React from "react"
import { createIcon } from "@chakra-ui/react"

import { commonIconDefaultProps } from "../utils"

export const DesktopIcon = createIcon({
  displayName: "DesktopIcon",
  viewBox: "0 0 256 256",
  defaultProps: {
    width: "256px",
    height: "256px",
    ...commonIconDefaultProps,
  },
  path: [
    <path d="M52.67 183C46.7771 183 42 178.222 42 172.329V63.6705C42 57.7776 46.7776 53 52.6705 53H202.33C208.223 53 213 57.7776 213 63.6705V172.33C213 178.223 208.222 183 202.329 183H52.67ZM52.671 152.66V63.671H202.329V152.66H52.671Z" />,
    <path d="M90 192.665C87.0536 192.665 84.665 195.054 84.665 198C84.665 200.946 87.0536 203.335 90 203.335H163.5C166.446 203.335 168.835 200.946 168.835 198C168.835 195.054 166.446 192.665 163.5 192.665H90Z" />,
  ],
})
