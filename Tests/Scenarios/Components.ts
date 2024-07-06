import { Selector } from "testcafe";

//Link elements
export const LinkCreateAccount = Selector("a").withExactText("Create an Account");
export const linkSignIn = Selector("a").withExactText("Sign In");

//Side menu items
export const LinkMenu = Selector("ul").withAttribute("class", "nav items");

//Shopping Menu
export const LinkShoppingMenu = Selector("ul").withAttribute(
  "class",
  "ui-menu ui-widget ui-widget-content ui-corner-all"
);
export const ShoppingMenuItems = {
  WhatNew: Selector("li").withText("What's New"),
  Women: Selector("li").withText("Women"),
  Men: Selector("li").withText("Men"),
  Gear: Selector("li").withText("Gear"),
  Training: Selector("li").withText("Training"),
  Sale: Selector("li").withText("Sale"),
};
export const ShoppingMenuSubItems = {
  Tops: Selector("span").withText("Tops").filterVisible(),
  Bottoms: Selector("span").withText("Bottoms").filterVisible(),
  Bags: Selector("span").withText("Bags").filterVisible(),
  FitnessEquip: Selector("span").withText("Fitness Equipment").filterVisible(),
  Watches: Selector("span").withText("Watches").filterVisible(),
  VideoDownload: Selector("span").withText("Video Download").filterVisible(),
};
export const TopsMenuSubItems = {
  Jackets: Selector("span").withText("Jackets").filterVisible(),
  Hoodies: Selector("span").withText("Hoodies & Sweatshirts").filterVisible(),
  Tees: Selector("span").withText("Tees").filterVisible(),
  Bra: Selector("span").withText("Bras & Tanks").filterVisible(),
  Tanks: Selector("span").withText("Tanks").filterVisible(),
};
export const BottomsMenuSubItems = {
  Pants: Selector("span").withText("Pants").filterVisible(),
  Shorts: Selector("span").withText("Shorts").filterVisible(),
};

export const ShoppingItemName = Selector("a").withAttribute("class", "product-item-link");
export const ShoppingItemSize = Selector("div").withAttribute("class", "swatch-option text");
export const ShoppingItemColor = Selector("div").withAttribute("class", "swatch-option color");

//Texts
export const textHeading = Selector("h1").withAttribute("class", "page-title");
export const textContactInformation = Selector("div").withAttribute("class", "box box-information");

//Textbox elements
export const inputFirstName = Selector("input").withAttribute("id", "firstname");
export const inputLastName = Selector("input").withAttribute("id", "lastname");
export const inputEmail = Selector("input").withAttribute("id", "email_address");
export const inputSetPassword = Selector("input").withAttribute("id", "password");
export const inputConfirmPassword = Selector("input").withAttribute("id", "password-confirmation");

export const inputLoginEmail = Selector("input").withAttribute("id", "email");
export const inputLoginPassword = Selector("input").withAttribute("id", "pass");

//Buttons
export const buttonCreateAccount = Selector("button").withText("Create an Account");
export const buttonSignIn = Selector("button").withText("Sign In");
export const buttonCheckout = Selector("button").withText("Proceed to Checkout");

export const buttonAddToCart = Selector("button").withAttribute("title", "Add to Cart");
export const buttonCart = Selector("div").withAttribute("data-block", "minicart");

//Alerts
export const msgSuccess = Selector("div").withAttribute("class", "messages");

//Checkout Page
export const inputEmailAdd = Selector("input").withAttribute("id", "customer-email");
export const inputFName = Selector("input").withAttribute("name", "firstname");
export const inputLName = Selector("input").withAttribute("name", "lastname");
export const inputAddress = Selector("input").withAttribute("name", "street[0]");
export const inputCity = Selector("input").withAttribute("name", "city");
export const dropdownCountry = Selector("select").withAttribute("name", "country_id");
export const CountryOption = dropdownCountry.find("option");
export const inputZipCode = Selector("input").withAttribute("name", "postcode");
export const inputPhoneNumber = Selector("input").withAttribute("name", "telephone");
export const buttonNext = Selector("button").withText("Next");
export const buttonPlaceOrder = Selector("button").withText("Place Order");

//Receipt Page
export const textConfirmationHeading = Selector("div").withAttribute("class", "page-title-wrapper");
export const textOrderNumber = Selector("p").nth(1);

//My Orders Page
export const tableOrder = Selector("table");
export const linkViewOrder = Selector("a").withExactText("View Order");
export const textOrder = textHeading;
export const textOrderStatus = Selector("span").withAttribute("class", "order-status");
export const textProductPrice = Selector("span").withAttribute("class", "price");
export const textGrandTotal = Selector("tr").withAttribute("class", "grand_total");
