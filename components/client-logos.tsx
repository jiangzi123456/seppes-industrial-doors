import Image from "next/image";

const clients = [
  { name: "Fujitsu", logo: "/images/clients/fujitsu.webp" },
  { name: "Pepsi", logo: "/images/clients/pepsi.webp" },
  { name: "Panasonic", logo: "/images/clients/panasonic.webp" },
  { name: "Valeo", logo: "/images/clients/valeo.webp" },
  { name: "Micron", logo: "/images/clients/micron.webp" },
  { name: "Dow", logo: "/images/clients/dow.webp" },
  { name: "Magna", logo: "/images/clients/magna.webp" },
];

export function ClientLogos() {
  return <section className="clients"><div className="container clients-inner"><span className="eyebrow">Selected project partners</span><div className="logo-track" aria-label="Selected customers">{[...clients, ...clients].map((client, index) => <div className="client-wordmark" aria-hidden={index >= clients.length} key={`${client.name}-${index}`}><Image src={client.logo} alt={index < clients.length ? `${client.name} logo` : ""} width={220} height={76} sizes="220px" /></div>)}</div><p>Representative customers from our global industrial project portfolio.</p></div></section>;
}
