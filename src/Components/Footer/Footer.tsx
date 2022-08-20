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
        <a href="https://github.com/mirayatech" target="_blank">
          <TbBrandGithub />
        </a>
        <a href="https://www.instagram.com/mirayatech/" target="_blank">
          <TbBrandInstagram />
        </a>
        <a href="https://www.tiktok.com/@mirayatech" target="_blank">
          <TbBrandTiktok />
        </a>
      </div>
    </footer>
  );
}
