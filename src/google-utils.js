// This file is for future google OAuth integration
import { google } from 'googleapis';

const googleConfig = {
  clientId: '********.apps.googleusercontent.com', // e.g. asdfghjkljhgfdsghjk.apps.googleusercontent.com
  clientSecret: '********', // e.g. _ASDFA%DFASDFASDFASD#FAD-
  redirect: 'https://aclean.space/google-auth' // this must match your google api settings
};

/**
 * Create the google auth object which gives us access to talk to google's apis.
 */
function createConnection() {
  return new google.auth.OAuth2(
    googleConfig.clientId,
    googleConfig.clientSecret,
    googleConfig.redirect
  );
}