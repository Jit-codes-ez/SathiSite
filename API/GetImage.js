export default async function handler(req, res) {

  const filePath = req.query.path;

  const response = await fetch(
    `https://api.github.com/repos/Jit-codes-ez/SathiSitePrivate/contents/${filePath}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3.raw"
      }
    }
  );

  if (!response.ok) {
    return res.status(404).send("Image not found");
  }

  const buffer = await response.arrayBuffer();

  res.setHeader("Content-Type", "image/jpeg");

  res.send(Buffer.from(buffer));
}