const clients = ["IKEA", "BOSCH", "ROCHE"];

export function ClientLogos() {
  return <section className="clients"><div className="container clients-inner"><span className="eyebrow">Selected project partners</span><div className="logo-track" aria-label="Selected customers">{[...clients, ...clients].map((client, index) => <div className={`client-wordmark client-${client.toLowerCase()}`} key={`${client}-${index}`}>{client}</div>)}</div><p>Confirm public-display authorization for customer marks before launch.</p></div></section>;
}
