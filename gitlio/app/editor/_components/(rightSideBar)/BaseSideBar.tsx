import cx from "classnames";

export default function BaseSideBar() {
  const layoutSelected = true;

  return (
    <div className="flex flex-col items-center w-96 h-dvh bg-blue-400">
      <div
        role="tablist"
        className="tabs bg-neutral-300 tabs-boxed my-6 grid grid-flow-col auto-cols-fr"
      >
        <a role="tab" className={cx("tab", !layoutSelected && "bg-base-100")}>
          Content
        </a>
        <a role="tab" className={cx("tab", layoutSelected && "bg-base-100")}>
          Layout
        </a>
      </div>
    </div>
  );
}
