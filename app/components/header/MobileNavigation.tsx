"use client";

import { useNavigation } from "@/data/navigation";
import isActiveMenu from "@/utils/isActiveMenu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

export default function MobileNavigation() {
  const path = usePathname();
  const navigation = useNavigation(true); // Pass `true` if the user is authenticated

  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex={-1}
      id="menu"
      aria-labelledby="menu"
    >
      <Sidebar className={`mobile__menu`}>
        <Menu className="mobile__menu__item">
          <div className="mobile__menu__logo">
            <Link href="/">
              <Image
                src="/assets/images/logo/logo.png"
                height={100}
                width={100}
                alt="logo"
              />
            </Link>
          </div>

          {navigation.map((item) =>
            item.dropdown ? (
              <SubMenu
                className={isActiveMenu(item.dropdown, path) ? "active" : ""}
                key={item.id}
                label={item.name}
              >
                {item.dropdown.map((item2) =>
                  item2.dropdown ? (
                    <SubMenu
                      className={
                        isActiveMenu(item2.dropdown, path) ? "active" : ""
                      }
                      key={item2.id}
                      label={item2.name}
                    >
                      {item2.dropdown.map((item3) => (
                        <MenuItem
                          key={item3.id}
                          className={item3.path === path ? "active" : ""}
                          component={<Link href={item3.path} />}
                        >
                          {item3.name}
                        </MenuItem>
                      ))}
                    </SubMenu>
                  ) : (
                    <MenuItem
                      key={item2.id}
                      className={item2.path === path ? "active" : ""}
                      component={<Link href={item2.path} />}
                    >
                      {item2.name}
                    </MenuItem>
                  )
                )}
              </SubMenu>
            ) : (
              <MenuItem
                key={item.id}
                className={item.path === path ? "active" : ""}
                component={<Link href={item.path} />}
              >
                {item.name}
              </MenuItem>
            )
          )}
        </Menu>
      </Sidebar>
    </div>
  );
}
