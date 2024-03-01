import Link from "next/link";

export default function StatMenu() {
  return (
    <div className="ml-8 mt-4">
      <Link href="insight" legacyBehavior>
        <a className="btn btn-ghost ">인사이트</a>
      </Link>
      <Link href="daily" legacyBehavior>
        <a className="btn btn-ghost ">일간</a>
      </Link>
      <Link href="monthly" legacyBehavior>
        <a className="btn btn-ghost ">월간</a>
      </Link>
      <Link href="all" legacyBehavior>
        <a className="btn btn-ghost ">누적</a>
      </Link>
    </div>
  );
}
