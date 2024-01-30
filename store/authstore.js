import React from "react";
import { hookstate, useHookstate } from "@hookstate/core";

export const authState = hookstate({
  isAuthenticated: false,
  isAuthenticating: false,
  isAuthError: false,
  errors: [],
  authToken: null,
  authProfile: null,
  isAuthRequired: false,
});

export const errorState = hookstate({
  authErrors: [],
});
