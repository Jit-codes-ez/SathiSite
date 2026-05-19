export default async function handler(req, res) {
  const owner = "Jit-codes-ez";
  const repo = "SathiSitePrivate";
  const path = "Images/"; // file path inside repo
  const branch = "main";

  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3.raw"
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({
        error: "GitHub fetch failed"
      });
    }

    const buffer = await response.arrayBuffer();

    res.setHeader("Content-Type", "image/jpeg");
    res.send(Buffer.from(buffer));

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
}