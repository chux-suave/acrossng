import Image from "next/image";
import Link from "next/link";
import logo1 from "../../public/images/logo1.png";

export default function ProductItem() {
  return (
    <>
      <div className=" w-screen m0 bg-red-700 cursor-pointer">
        <div className="flex flex-col items-center justify-center p-5">
          <Link href="#" legacyBehavior>
            <div className="rounded border-4 shadow-black h-60 w-60">
              <Image
                src={logo1}
                alt="Product name"
                height={240}
                width={240}
                priority={true}
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
