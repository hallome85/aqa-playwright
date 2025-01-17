import { SalesPortalPage } from "../salesPortal.page";

export class CustomersListPage extends SalesPortalPage {
  uniqueElement = '//h2[text()="Customers List "]';

  readonly "Add New Customer button" = "button.page-title-header";
  readonly "Edit button by table row" = (customer: string) =>
    `${this["Table row selector"](customer)}//button[@title="Edit"]`;
  readonly "Empty table message" = "td.fs-italic";
  readonly "Filter Button" = "#filter";
  readonly "Exact Checkbox" = (country: string) =>
    `${this["Checkbox selector"](country)}//".form-check.mb-0.d-width"]`;

  async clickOnAddNewCustomer() {
    await this.click(this["Add New Customer button"]);
  }

  async clickOnEditCustomer(customerName: string) {
    await this.click(this["Edit button by table row"](customerName));
  }

  async getEmptyTableMessage() {
    return this.getText(this["Empty table message"]);
  }

  async clickOnFilter() {
    await this.click(this["Filter Button"]);
  }

  // async clickOnCheckbox(countryName: string) {
  //   await this.click(this["Exact Checkbox"](countryName));
  // }
}