import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Projetos({ children, home }) {
  return (
    <main>
      <section>
        <div className="flex justify-center items-center flex-col">
          <div className="flex justify-end items-end" >
            <div className=" bg-red-500  p-[11rem]">
              <div className="bg-blue-700 ">
              <Image
              priority
              src="/images/right-arrow.png"
              className={utilStyles.borderCircle}
              height={144}
              width={74}
              alt=""
            />
              </div>
            </div>
            <div className="relative  bg-red-400  p-[11rem]">
            <div className="bg-blue-700 absolute left-0 bottom-0 hover:left-[350px]">
            <Image
              priority
              src="/images/right-arrow.png"
              className={utilStyles.borderCircle}
              height={144}
              width={74}
              alt=""
            />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className=" relative bg-red-300  p-[11rem]">
            <div className="bg-blue-700 absolute left-0 bottom-0  hover:left-[350px]">
            <Image
              priority
              src="/images/right-arrow.png"
              className={utilStyles.borderCircle}
              height={144}
              width={74}
              alt=""
            />
              </div>
            </div>
            <div className=" relative bg-red-200  p-[11rem] ">
            <div className="bg-blue-700 absolute left-0 bottom-0 hover:left-[350px]">
            <Image
              priority
              src="/images/right-arrow.png"
              className={utilStyles.borderCircle}
              height={144}
              width={74}
              alt=""
            />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
