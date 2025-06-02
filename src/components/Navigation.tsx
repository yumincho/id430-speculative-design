import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav
      style={{
        padding: "1rem",
        borderBottom: "1px solid #ccc",
        marginBottom: "2rem",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "2rem",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link
            to={"/home"}
            style={{ textDecoration: "none", color: "#646cff" }}
          >
            Intone
          </Link>
        </li>
        <li>
          <Link
            to={"store"}
            style={{ textDecoration: "none", color: "#646cff" }}
          >
            Store
          </Link>
        </li>
        <li>
          <Link
            to={"history"}
            style={{ textDecoration: "none", color: "#646cff" }}
          >
            Brand History
          </Link>
        </li>
        <li>
          <Link
            to={"stories"}
            style={{ textDecoration: "none", color: "#646cff" }}
          >
            Stories
          </Link>
        </li>
      </ul>
    </nav>
  );
}
