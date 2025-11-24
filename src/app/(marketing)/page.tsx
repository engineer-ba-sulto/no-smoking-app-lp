import WaitlistForm from "@/components/feature/WaitlistForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Home</h1>
      <WaitlistForm />
      <div className="mt-8 flex gap-4 text-sm text-gray-600">
        <Link
          href="/terms-of-service.html"
          className="hover:text-gray-900 underline"
        >
          利用規約
        </Link>
        <span className="text-gray-400">|</span>
        <Link
          href="/privacy-policy.html"
          className="hover:text-gray-900 underline"
        >
          プライバシーポリシー
        </Link>
      </div>
    </main>
  );
}
