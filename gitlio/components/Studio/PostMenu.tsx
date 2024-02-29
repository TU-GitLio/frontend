import Link from "next/link";

export default function PostMenu() {
  return (
    <div className="ml-8 mt-4">
      <Link href="published" legacyBehavior>
        <a className="btn btn-ghost ">발행</a>
      </Link>
      <Link href="drafts" legacyBehavior>
        <a className="btn btn-ghost ">임시저장</a>
      </Link>
      <Link href="trash" legacyBehavior>
        <a className="btn btn-ghost ">휴지통</a>
      </Link>
    </div>
  );
}
