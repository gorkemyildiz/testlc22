import { PricingSection } from "./pricing";
import { headers } from "next/headers";

export default async function SsrPricing() {
  // Middleware tarafından eklenen header'ı al
  const headersList = headers();
  const country = headersList.get("x-geo-country") || "Bilinmiyor";
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0] ||
    headersList.get("x-real-ip") ||
    "127.0.0.1";

  console.log(ip);

  const res = await fetch(`http://ip-api.com/json/${ip}`);
  const geo = await res.json();

  return <PricingSection country={geo.countryCode} />;
}
