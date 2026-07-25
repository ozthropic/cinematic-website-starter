export const content = {
  brand: "Nexa Studio",
  nav: [
    { label: "Services", href: "#services" },
    { label: "Promise", href: "#promise" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "YOUR BUSINESS CATEGORY",
    title: "A clear outcome built around your customers.",
    body: "Replace this text with two short sentences explaining who you help, what you improve, and why your approach is different.",
  },
  services: [
    { title: "Service One", body: "Explain the result this service creates for your customer." },
    { title: "Service Two", body: "Keep each service description short, specific, and useful." },
    { title: "Service Three", body: "Focus on business value instead of technical features." },
    { title: "Service Four", body: "Use your own language and replace every placeholder." },
  ],
  promise: {
    title: "Simple to start. Useful from day one.",
    body: "Write a short promise your customer can understand and believe.",
  },
  process: ["Discover", "Design", "Build", "Improve"],
  contact: {
    title: "Ready to start?",
    body: "Invite the visitor to take one clear next step.",
    button: "Book a conversation",
    url: import.meta.env.VITE_BOOKING_URL || "https://calendar.example.com/your-booking-link",
  },
};
