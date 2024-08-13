export class SDK {
  private siteCode: string;
  private userId: string;
  private baseUrl = "https://customers.kameleoon.com";

  constructor(siteCode: string, userId: string) {
    this.siteCode = siteCode;
    this.userId = userId;
  }

  async setCustomData(index: number, value: string): Promise<void> {
    const customDataUrl =
      this.baseUrl +
      "/apisdk/setCustomData" +
      "?siteCode=" +
      this.siteCode +
      "&userID=" +
      this.userId +
      "&customDataID=" +
      index +
      "&value=" +
      value;

    await fetch(customDataUrl);
  }

  async getVariation(featureKey: string): Promise<string> {
    const variationUrl =
      this.baseUrl +
      "/apisdk/getFeatureVariationKey" +
      "?siteCode=" +
      this.siteCode +
      "&userID=" +
      this.userId +
      "&featureKey=" +
      featureKey;

    const res = await fetch(variationUrl);
    const data = await res.json();

    return data.variationKey;
  }
}
