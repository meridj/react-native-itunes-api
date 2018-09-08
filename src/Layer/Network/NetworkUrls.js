"use strict";

// "https://itunes.apple.com/search?term=nekfeu&limit=25";

/**
 * All networking url used in this app
 */
class NetworkUrls {
  // ------------------------------------------------
  // - Base urls

  static get baseUrl() {
    return "https://itunes.apple.com";
  }

  // ------------------------------------------------
  // - Options

  static get action() {
    return "search?";
  }

  static get resultLimit() {
    return "limit=10";
  }

  // ------------------------------------------------
  // - Nekfeu Songs

  static get nekfeuSongs() {
    return "term=nekfeu";
  }
}

export default NetworkUrls;
