import { LoginByPhoneNumber } from "../../components/LoginByPhoneNumber";

export default function Home() {
  return (
    <main className="mx-auto container  h-screen w-full flex flex-col items-center justify-center">
      <LoginByPhoneNumber />
    </main>
  );
}
