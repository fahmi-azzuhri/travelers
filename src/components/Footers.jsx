import { Typography } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Help center",
    items: ["FAQ", "Privacy policy", "Cookies policy", "Terms of use"],
  },
  {
    title: "Company",
    items: ["FAQ", "About us", "Career", "Blog"],
  },
  {
    title: "Destinations",
    items: ["Country", "City", "Events", "Help center"],
  },
  {
    title: "Become our partner",
    items: [
      "Partner hub",
      "Advertise on Travelers",
      "Affiliate",
      "Partner connectivity",
    ],
  },
  {
    title: "Download app",
    items: ["iOS app", "Play Store"],
  },
];

const currentYear = new Date().getFullYear();

export function Footers() {
  return (
    <footer className="relative w-full mt-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex lg:flex-row flex-col gap-4 lg:justify-evenly md:text-center">
          {LINKS.map(({ title, items }) => (
            <ul key={title}>
              <Typography
                variant="small"
                color="black"
                className="mb-3 font-bold"
              >
                {title}
              </Typography>
              {items.map((link) => (
                <li key={link}>
                  <Typography
                    as="a"
                    href="#"
                    color="gray"
                    className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                  >
                    {link}
                  </Typography>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 ">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">Travelers</a>. All Rights
            Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
