export default async function handler(req, res) {

  const path = req.query.path;

  const token = process.env.GITHUB_TOKEN;

  const url =
    `https://api.github.com/repos/Jit-codes-ez/SathiSitePrivate/contents/${path}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `token ${token}`,
      Accept: "application/vnd.github.v3.raw"
    }
  });

  if (!response.ok) {

    return res.status(404).send("Image not found");
  }

  const buffer = await response.arrayBuffer();

  res.setHeader(
    "Content-Type",
    response.headers.get("content-type")
  );
  

  res.send(Buffer.from(buffer));
}