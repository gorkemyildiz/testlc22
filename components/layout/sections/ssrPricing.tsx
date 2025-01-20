import { PricingSection } from "./pricing";
import { headers } from "next/headers";

export default async function SsrPricing() {
  const headersList = headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0] ||
    headersList.get("x-real-ip") ||
    "127.0.0.1";

  const res = await fetch(`http://ip-api.com/json/${ip}`);
  const geo = await res.json();

  return <PricingSection country={geo.countryCode} />;
}
