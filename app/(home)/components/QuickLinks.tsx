import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { quickLinks } from "@/public/data/quick-links"

import Link from "next/link"
const QuickLinks = () => {
  return (
    <div className="col-span-1">
      <Card>
        <CardHeader className="border-b">
          <CardTitle>Quick Links</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ul className="divide-y">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.url} className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickLinks;
