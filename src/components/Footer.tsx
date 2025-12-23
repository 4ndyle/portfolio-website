import { EncryptedText } from "./ui/encrypted-text";

function Footer() {
  return (
    <section className="mt-96 pb-48 w-full">
      <div className="flex flex-col">
        {/* <h2 className="text-7xl font-bold my-16 text-left mb-4 max-[500px]:text-5xl max-[550px]:text-center">
          The End.
        </h2> */}
        <EncryptedText
          text="The End."
          encryptedClassName="text-neutral-500"
          revealedClassName="dark:text-white text-black"
          revealDelayMs={150}
          className="text-7xl font-bold my-16 text-left mb-4 max-[500px]:text-5xl max-[550px]:text-center"
        />
        <p className="text-left text-[#B4B4B4] text-xl max-[550px]:text-center max-[500px]:text-lg">
          {" "}
          4ndyle@gmail.com{" "}
        </p>
      </div>
    </section>
  );
}

export default Footer;
