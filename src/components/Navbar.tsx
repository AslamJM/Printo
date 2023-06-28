import Link from "next/link";
import Button from "./ui/Button";
import { usePathname } from "next/navigation";
import * as Avatar from "@radix-ui/react-avatar";
import * as Popover from "@radix-ui/react-popover";
import { useUser, useClerk } from "@clerk/nextjs";

const links = [
  { title: "services", className: "mr-4" },
  { title: "showcase", className: "mx-4" },
  { title: "order", className: "ml-4" },
];

const Navbar = () => {
  const path = usePathname();
  const { isSignedIn } = useUser();

  return (
    <div className="h-20 w-full px-2 py-3 flex flex-col md:flex-row items-center justify-between border-b-[1px] border-slate-300">
      <div className="text-teal-900 text-2xl flex items-center justify-center tracking-wide font-bold hover:text-teal-950 text-center md:text-left">
        <Link href="/">Printo</Link>
      </div>
      <div>
        <ul className="flex items-center justify-center">
          {links.map((link) => (
            <li
              className={
                ` text-lg font-semibold text-teal-700 hover:text-teal-950 capitalize ${link.className} ` +
                `${
                  path === "/" + link.title
                    ? " underline underline-offset-4"
                    : ""
                }`
              }
              key={link.title}
            >
              <Link href={`/${link.title}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:block">
        {isSignedIn ? (
          <ProfileMenu />
        ) : (
          <Link href="/sign-in">
            <Button variant="default"> Sign In</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

const ProfileMenu = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  return (
    <Popover.Root>
      <Popover.Trigger asChild className="outline-none">
        <div className="flex items-center justify-center cursor-pointer hover:bg-teal-100 rounded-md p-2">
          <div>
            <Avatar.Root>
              <Avatar.Image
                src={
                  user?.profileImageUrl ||
                  "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                }
                className="h-6 w-6 rounded-full mr-2"
              ></Avatar.Image>
            </Avatar.Root>
          </div>
          <div className="font-semibold text-teal-900">{user?.fullName}</div>
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="rounded p-5 w-[200px] bg-white shadow-sm "
          sideOffset={5}
        >
          <div className="">
            <div className="my-1 py-1 px-1 rounded-md cursor-pointer hover:bg-teal-100 text-teal-900 text-md transition-colors">
              <Link href="/profile">Profile</Link>
            </div>
            <div
              className="my-1 py-1 px-1 rounded-md cursor-pointer hover:bg-teal-100 text-teal-900 text-md transition-colors"
              onClick={() => signOut()}
            >
              Logout
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
