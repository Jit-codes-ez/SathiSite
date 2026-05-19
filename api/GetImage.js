export default async function handler(req, res) {

  const owner = "Jit-codes-ez";
  const repo = "SathiSitePrivate";
  const branch = "main";

  const path = req.query.path;

  if (!path) {
    return res.status(400).json({ error: "Path required" });
  }

  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;

  try {

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json"
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({
        error: "GitHub fetch failed"
      });
    }

    const data = await response.json();

    // 🔥 GitHub returns base64 in content field
    const buffer = Buffer.from(data.content, "base64");

    // detect file type
    const ext = path.split(".").pop();

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
    res.status(500).json({ error: err.message });
  }
}