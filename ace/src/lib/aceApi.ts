export async function runACE(command: string, args: Record<string, any> = {}) {
  const res = await fetch("http://127.0.0.1:8000/run", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ command, args }),
  });

  if (!res.ok) {
    throw new Error("ACE backend error");
  }

  return res.json();
}
