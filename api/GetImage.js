export default async function handler(req, res) {

  const path = req.query.path;

  const response = await fetch(
    `https://api.github.com/repos/Jit-codes-ez/SathiSitePrivate/${path}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3.raw"
      }
    }
  );

  if (!response.ok) {

    const error = await response.text();

    return res.status(response.status).send(error);
  }

  const buffer = Buffer.from(await response.arrayBuffer());

  res.setHeader(
    "Content-Type",
    response.headers.get("content-type")
  );

  res.send(buffer);
}