import React from "react";
import { hookstate, useHookstate } from "@hookstate/core";

export const premiumStore = hookstate({
  user: "",
  orderId: "", // unix date
  price: "",
  orderType: "",
  packageType: "",
  packageName: "",
  logoType: "",
  colorPalette: "",
  extraColorRequirement: "",
  extraColorAttachment: "",
  brandStyle: {
    classic: "",
    modern: "",
    accessible: "",
    premium: "",
    simple: "",
    serious: "",
    fun: "",
    sophisticated: "",
    traditional: "",
    innovative: "",
  },
  logoName: "",
  slogan: "",
  industry: "",
  audianceInfo: "",
  fontInfo: "",
  fontAttchment: "",
  extraInfo: "",
  extraAttachment: "",
  status: "",
  createdAt: "",
  updatedAt: "",
});
