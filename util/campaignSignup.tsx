export const signup = async (
  campaignId: string,
  email: string,
  name?: string
) => {
  if (!email || email.length < 3) return;

  const c = encodeURIComponent(campaignId);
  const e = encodeURIComponent(email);
  const n = encodeURIComponent(name || "");

  console.log(c, e, n);

  const response = await fetch(
    `https://campaigns.parlour.dev/signup?email=${e}&name=${n}&campaign=${c}`,
    {
      method: "GET",
    }
  );

  return response.ok;
};
