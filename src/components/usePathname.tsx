import { useLocation } from "@docusaurus/router";
import config from "@generated/docusaurus.config";

/**
 * ファイルの絶対パスを表示
 * @returns ファイルの絶対パス
 */

export default function usePathname() {
  const pathname = useLocation().pathname.slice(config.baseUrl.length - 1);
  return pathname;
}
