export default async function handler(req, res) {

  const owner = "Jit-codes-ez";
  const repo = "SathiSitePrivate";
  const branch = "main";

  const path = req.query.path;

  if (!path) {
    return res.status(400).send("Path missing");
  }

  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;

  try {

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json"
      }
    });

    if (!response.ok) {
      const err = await response.text();
      return res.status(response.status).send(err);
    }

    const data = await response.json();

    // 🔥 SAFETY CHECK
    if (!data.content) {
      return res.status(500).send("No file content received from GitHub");
    }

    const buffer = Buffer.from(data.content, "base64");

    const ext = path.split(".").pop().toLowerCase();

    const mime =
      ext === "png"
        ? "image/png"
        : ext === "webp"
        ? "image/webp"
        : "image/jpeg";

    res.setHeader("Content-Type", mime);
    res.setHeader("Content-Disposition", "inline");

    res.send(buffer);

  } catch (err) {
    res.status(500).send(err.message);
  }
}