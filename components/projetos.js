import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Estêvão";

export default function Projetos({ children, home }) {
  return (
    <div className="flex justify-center items-center   bg-red-400">
      <header className="">
        {home ? (
          <>
            <Image
              priority
              src="/images/logo.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className="text-gray-50">{name}</h1>
          </>
        ) : (
          <>
            <Link href="./posts/first-post">
              <Image
                priority
                src="/images/logo.png"
                className="rounded-full m-8"
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <h1 className="text-3xl">{name}</h1>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>

      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div class="shrink-0"></div>
        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-slate-500">You have a new message!</p>
        </div>
      </div>
    </div>
  );
}
