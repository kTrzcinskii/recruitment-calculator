export const url = process.env.NEXT_PUBLIC_URL
  ? `https://${process.env.NEXT_PUBLIC_URL}/api/trpc`
  : "http://localhost:3000/api/trpc";
