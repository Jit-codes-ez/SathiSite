export default async function handler(req, res) {

  const owner = "Jit-codes-ez";
  const repo = "SathiSitePrivate";
  const branch = "main";

  // get image path from URL
  const path = req.query.path;

  const url =
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;

  try {

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3.raw"
      }
    });

    if (!response.ok) {

      const errorText = await response.text();

      return res.status(response.status).send(errorText);
    }

    const buffer =
      Buffer.from(await response.arrayBuffer());

    res.setHeader(
      "Content-Type",
      response.headers.get("content-type")
    );

    res.send(buffer);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });
  }
}