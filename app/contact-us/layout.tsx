import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Critter",
  description:
    "Have a question or want to learn more about Critter? Reach out to our team and we'll get back to you shortly.",
  openGraph: {
    title: "Contact Us | Critter",
    description:
      "Have a question or want to learn more about Critter? Reach out to our team.",
    url: "https://critter.pet/contact-us",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
