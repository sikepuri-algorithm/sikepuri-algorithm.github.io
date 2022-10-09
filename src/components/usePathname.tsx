import { useLocation } from "@docusaurus/router";
import config from "@generated/docusaurus.config";

export default function usePathname() {
  const pathname = useLocation().pathname.slice(config.baseUrl.length - 1);
  return pathname;
}
