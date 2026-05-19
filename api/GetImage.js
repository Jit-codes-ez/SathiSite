export default async function handler(req, res) {

  const owner = "Jit-codes-ez";
  const repo = "SathiSitePrivate";
  const branch = "main";

  const path = req.query.path;

  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;

  try {

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json"
      }
    });

    const data = await response.json();

    // 🔥 HANDLE WRONG PATH CLEARLY
    if (!data.content) {
      return res.status(404).json({
        error: "File not found or path is incorrect",
        path,
        hint: "Check folder name (case-sensitive) and branch"
      });
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
    res.status(500).json({ error: err.message });
  }
}