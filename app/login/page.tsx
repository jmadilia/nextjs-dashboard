import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
      </div>
      <div className={`${lusitana.className} flex flex-col items-center justify-center rounded-lg bg-gray-50 px-6 pb-4 pt-8 text-xl`}>
        Use this test account! <span role="img" aria-label="smile">😀</span>
        <span>Email: user@nextmail.com</span>
        <span>Password: 123456</span>
      </div>
    </main>
  );
}