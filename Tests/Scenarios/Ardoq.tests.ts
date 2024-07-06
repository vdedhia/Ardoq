import { RequestLogger } from "testcafe";
import { MagnetoHomePage } from "../Helpers/URLs";
import { CreateAccount, DoCheckout, TestUserLogin } from "./AccountOps";
import * as MenuItemSelectors from "./Components";

const networkLogger = RequestLogger("https://magento.softwaretestingboard.com/checkout/onepage/success/", {
  logRequestBody: true,
  logResponseBody: true,
  stringifyResponseBody: true,
});

fixture(`Testing Ardoq scenarios`).page(MagnetoHomePage).requestHooks(networkLogger);

//-----Test cases-----\\
test("Verify User is able to load the landing page", async (t) => {
  await t.expect(MenuItemSelectors.linkSignIn.exists).ok().expect(MenuItemSelectors.LinkCreateAccount.exists).ok();
});

test("Verify User is able to fill up Account creation form", async (t) => {
  await CreateAccount();

  await t
    .expect(MenuItemSelectors.textContactInformation.exists)
    .ok()
    .expect(MenuItemSelectors.buttonCreateAccount.exists)
    .notOk()
    .expect(MenuItemSelectors.msgSuccess.textContent)
    .contains("Thank you for registering");
});

test("Verify correct User is able to login into the Account recently created", async (t) => {
  const AccountDetails = await CreateAccount();

  await t
    .expect(MenuItemSelectors.textContactInformation.exists)
    .ok()
    .expect(MenuItemSelectors.textContactInformation.textContent)
    .contains(AccountDetails.FName)
    .expect(MenuItemSelectors.textContactInformation.textContent)
    .contains(AccountDetails.LName)
    .expect(MenuItemSelectors.textContactInformation.textContent)
    .contains(AccountDetails.EMail);
});

test("Verify User is able to place the order", async (t) => {
  await TestUserLogin();

  const JacketToBasket = MenuItemSelectors.ShoppingItemName.withExactText("Beaumont Summit Kit");
  const TeeToBasket = MenuItemSelectors.ShoppingItemName.withExactText("Strike Endurance Tee");

  //Add Jacket to basket
  await t
    .expect(MenuItemSelectors.LinkShoppingMenu.exists)
    .ok()
    .hover(MenuItemSelectors.ShoppingMenuItems.Men)
    .hover(MenuItemSelectors.ShoppingMenuSubItems.Tops)
    .click(MenuItemSelectors.TopsMenuSubItems.Jackets)
    .scroll("bottom")
    .hover(JacketToBasket)
    .click(JacketToBasket.parent(1).child(3).child(0).child().child().withExactText("L"))
    .click(JacketToBasket.parent(1).child(3).child(1).child().child().withAttribute("option-label", "Red"))
    .hover(JacketToBasket)
    .click(MenuItemSelectors.buttonAddToCart)
    .wait(2000)
    .expect(MenuItemSelectors.msgSuccess.exists)
    .ok();

  //Add Tee to basket
  await t
    .hover(MenuItemSelectors.ShoppingMenuItems.Men)
    .hover(MenuItemSelectors.ShoppingMenuSubItems.Tops)
    .click(MenuItemSelectors.TopsMenuSubItems.Tees)
    .scroll("bottom")
    .hover(TeeToBasket)
    .click(TeeToBasket.parent(1).child(3).child(0).child().child().withExactText("L"))
    .click(TeeToBasket.parent(1).child(3).child(1).child().child().withAttribute("option-label", "Black"))
    .hover(TeeToBasket)
    .click(MenuItemSelectors.buttonAddToCart)
    .wait(2000)
    .expect(MenuItemSelectors.msgSuccess.exists)
    .ok()
    .click(MenuItemSelectors.buttonCart)
    .click(MenuItemSelectors.buttonCheckout);

  await DoCheckout();

  await t.expect(networkLogger.contains((record) => record.response.statusCode === 200)).ok();
});

test("Verify correct order is placed", async (t) => {
  await TestUserLogin();

  await t
    .click(MenuItemSelectors.LinkMenu.withExactText("My Orders"))
    .click(MenuItemSelectors.linkViewOrder)
    .expect(MenuItemSelectors.textOrder.exists)
    .ok()
    .expect(MenuItemSelectors.textOrderStatus.textContent)
    .contains("Pending")
    .expect(MenuItemSelectors.textProductPrice.count)
    .eql(2)
    .expect(MenuItemSelectors.textGrandTotal.visible)
    .ok();
});
