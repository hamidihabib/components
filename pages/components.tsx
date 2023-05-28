import Button from "@/components/button";
import Icon from "@/components/icon";

export default function Components() {
  return (
    <div className="components">
      <aside className="aside">
        <ul>
          <li>
            Button
            <ul>
              <li>Primary</li>
              <li>Secondary</li>
              <li>Success</li>
              <li>Info</li>
              <li>Warning</li>
              <li>Error</li>
            </ul>
          </li>
        </ul>
      </aside>
      <article className="article">
        <div>
          <Button>Button</Button>
        </div>
      </article>
    </div>
  );
}
