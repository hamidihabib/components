import useWindowSize from "../useWindowSize";

export default function index() {
  const { width } = useWindowSize();
  return width <= 640
    ? "sm"
    : width <= 768
    ? "md"
    : width <= 1024
    ? "lg"
    : width <= 1280
    ? "xl"
    : width <= 1536
    ? "2xl"
    : "2xl";
}

// Breakpoint prefix	Minimum width	CSS
// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }
