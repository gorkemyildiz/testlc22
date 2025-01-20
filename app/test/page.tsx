import { headers } from "next/headers";

export default async function HomePage() {
  // Middleware tarafından eklenen header'ı al
  const headersList = headers();
  const country = headersList.get("x-geo-country") || "Bilinmiyor";
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0] ||
    headersList.get("x-real-ip") ||
    "127.0.0.1";

  const res = await fetch(`http://ip-api.com/json/${ip}`);
  const geo = await res.json();
  console.log("geo", geo);

  return (
    <div className="mt-40">
      <h1>Kullanıcı Lokasyonu</h1>
      <p>Ülke: {country}</p>
      <p>IP: {ip}</p>
    </div>
  );
}
