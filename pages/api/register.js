const users = [
  { username: "testuser", password: "password123" },
  { username: "admin", password: "adminpass	   " },
];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password, confirmPassword } = req.body;

    // Handle registration
    if (req.url === "/api/register") {
      if (!username || !password || !confirmPassword) {
        return res.status(400).json({ message: "All fields are required" });
      }
      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
      }
      if (users.find((u) => u.username === username)) {
        return res.status(409).json({ message: "Username already exists" });
      }
      users.push({ username, password });
      return res.status(201).json({ message: "Registration successful" });
    }

    // Handle login
    if (req.url === "/api/login") {
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        res.status(200).json({ message: "Login successful" });
      } else {
        res.status(401).json({ message: "Invalid username or password" });
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
