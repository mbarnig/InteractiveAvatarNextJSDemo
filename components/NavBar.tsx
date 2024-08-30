"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { GithubIcon } from "./Icons";
import { ThemeSwitch } from "./ThemeSwitch";

export default function NavBar() {
  return (
    <Navbar className="w-full">
      <NavbarBrand>
        <div className="bg-gradient-to-br from-sky-300 to-indigo-500 bg-clip-text ml-4">
          <p className="text-xl font-semibold text-transparent">
            My HeyGen Interactive Avatar SDK NextJS Demo
          </p>
        </div>
      </NavbarBrand>
      
      <NavbarContent justify="center">
          <Link
            isExternal
            aria-label="Github"
            href="https://github.com/mbarnig/InteractiveAvatarNextJSDemo/"
            className="flex flex-row justify-center gap-1 text-foreground"
          >
            <GithubIcon className="text-default-500" />
            SDK
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
