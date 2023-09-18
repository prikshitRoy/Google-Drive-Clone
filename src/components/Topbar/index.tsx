import React from "react";
import { signIn, signOut } from "next-auth/react";
import { useFetchSession } from "@/hooks/useSession";
import Button from "@/components/common/Button/Button";
import styles from "./Topbar.module.scss";

export default function Topbar() {
  let { session } = useFetchSession();
  return (
    <div className={styles.authBtn}>
      {session ? (
        <img className={styles.ProfileImg} src={session.user.image as string} />
      ) : null}
      <Button
        onClick={session ? () => signOut() : () => signIn()}
        btnClass="btn-primary"
        title={session ? "Sign Out" : "Sign Up!"}
      />
    </div>
  );
}
