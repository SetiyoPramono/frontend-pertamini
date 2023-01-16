import { Button, Nav, NavItem } from "reactstrap";
import Logo from "../../logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  {
    title: "Dashboard",
    href: "/admin/das",
    icon: "bi bi-speedometer2",
  },
  // {
  //   title: "Cards",
  //   href: "/admin/cards",
  //   icon: "bi bi-card-text",
  // },
  {
    title: "Table Produk",
    href: "/admin/card_produck",
    icon: "bi bi-layout-split",
  },
  {
    title: "Table Pelanggan",
    href: "/admin/pelanggan",
    icon: "bi bi-layout-split",
  },
  
];

const Sidebar = ({ showMobilemenu }) => {
  let curl = useRouter();
  const location = curl.pathname;

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={showMobilemenu}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link href={navi.href}>
                <a
                  className={
                    location === navi.href
                      ? "text-primary nav-link py-3"
                      : "nav-link text-secondary py-3"
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </a>
              </Link>
            </NavItem>
          ))}
          <Button
            color="danger"
            tag="a"
            className="mt-3"
            href="/"
          >
            Exit
          </Button>
          
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
