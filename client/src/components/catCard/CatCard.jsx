import "./catCard.scss";
import { Link } from "react-router-dom";

export default function CatCard({ item }) {
  return (
    <div className="catCard">
      <Link className="link" to="/gigs?cat=design">
        <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </Link>
    </div>
  );
}
