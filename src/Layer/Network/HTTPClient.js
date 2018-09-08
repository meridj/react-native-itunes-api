"use strict";

/**
 * Npm imports
 */
import axios from "axios";

/**
 * Local imports
 */
import NetworkUrls from "./NetworkUrls";

const HttpClient = axios.create({
  baseURL: NetworkUrls.baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

export default HttpClient;
