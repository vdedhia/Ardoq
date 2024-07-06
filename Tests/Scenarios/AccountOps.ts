import { t } from "testcafe";
import * as MenuItemSelectors from "./Components";

const TestUserDetails = {
  Email: "a@bb.ccc",
  Password: "Test@123",
};

export async function CreateAccount() {
  const SampleUser = {
    FName: "First Name",
    LName: "Last Name",
    EMail: `test${Math.random()}@test.com`,
    Password: "Test@123",
  };
  await t
    .click(MenuItemSelectors.LinkCreateAccount)
    .typeText(MenuItemSelectors.inputFirstName, SampleUser.FName, { paste: true, replace: true })
    .typeText(MenuItemSelectors.inputLastName, SampleUser.LName, { paste: true, replace: true })
    .typeText(MenuItemSelectors.inputEmail, SampleUser.EMail, { paste: true, replace: true })
    .typeText(MenuItemSelectors.inputSetPassword, SampleUser.Password, { paste: true, replace: true })
    .typeText(MenuItemSelectors.inputConfirmPassword, SampleUser.Password, { paste: true, replace: true })
    .click(MenuItemSelectors.buttonCreateAccount);

  return SampleUser;
}

export async function TestUserLogin() {
  await t
    .click(MenuItemSelectors.linkSignIn)
    .typeText(MenuItemSelectors.inputLoginEmail, TestUserDetails.Email)
    .typeText(MenuItemSelectors.inputLoginPassword, TestUserDetails.Password)
    .click(MenuItemSelectors.buttonSignIn);
}

export async function GoToMyAccount() {
  await t
    .click(MenuItemSelectors.UserMenuOptions.root)
    .click(MenuItemSelectors.UserMenuOptions.linkMyAccount)
    .click(MenuItemSelectors.LinkMenu.withExactText("My Orders"));
}

export async function DoCheckout() {
  if (await MenuItemSelectors.inputAddress.visible) {
    await t
      .typeText(MenuItemSelectors.inputAddress, "Test,Test")
      .typeText(MenuItemSelectors.inputCity, "Oslo")
      .click(MenuItemSelectors.dropdownCountry)
      .click(MenuItemSelectors.CountryOption.withExactText("Norway"))
      .typeText(MenuItemSelectors.inputZipCode, "0111")
      .typeText(MenuItemSelectors.inputPhoneNumber, "40440440")
      .wait(2000);
  }

  await t
    .click(MenuItemSelectors.buttonNext)
    .click(MenuItemSelectors.buttonPlaceOrder)
    .expect(MenuItemSelectors.textConfirmationHeading.exists)
    .ok()
    .expect(MenuItemSelectors.textOrderNumber.exists)
    .ok();
}
