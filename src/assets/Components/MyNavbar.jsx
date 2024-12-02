import React from "react";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  RangeCalendar,
  Link,
  } from "@nextui-org/react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { UserIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuitems = [
    "Eat & Drink",
    "Club",
    "Thinks To do",
    "Shoping",
    "Account",
    "Contact",
  ];
  return (
    <section>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className=" w-full"
      >
        <NavbarContent className="sm:hidden " justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          ></NavbarMenuToggle>
        </NavbarContent>
        <NavbarContent className="sm:hidden">
          <NavbarBrand>
            <img src="./title.svg" alt="" className="w-44" />{" "}
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className=" hidden sm:flex gap-4 justify-center w-full ">
          <NavbarBrand>
            <img src="./title.svg" alt="" />{" "}
          </NavbarBrand>
          <NavbarItem>
            <Link className="foreground ">Eat & Drink</Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="foreground">
              {" "}
              Club <sup> +HOT</sup>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="none">Thinks to do <ChevronDownIcon className="text-[#0E8BFF] h-4 w-4"/> </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">Water sports</DropdownItem>
                <DropdownItem key="copy"> Day Parties</DropdownItem>
                <DropdownItem key="edit"> Outdoors</DropdownItem>
                <DropdownItem key="edit"> Rentals</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </section>
  );
}

export default MyNavbar;
