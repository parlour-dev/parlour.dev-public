export const contact = async (message: string, email: string, name: string) => {
  if (!email || email.length < 3) return;
  if (!name || name.length < 3) return;
  if (!message || message.length < 3) return;

  const m = encodeURIComponent(message);
  const e = encodeURIComponent(email);
  const n = encodeURIComponent(name);

  const response = await fetch(
    `https://campaigns.parlour.dev/contact?email=${e}&name=${n}&message=${m}`,
    {
      method: "GET",
    }
  );

  return response.ok;
};
