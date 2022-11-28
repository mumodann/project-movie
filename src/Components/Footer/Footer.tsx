import { TbBrandInstagram, TbBrandGithub, TbBrandTiktok } from "react-icons/tb";
import "/src/style/Footer.css";

export function Footer(): JSX.Element {
  return (
    <footer>
      Build by{" "}
      <a target="_blank" href="https://github.com/mirayatech">
        Miraya
      </a>
      <div className="social-media">
        <a href="https://github.com/mumodann" target="_blank">
          <TbBrandGithub />
        </a>
      </div>
    </footer>
  );
}
