export async function sendContactForm(data) {
  return fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  });
}
