import Link from "next/link";

const SEARCHES = [
  {
    id: 1,
    term: "Sunglasses",
    url: "/search/sunglasses",
    colour: "bg-yellow-500",
  },
  {
    id: 2,
    term: "MacBook Pro",
    url: "/search/macbook pro",
    colour: "bg-green-500",
  },
  {
    id: 3,
    term: "iPhones under $750",
    url: "/search/iphone?sort_by=r&max_price=750",
    colour: "bg-red-500",
  },
  {
    id: 4,
    term: "Trainers over $100",
    url: "/search/trainers?sort_by=r&min_price=100",
    colour: "bg-fuchsia-500",
  },
  {
    id: 5,
    term: "Water Bottles",
    url: "/search/water bottles",
    colour: "bg-blue-500",
  },
  {
    id: 6,
    term: "Tablets under $500",
    url: "/search/tablets?sort_by=r&max_price=500",
    colour: "bg-pink-500",
  },
  {
    id: 7,
    term: "Smart Watches",
    url: "/search/smart watches",
    colour: "bg-orange-500",
  },
  {
    id: 8,
    term: "Headphones",
    url: "/search/headphones",
    colour: "bg-rose-500",
  },
  {
    id: 9,
    term: "Cars over $1000",
    url: "/search/cars?sort_by=r&min_price=1000",
    colour: "bg-amber-500",
  },
];

export default function Home() {
  return (
    <div className="p-10 pt-0 text-center md:text-left">
      <h1 className="text-3xl font-extralight mb-5">
        Welcome to Google Shopping
      </h1>
      <h2 className="mb-5">
        Get started by clicking on one of the example search items or typing in
        an item yourself above!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-center items-center mt-5">
        {SEARCHES.map((search) => (
          <Link
            prefetch={false}
            key={search.id}
            href={search.url}
            className={`${search.colour} w-full h-36 hover:opacity-50 text-white font-bold py-2 px-4 rounded`}
          >
            {search.term}
          </Link>
        ))}
      </div>
    </div>
  );
}
