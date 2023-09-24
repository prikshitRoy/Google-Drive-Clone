import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return (
    <>
      Dynamin Rounting
      <p>Post: {router.query.slug}</p>
    </>
  );
}
