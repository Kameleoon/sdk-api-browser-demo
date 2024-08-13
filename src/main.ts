import { SDK } from "./sdk";
import { showMessage, showPopup } from "./popup";

const SITE_CODE = "my_site_code";
const USER_ID = "my_user_id";
const CUSTOM_DATA_INDEX = 1;
const CUSTOM_DATA_VALUE = "my_custom_data_value";
const FEATURE_KEY = "my_feature_key";

async function main() {
  const sdk = new SDK(SITE_CODE, USER_ID);

  await sdk.setCustomData(CUSTOM_DATA_INDEX, CUSTOM_DATA_VALUE);
  const variation = await sdk.getVariation(FEATURE_KEY);

  showMessage(variation);

  if (variation === "on") {
    showPopup();
  }
}

main();
